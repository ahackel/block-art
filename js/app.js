var imageCount = 8;

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
    '<svg viewBox="0 0 512 512"><rect fill="currentColor" width="512" height="512" /></svg>',
    '<svg viewBox="0 0 512 512"><rect fill="currentColor" width="512" height="256" /></svg>',
    '<svg viewBox="0 0 512 512"><rect fill="currentColor" width="256" height="256" /></svg>',
    '<svg viewBox="0 0 512 512"><rect fill="currentColor" width="256" height="256" /><<rect fill="currentColor" x="256" y="256" width="256" height="256" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 0,512 512,0" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 256,256 512,0" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 256,256 512,0" /><polygon fill="currentColor" points="0,512 256,256 512,512" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="256,0 512,256 256,512 0,256" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 256,512 512,0" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 0,512 256,0" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 256,512 256,0" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 256,256 256,0" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="256,0 512,0 512,512 0,512 0,256" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="256,0 512,0 512,512 256,512 0,256" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="256,0 512,0 512,256 256,512 0,512 0,256" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="256,0 512,0 512,256 256,512 0,256" /></svg>',
    '<svg viewBox="0 0 512 512"><rect fill="currentColor" width="788" height="788" rx="256"/></svg>',
    '<svg viewBox="0 0 512 512"><rect fill="currentColor" width="788" height="512" rx="256"/></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" cx="256" cy="256" r="256" /><rect x="256" fill="currentColor" width="256" height="256" /><<rect fill="currentColor" y="256" width="256" height="256" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" cx="256" cy="256" r="256" /><rect fill="currentColor" x="256" width="256" height="256" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" cx="256" cy="256" r="256" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" cx="512" cy="256" r="256" /></svg>',
    '<svg viewBox="0 0 512 512"><path fill="currentColor" d="M256,0 a256,256 0 0 0 0,512" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" cx="512" cy="256" r="256" /><circle fill="currentColor" cy="256" r="256" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" cx="256" cy="256" r="128" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" r="512" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" r="256" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" r="256" /><circle fill="currentColor" cx="512" cy="512" r="256" /></svg>',
    '<svg viewBox="0 0 2 2"><path fill="currentColor" d="M1,0 A1 1 0 0 0 2 1 A 1 1 0 0 0 1 2 A 1 1 0 0 0 0 1 A 1 1 0 0 0 1 0" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="none" stroke="currentColor" stroke-width="256" cx="0" cy="0" r="384" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="none" stroke="currentColor" stroke-width="128" cx="256" cy="256" r="192" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="none" stroke="currentColor" stroke-width="128" cx="0" cy="0" r="256" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="none" stroke="currentColor" stroke-width="128" cx="0" cy="0" r="256" /><<circle fill="none" stroke="currentColor" stroke-width="128" cx="512" cy="512" r="256" /></svg>',
    '<svg viewBox="0 0 512 512"><rect fill="currentColor" y="192" width="512" height="128" /></svg>',
    '<svg viewBox="0 0 512 512"><rect fill="currentColor" y="192" width="512" height="128" /><rect fill="currentColor" x="192" width="128" height="512" /></svg>',
    '<svg viewBox="0 0 512 512"><rect fill="currentColor" y="192" width="320" height="128" /><rect fill="currentColor" x="192" width="128" height="512" /></svg>',
    '<svg viewBox="0 0 512 512"><rect fill="currentColor" y="192" width="320" height="128" /><rect fill="currentColor" x="192" width="128" height="320" /></svg>',
    '<svg viewBox="-20 -20 300 300"><path fill="currentColor" d="m55,237 74-228 74,228L9,96h240"/></svg>',
    '<svg viewBox="-4 -4 28 28"><path fill="currentColor" d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z"/></svg>'

]

