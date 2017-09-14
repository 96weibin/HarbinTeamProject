function Magnifier(main, shadow, show){
    this.main = main;
    this.shadow = shadow;
    this.show = show;
    var self = this;
    this.main.onmousemove = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        self.shadow.style.display = 'block';
        self.show.style.display = 'block';
        if(event.clientX < 430 && event.clientX  > 200){
            self.shadow.style.left = event.clientX - 100 + 'px';
        }else if(event.clientX <= 200){
            self.shadow.style.left = '100px';
        }else{
            self.shadow.style.left = '330px';
        }
        if(event.clientY < 430 && event.clientY > 200){
            self.shadow.style.top = event.clientY - 100 + 'px';
        }else if(event.clientY <= 200){
            self.shadow.style.top = '100px';
        }else{
            self.shadow.style.top = '330px';
        }
        var ofl = self.main.offsetLeft - self.shadow.offsetLeft;
        var oft = self.main.offsetTop - self.shadow.offsetTop;
        self.show.style.backgroundPosition = ofl * 2 + "px " + oft * 2 + "px";
    }
    this.main.onmouseout = function() {
        self.shadow.style.display = 'none';
        self.show.style.display = 'none';
    }
}
