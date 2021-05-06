var colors = [
    "#000000", "#222034", "#45283c", "#663931",
    "#8f563b", "#df7126", "#d9a066", "#eec39a",
    "#fbf236", "#99e550", "#6abe30", "#37946e",
    "#4b692f", "#524b24", "#323c39", "#3f3f74",
    "#306082", "#5b6ee1", "#639bff", "#5fcde4",
    "#cbdbfc", "#ffffff", "#9badb7", "#847e87",
    "#696a6a", "#595652", "#76428a", "#ac3232",
    "#d95763", "#d77bba", "#8f974a", "#8a6f30",
];

var symbols = [
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 512,0 512,512 0,512" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 512,0 512,256 0,256" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 256,0 256,256 0,256" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 0,512 512,0" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" cx="256" cy="256" r="256" /><polygon fill="currentColor" points="0,0 256,0 256,512 0,512" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" cx="256" cy="256" r="256" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" cx="0" cy="0" r="512" /></svg>',
]

function clamp(x){
    return Math.max(0, Math.min(1, x));
}

function fastClick(target, callback){
    target.addEventListener("mousedown", clicked);
    target.addEventListener("touchstart", clicked);
    
    function clicked(evt){
        evt.preventDefault();
        callback(evt);
    }
}

class Block{
    constructor(element){
        this.element = element;
        this.element.classList.add("block");
    }

    setSymbol(symbol) {
        this.element.innerHTML = symbols[symbol];
    }
    
    setColor(color) {
        this.element.style.color = colors[color];
    }
    
    setBackground(background) {
        this.element.style.backgroundColor = colors[background];
    }
    
    setRotation(rotation){
        this.element.style.transform = "rotate(" + rotation * 90 + "deg)";
    }
}

class BlockArt{
    constructor(element, width, height, data) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.element.classList.add("block-art");
        this.element.style.width = this.width + "em";
        this.element.style.height = this.height + "em";
        this.data = data || new Int8Array(this.width * this.height * 4);
        this.createBlocks();
    }
    
    getPixel(x, y) {
        var index = 4 * this.getIndex(x, y);
        return {
            symbol: this.data[index],
            color: this.data[index + 1],
            background: this.data[index + 2],
            rotation: this.data[index + 3]
        }
    }

    setPixel(x, y, pixel){
        var index = 4 * this.getIndex(x, y);
        this.data[index] = pixel.symbol || 0;
        this.data[index + 1] = pixel.color || 0;
        this.data[index + 2] = pixel.background || 0;
        this.data[index + 3] = pixel.rotation || 0;
        this.updateBlock(x, y);
    }

    getIndex(x, y) {
        return x + y * this.width;
    }

    getBlock(x, y){
        return this.blocks[this.getIndex(x, y)];
    }

    updateBlock(x, y) {
        var pixel = this.getPixel(x, y);
        var block = this.getBlock(x, y);
        block.setSymbol(pixel.symbol);
        block.setColor(pixel.color);
        block.setBackground(pixel.background);
        block.setRotation(pixel.rotation);
    }

    createBlocks(){
        this.blocks = [];
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                var blockElement = document.createElement("div");
                this.element.appendChild(blockElement);
                var block = new Block(blockElement);
                this.blocks.push(block);
                this.updateBlock(x, y);
            }
        }
    }

    clear(color) {
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                this.setPixel(x, y, {color: color})
            }
        }
    }
}

class Palette{
    constructor(element, options, onChangeCallback){
        this.element = element;
        this.options = options;
        this.element.classList.add("palette");
        this.createOptions();
        this.setIndex(0);
        this.onChangeCallback = onChangeCallback;
    }

    createOptions() {
        for (let i = 0; i < this.options.length; i++){
            var optionElement = document.createElement("div");
            this.setupOption(optionElement, i);
            fastClick(optionElement,evt => this.setIndex(i));
            this.element.appendChild(optionElement);
        }
    }
    
    setupOption(optionElement, index){
    }