function clamp(x){
    return Math.max(0, Math.min(1, x));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function encodeTransform(rotation, flipX, flipY){
    var transform = rotation;
    if (flipX){
        transform += 4;
    }
    if (flipY){
        transform += 8;
    }
    return transform;
}

function decodeTransform(transform){
    return {
        rotation: transform & 3, // first 2 bits
        flipX: transform & 4,
        flipY: transform & 8
    }
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
    
    setTransform(transform){
        var t = decodeTransform(transform);
        var scaleX = t.flipX ? -1 : 1;
        var scaleY = t.flipY ? -1 : 1;
        var rotation = t.rotation * 90;
        this.element.style.transform = "scale(" + scaleX + "," + scaleY +") rotate(" + rotation + "deg)";
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
        this.createBlocks();
        this.loadData(data);
    }
    
    loadData(data){
        if (data == null){
            this.data = new Int8Array(this.width * this.height * 4);
            this.randomize();
            return;
        }
        
        this.data = data; 
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                this.updateBlock(x, y);
            }
        }
    }
    
    getPixel(x, y) {
        var index = 4 * this.getIndex(x, y);
        return {
            symbol: this.data[index],
            color: this.data[index + 1],
            background: this.data[index + 2],
            transform: this.data[index + 3]
        }
    }

    setPixel(x, y, pixel){
        var index = 4 * this.getIndex(x, y);
        this.data[index] = pixel.symbol || 0;
        this.data[index + 1] = pixel.color || 0;
        this.data[index + 2] = pixel.background || 0;
        this.data[index + 3] = pixel.transform || 0;
        this.updateBlock(x, y);
    }
    
    setPixelSymmetric(x, y, pixel, symmetryX, symmetryY){
        this.setPixel(x, y, pixel);
        var t = decodeTransform(pixel.transform);

        if (symmetryX){
            this.setPixel(this.width - x - 1, y, {
                symbol: pixel.symbol,
                color: pixel.color,
                background: pixel.background,
                transform: encodeTransform(t.rotation, !t.flipX, t.flipY)
            });
        }

        if (symmetryY){
            this.setPixel(x, this.height - y - 1, {
                symbol: pixel.symbol,
                color: pixel.color,
                background: pixel.background,
                transform: encodeTransform(t.rotation, t.flipX, !t.flipY)
            });
        }

        if (symmetryX && symmetryY){
            this.setPixel(this.width - x - 1, this.height - y - 1, {
                symbol: pixel.symbol,
                color: pixel.color,
                background: pixel.background,
                transform: encodeTransform(t.rotation, !t.flipX, !t.flipY)
            });
        }
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
        block.setTransform(pixel.transform);
    }

    createBlocks(){
        this.blocks = [];
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                var blockElement = document.createElement("div");
                this.element.appendChild(blockElement);
                var block = new Block(blockElement);
                this.blocks.push(block);
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
    
    randomize() {
        var colorCount = getRandomInt(5) + 3;
        
        var myColors = [];
        for (let i = 0; i < colorCount; i++) {
            myColors.push(getRandomInt(colors.length));
        }
        
        var tileCount = getRandomInt(7) + 3;
        
        var tiles = [];
        for (let i = 0; i < 3; i++) {
            tiles.push(getRandomInt(symbols.length));
        }
        // add next tiles in list to have some similar tiles:
        for (let i = 3; i < tileCount; i++) {
            tiles.push((tiles[i-1] + 1) % symbols.length);
        }
        
        var symmetryX = true;
        var symmetryY = getRandomInt(2);
        
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                this.setPixelSymmetric(x, y, {
                    color: myColors[getRandomInt(myColors.length)],
                    background: myColors[getRandomInt(myColors.length)],
                    symbol: tiles[getRandomInt(tiles.length)],
                    transform: getRandomInt(16)
                }, symmetryX, symmetryY);
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
        this.optionElements = [];
        this.element.addEventListener("mousedown", evt => this.mouseDown(evt));
        this.element.addEventListener("mousemove", evt => this.mouseDown(evt));
        this.element.addEventListener("touchstart", evt => this.mouseDown(evt));
        this.element.addEventListener("touchmove", evt => this.mouseDown(evt));


        for (let i = 0; i < this.options.length; i++){
            var optionElement = document.createElement("div");
            this.setupOption(optionElement, i);
            this.element.appendChild(optionElement);
            this.optionElements[i] = optionElement;
        }
    }

    mouseDown(evt) {
        var isTouchEvent = evt.type.includes("touch");
        var buttonDown = isTouchEvent ? evt.touches.length === 1 : evt.buttons === 1;

        if (!buttonDown){
            return;
        }

        var clientX = isTouchEvent ? evt.touches[0].clientX : evt.clientX;
        var clientY = isTouchEvent ? evt.touches[0].clientY : evt.clientY;

        var touchedElement = document.elementFromPoint(clientX, clientY);

        for (let i = 0; i < this.optionElements.length; i++) {
            if (touchedElement == this.optionElements[i] && i != this.index){
                this.setIndex(i);
            }
        }

        evt.preventDefault();
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

    mouseDown(evt) {
        if (!this.isEditing){
            return;
        }
        
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

        this.blockArt.setPixelSymmetric(x, y, {
            symbol: this.symbolPalette.index,
            color: this.colorPalette.index,
            background: this.backgroundPalette.index,
            transform: encodeTransform(this.rotation, this.flipX, this.flipY)
        }, this.symmetryX, this.symmetryY);
        

        
        evt.preventDefault();
    }

    mouseUp(evt) {
        if (!this.isEditing) {
            return;
        }
        this.storeImage();
    }


    setSymmetryX(on){
        this.symmetryX = on;
        this.symmetryXButton.classList.toggle("disabled", !on);
    }
    
    setSymmetryY(on){
        this.symmetryY = on;
        this.symmetryYButton.classList.toggle("disabled", !on);
    }
    
    run() {
        this.isEditing = false;
        this.imageIndex = 0;

        this.viewerContainer = document.getElementById("viewer");
        this.editorContainer = document.getElementById("editor");

        this.rotation = 0;
        this.flipX = false;
        this.flipY = false;
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
            this.previewBlock.setTransform(encodeTransform(this.rotation, this.flipX, this.flipY));
        });
        this.rotaterightButton = document.getElementById("rotate-right");
        fastClick(this.rotaterightButton, evt => {
            this.rotation = (this.rotation + 1) % 4;
            this.previewBlock.setTransform(encodeTransform(this.rotation, this.flipX, this.flipY));
        });
        this.flipXButton = document.getElementById("flip-x");
        fastClick(this.flipXButton, evt => {
            this.flipX = !this.flipX;
            this.previewBlock.setTransform(encodeTransform(this.rotation, this.flipX, this.flipY));
        });
        this.flipYButton = document.getElementById("flip-y");
        fastClick(this.flipYButton, evt => {
            this.flipY = !this.flipY;
            this.previewBlock.setTransform(encodeTransform(this.rotation, this.flipX, this.flipY));
        });

        this.clearButton = document.getElementById("clear");
        fastClick(this.clearButton, evt => {
            this.blockArt.clear(this.backgroundPalette.index);
        });

        this.symmetryXButton = document.getElementById("symmetry-x");
        fastClick(this.symmetryXButton, evt => {
            this.setSymmetryX(!this.symmetryX);
        });

        this.symmetryYButton = document.getElementById("symmetry-y");
        fastClick(this.symmetryYButton, evt => {
            this.setSymmetryY(!this.symmetryY);
        });
        
        this.setSymmetryX(false);
        this.setSymmetryY(false);
        this.colorPalette.setIndex(6);
        this.backgroundPalette.setIndex(0);
        this.symbolPalette.setIndex(0);

        fastClick(document.getElementById("swap-colors"), evt => {
            var color = this.colorPalette.index;
            this.colorPalette.setIndex(this.backgroundPalette.index);
            this.backgroundPalette.setIndex(color);
        });

        fastClick(document.getElementById("edit"), evt => {
            this.setEditMode(true);
        });

        fastClick(document.getElementById("view"), evt => {
            this.storeImage();
            this.setEditMode(false);
        });

        fastClick(document.getElementById("randomize"), evt => {
            this.blockArt.randomize();
            this.storeImage();
        });

        fastClick(document.getElementById("previous"), evt => {
            this.changeImage(-1);
        });

        fastClick(document.getElementById("next"), evt => {
            this.changeImage(1);
        });

        this.blockArt = new BlockArt(document.getElementById("block-art"), 8, 8, this.readData("image0"));

        this.blockArt.element.addEventListener("mousedown", evt => this.mouseDown(evt));
        this.blockArt.element.addEventListener("mousemove", evt => this.mouseDown(evt));
        this.blockArt.element.addEventListener("touchstart", evt => this.mouseDown(evt));
        this.blockArt.element.addEventListener("touchmove", evt => this.mouseDown(evt));

        this.blockArt.element.addEventListener("mouseup", evt => this.mouseUp());
        this.blockArt.element.addEventListener("touchend", evt => this.mouseUp());
        
        document.body.appendChild(this.blockArt.element);
        this.setEditMode(this.isEditing);
    }
    
    setEditMode(isEditing){
        this.isEditing = isEditing;
        this.viewerContainer.style.display = !isEditing ? "block" : "none";
        this.editorContainer.style.display = isEditing ? "block" : "none";
        this.blockArt.element.classList.toggle("editing", isEditing);
        this.blockArt.element.classList.toggle("viewing", !isEditing);
    }

    changeImage(delta) {
        this.loadImage((this.imageIndex + imageCount + delta) % imageCount);
    }

    loadImage(index) {
        this.imageIndex = index;
        let key = "image" + this.imageIndex;
        var data = this.readData(key);
        this.blockArt.loadData(data);
        console.log("loaded " + key);
    }

    storeImage(){
        var data = this.blockArt.data;
        let key = "image" + this.imageIndex;
        localStorage.setItem(key, JSON.stringify(Array.from(data)));
        console.log("stored " + key);
    }

    readData(key){
        var json = localStorage.getItem(key);
        if (json){
            return new Int8Array(JSON.parse(json));
        }
        return null;
    }
}

function preventOverScroll() {
    document.ontouchmove = event => { event.preventDefault();}
}

document.addEventListener("DOMContentLoaded", () => {
    // preventOverScroll();
    var app = new App();
    app.run();
});
