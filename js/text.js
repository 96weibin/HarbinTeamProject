Init_head.prototype.crearHeadDom = function(){
    this.oHead_nav = document.createElement('div');
    this.oHead_nav.className = 'head_nav'
    document.body.appendChild(this.oHead_nav);
    this.oSpace = document.createElement('div');
    this.oSpace.className = 'space';
    document.body.appendChild(this.oSpace);

    this.oLogo = document.createElement('div');
    this.oLogo.className = 'logo';
    this.oHead_nav.appendChild(this.oLogo);
    this.oTittle = document.createElement('div');
    this.oTittle.className = 'title';
    this.oTittle.innerText = '聚焦与众不同的日常设计'
    this.oHead_nav.appendChild(this.oTittle);

    this.oHead = document.createElement('div')
    this.oHead.className = 'head';
    this.oHead_nav.appendChild(this.oHead);

    this. oLeft = document.createElement('div');
    this.oLeft.className = 'left';
    this.oHead.appendChild(this.oLeft);
    this.oList = document.createElement('div');
    this.oList.className = 'list';
    this.oList.innerText = '商品分类';
    this.oLeft.appendChild(this.oList);

    //添加selecter里的内容
    var self = this;
    myajax.get('http://h6.duchengjiu.top/shop/api_cat.php',{},function(error, respond){
        var json = JSON.parse(respond);
        var arr = json.data;
        var cat_ids = [];        
        for(var i = 0 ; i < arr.length; i++) {
            self.oType = document.createElement('div');
            self.oType.innerText = arr[i].cat_name;
            self.oSelect.appendChild(self.oType);
            // console.log(arr[i].cat_id);
            cat_ids.push(arr[i].cat_id);
            console.log(cat_ids);
        }
        //怎么绑定事件啊
        // (function(){
        //     for(var i = 0; i < cat_ids.length; i++) {
        //         // console.log(self.oSelect.children[i]);
        //         (function(){
                    
        //         }())
        //         var k = cat_ids[i]
        //         self.oSelect.children[i].addEventListener('click',function(e) {
        //             console.log(k)

        //             // myajax.get('http://h6.duchengjiu.top/shop/api_goods.php',{'cat_id':k},function(error, respond){
        //             //     var json = JSON.s(respond);
        //             //     var arr = json.data;
        //             //     (function(){
        //             //         for(var j = 0; j < arr.length; j++) {
        //             //             arr[j].
        //             //         }
        //             //     }())
        //             //     // console.log();
        //             //     // arr[i].addEventListener()
        //             //     // console.log(arr);
        //             //     // console.log(self.oSearch.children[i].innerText);
        //             // });
        //         });
        //     }
        // }())
    });
    this.oDropdown = document.createElement('div');
    this.oDropdown.classList = 'dropdown';
    this.oLeft.appendChild(this.oDropdown);

    this.oRight = document.createElement('div');
    this.oRight.className = 'right';
    this.oHead.appendChild(this.oRight);

    this.oShopingCart = document.createElement('div');
    this.oShopingCart.className = 'shopping-cart';
    this.oRight.appendChild(this.oShopingCart);

    this.oUse = document.createElement('div');
    this.oUse.className = 'use';
    this.oRight.appendChild(this.oUse);

    this.oSearch = document.createElement('div');
    this.oSearch.className = 'search';
    this.oRight.appendChild(this.oSearch);

    this.oInput = document.createElement('div');
    this.oInput.className = 'input';
    this.oRight.appendChild(this.oInput);

    this.oSelect = document.createElement('div');
    this.oSelect.className = 'select';
    this.oHead_nav.appendChild(this.oSelect);


    // var oGoodsList = GoodsList();
    // oSelect.appendChild(GoodsList);//在GoodList函数返回DOM结构
    



    // var oContent = document.createElement('div');
    // oContent.className = 'content';
    // document.body.appendChild(oContent);



    
}