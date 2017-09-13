function Carousel() {
    this.creatDom();
    this.addListener();
}
Carousel.prototype.creatDom = function() {
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'wrapper';
    document.body.appendChild(this.wrapper);
}
Carousel.prototype.addListener = function() {
    
}