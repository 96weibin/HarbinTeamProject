function getGoods(url, data) {
    this.url = url;
    this.data = data;
    console.log(this.data);
    this.createDom();
    this.addListener();
}
getGoods.prototype.createDom = function() {
    this.oContent = document.createElement('div');
    this.oContent.className = 'content';
    document.body.appendChild(this.oContent);
    var self = this;
    console.log(this.url);
    myajax.get(this.url,this.data,function(error, respond) {
        var json = JSON.parse(respond);
        var arr = json.data;
        console.log(json);
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
            self.oItem.setAttribute('data-goods_id',arr[i].goods_id);
            self.oItem.addEventListener('click', function() {
                var goods_id = this.dataset['goods_id'];            
                location.href = 'show.html?goods_id=' + goods_id;
            })
        }
    })
}
getGoods.prototype.addListener = function() {
    
}

