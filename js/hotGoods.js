function HotGoods() {
    this.createDom();
    this.addListener();
}
HotGoods.prototype.createDom = function() {
    this.oContent = document.createElement('div');
    this.oContent.className = 'content';
    document.body.appendChild(this.oContent);
    var self = this;
    myajax.get('http://h6.duchengjiu.top/shop/api_goods.php',{},function(error, respond) {
        var json = JSON.parse(respond);
        var arr = json.data;
        console.log(json.data[0]);
    
        for(var i = 0; i < arr.length; i++) {
    
            self.oItem = document.createElement('div');
            self.oItem.className = 'goods';

            self.goodsPic = document.createElement('div');
            self.goodsPic.style.background = 'url(' + arr[i].goods_thumb + ')';
            self.goodsPic.style.backgroundPosition = 'center';
            self.goodsPic.style.backgroundSize = 'cover';
            self.goodsPic.className = 'goodsPic'


            self.goodsName = document.createElement('div');
            self.goodsName.innerText = arr[i].goods_name;
            self.goodsName.className = 'goodsName';

            self.goodsPrice = document.createElement('div');
            self.goodsPrice.innerText = arr[i].price;
            self.goodsPrice.className = 'goodsPrice';
            
            
            self.oContent.appendChild(self.oItem);
            self.oItem.appendChild(self.goodsPic);
            self.oItem.appendChild(self.goodsName);
            self.oItem.appendChild(self.goodsPrice);
            
        }
    })
}
HotGoods.prototype.addListener = function() {
    
}

