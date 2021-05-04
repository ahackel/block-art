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
    '<svg viewBox="0 0 512 512"></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 0,512 512,0" /></svg>',
    '<svg viewBox="0 0 512 512"><circle fill="currentColor" cx="0" cy="0" r="512" /></svg>',
    '<svg viewBox="0 0 512 512"><polygon fill="currentColor" points="0,0 512,0 512,256 0,256" /></svg>',
]

class BlockArt{
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = new Int8Array(this.width * this.height * 4);
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
        block.className = '';
        // block.classList.add("symbol" + pixel.symbol);
        block.innerHTML = symbols[pixel.symbol];
        block.style.color = colors[pixel.color];
        block.style.backgroundColor = colors[pixel.background];
        block.classList.add("rotation" + pixel.rotation);
    }

    createBlocks(){
        this.blocks = [];
        this.element = document.createElement("div");
        this.element.style.width = this.width + "em";
        this.element.style.height = this.height + "em";
        this.element.classList.add("block-art");
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                var block = document.createElement("div");
                this.element.appendChild(block);
                this.blocks.push(block);
                this.updateBlock(x, y);
                this.setPixel(x, y, {symbol: 2, color: 5})
            }
        }
    }
}


var app = {
    run: function(){
        var blockArt = new BlockArt(8, 8);
        
        blockArt.element.addEventListener("mousedown", evt => changeBlockColor(evt))
        blockArt.element.addEventListener("mousemove", evt => changeBlockColor(evt))

        function changeBlockColor(evt) {
            if (evt.buttons !== 1){
                return;
            }
            var rect = blockArt.element.getBoundingClientRect();
            var x = Math.floor(blockArt.width * (evt.clientX - rect.x) / rect.width);
            var y = Math.floor(blockArt.height * (evt.clientY - rect.y) / rect.height);
            var pixel = blockArt.getPixel(x, y);
            
            if (evt.shiftKey){
                pixel.rotation = (pixel.rotation + 1) % 4;
            }
            else if (evt.altKey){
                pixel.color = (pixel.color + 1) % colors.length;
            }
            else if (evt.metaKey){
                pixel.background = (pixel.background + 1) % colors.length;
            }
            else{
                pixel.symbol = (pixel.symbol + 1) % symbols.length;
            }
            blockArt.setPixel(x, y, pixel);
            evt.preventDefault();
        }

        document.body.appendChild(blockArt.element);
    }
}

document.body.onload = app.run;