    setIndex(index) {
        for (let i = 0; i < this.element.childElementCount; i++) {
            this.element.children.item(i).classList.toggle("selected", index === i);            
        }
        
        this.index = index;
        if (this.onChangeCallback){
            this.onChangeCallback(index);
        }
    }
}

class ColorPalette extends Palette{
    constructor(element, onChangeCallback) {
        super(element, colors, onChangeCallback);
        this.setIndex(6);
    }
    
    setupOption(optionElement, index){
        optionElement.style.backgroundColor = colors[index];
    }
}

class SymbolPalette extends Palette{
    constructor(element, onChangeCallback) {
        super(element, symbols, onChangeCallback);
    }
    
    setupOption(optionElement, index){
        var block = new Block(optionElement);
        block.setSymbol(index);
        block.setColor(20);
    }
}


class App{
    storeData(){
        var data = this.blockArt.data;
        localStorage.setItem("data", JSON.stringify(Array.from(data)));
    }

    readData(){
        var json = localStorage.getItem("data");
        if (json){
            return new Int8Array(JSON.parse(json));
        }
        return null;
    }

    changeBlockColor(evt) {
        var isTouchEvent = evt.type.includes("touch");
        var buttonDown = isTouchEvent ? evt.touches.length === 1 : evt.buttons === 1;

        if (!buttonDown){
            return;
        }

        var rect = this.blockArt.element.getBoundingClientRect();
        var clientX = isTouchEvent ? evt.touches[0].clientX : evt.clientX;
        var clientY = isTouchEvent ? evt.touches[0].clientY : evt.clientY;
        var x = Math.floor(this.blockArt.width * clamp((clientX - rect.left) / rect.width));
        var y = Math.floor(this.blockArt.height * clamp((clientY - rect.top) / rect.height));

        this.blockArt.setPixel(x, y, {
            symbol: this.symbolPalette.index,
            color: this.colorPalette.index,
            background: this.backgroundPalette.index,
            rotation: this.rotation
        });
        evt.preventDefault();
    }
    
    run() {
        this.rotation = 0;
        this.previewBlock = new Block(document.getElementById("preview-block"));
        this.colorPalette = new ColorPalette(document.getElementById("color-palette"), color => {
            this.previewBlock.setColor(color);
        });

        this.backgroundPalette = new ColorPalette(document.getElementById("background-palette"), color => {
            this.previewBlock.setBackground(color);
        });

        this.symbolPalette = new SymbolPalette(document.getElementById("symbol-palette"), index => {
            this.previewBlock.setSymbol(index);
        });
        this.rotateLeftButton = document.getElementById("rotate-left");
        fastClick(this.rotateLeftButton, evt => {
            this.rotation = (this.rotation + 3) % 4;
            this.previewBlock.setRotation(this.rotation);
        });
        this.rotaterightButton = document.getElementById("rotate-right");
        fastClick(this.rotaterightButton, evt => {
            this.rotation = (this.rotation + 1) % 4;
            this.previewBlock.setRotation(this.rotation);
        });

        this.clearButton = document.getElementById("clear");
        fastClick(this.clearButton, evt => {
            this.blockArt.clear(this.colorPalette.index);
        });

        this.blockArt = new BlockArt(document.getElementById("block-art"), 8, 8, this.readData());

        this.blockArt.element.addEventListener("mousedown", evt => this.changeBlockColor(evt));
        this.blockArt.element.addEventListener("mousemove", evt => this.changeBlockColor(evt));
        this.blockArt.element.addEventListener("touchstart", evt => this.changeBlockColor(evt));
        this.blockArt.element.addEventListener("touchmove", evt => this.changeBlockColor(evt));

        this.blockArt.element.addEventListener("mouseup", evt => this.storeData());
        this.blockArt.element.addEventListener("touchend", evt => this.storeData());
        
        document.body.appendChild(this.blockArt.element);
    }
}

//document.addEventListener("touchstart", evt => evt.preventDefault());
var app = new App();
document.body.onload = () => app.run();