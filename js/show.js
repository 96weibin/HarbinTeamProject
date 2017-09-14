function Show(){
    this.creatElement();
}
Show.prototype.creatElement = function(){

    this.content = document.createElement('div');
    this.content.className = 'content';
    document.body.appendChild(this.content);

    this.goods = document.createElement('div');
    this.goods.className = 'goods';
    this.content.appendChild(this.goods);

    this.goodsName = document.createElement('div');
    this.goodsName.className = 'goodsName';
    this.content.appendChild(this.goodsName);
    
    this.goodsDesc = document.createElement('div');
    this.goodsDesc.className = 'goodsDesc';
    this.content.appendChild(this.goodsDesc);

    this.goodsPrice = document.createElement('div');
    this.goodsPrice.className = 'goodsPrice';
    this.content.appendChild(this.goodsPrice);


    this.join = document.createElement('div');
    this.join.className = 'join';
    this.join.innerText = '加入购物车';
    this.join.addEventListener('click',function(){
        location.href = 'shoppingCart.html?show.js/31'
    })
    this.content.appendChild(this.join);

    
    var self = this;
    myajax.get('http://h6.duchengjiu.top/shop/api_goods.php',{'goods_id':getQueryString('goods_id')},function(error, respond){
        self.message = JSON.parse(respond).data[0];
        console.log(self.message);
        self.goods.style.background = 'url(' + self.message.goods_thumb +')';
        self.goodsName.innerText = self.message.goods_name;
        self.goodsDesc.innerText = self.message.goods_desc;
        self.goodsPrice.innerText = '￥' + self.message.price;
    })
    // this.goods_name = this.arr.goods_name;
}
