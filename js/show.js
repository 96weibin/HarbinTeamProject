function Show(){
    this.createShowElement();
}
Show.prototype.createShowElement = function(){

    this.content = document.createElement('div');
    this.content.className = 'content';
    document.body.appendChild(this.content);

    this.goods = document.createElement('div');
    this.goods.className = 'goods';
    this.content.appendChild(this.goods);

    this.oBox = document.createElement('div');
    this.oBox.className = 'box';
    this.goods.appendChild(this.oBox);

    this.oShow = document.createElement('div');
    this.oShow.className = 'show';


    this.content.appendChild(this.oShow);

    new Magnifier(this.goods,this.oBox,this.oShow);
    
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
        myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token=' + localStorage.token,{'goods_id':getQueryString('goods_id'), 'number':1},function(error, respond){
            var json = JSON.parse(respond);
            console.log(json);
            if(json.code === 0) {
                alert('添加成功');
            }else if(json.code === 1002){
                alert('请你先登录');
            }
        })
    })
    this.content.appendChild(this.join);

    
    var self = this;
    myajax.get('http://h6.duchengjiu.top/shop/api_goods.php',{'goods_id':getQueryString('goods_id')},function(error, respond){
        self.message = JSON.parse(respond).data[0];
        console.log(self.message);
        self.goods.style.background = 'url(' + self.message.goods_thumb +')';
        self.oShow.style.background = 'url(' + self.message.goods_thumb +')';


        self.oShow.style.backgroundSize = '860px 860px';        
        self.oShow.style.backgroundRepeat = 'no-repeat';
        
        self.goods.style.backgroundRepeat = 'no-repeat';
        self.goodsName.innerText = self.message.goods_name;
        self.goodsDesc.innerText = self.message.goods_desc;
        self.goodsPrice.innerText = '￥' + self.message.price;
    })
    // this.goods_name = this.arr.goods_name;
}
