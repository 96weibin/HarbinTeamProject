function Init_head () {
    this.crearHeadDom();
    this.addHeadListener();
}
function Init_footer() {
    this.crearFooterDom();
    this.addFooterListener();
}
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
            self.oType.setAttribute('data-cat_id', arr[i].cat_id);
            self.oType.innerText = arr[i].cat_name;
            self.oType.addEventListener('click', function() {
                var oCatId = this.dataset['cat_id'];
                location.href = 'goodslist.html?' + 'cat_id='+ oCatId;
                // localStorage.oCatId = oCatId;
                // myajax.get('http://h6.duchengjiu.top/shop/api_goods.php',{'cat_id':oCatId},function(error, respond) {
                //     var json = JSON.parse(respond);
                //     console.log(json);
                // });
                             
            })
            self.oSelect.appendChild(self.oType);
        }
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

    this.oInput = document.createElement('input');
    this.oInput.className = 'input';
    this.oInput.setAttribute('placeholder','请输入您要搜索的内容Enter')
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
Init_footer.prototype.crearFooterDom = function() {
    this.oFooter = document.createElement('div');
    this.oFooter.className = 'footer';
    document.body.appendChild(this.oFooter);
    this.oWeixin = document.createElement('div');
    this.oWeixin.className = 'weixin';
    this.oFooter.appendChild(this.oWeixin);

    this.oBox = document.createElement('div');
    this.oBox.className = 'box';
    this.oFooter.appendChild(this.oBox);
    this.oJoin = document.createElement('a');
    this.oJoin.href = '#';
    this.oJoin.innerText = '加入我们';
    this.oBox.appendChild(this.oJoin);    


    this.oSplit1 = document.createElement('span');
    this.oSplit1.className = 'split';
    this.oBox.appendChild(this.oSplit1);


    this.oAbout = document.createElement('a');
    this.oAbout.href = '#';
    this.oAbout.innerText = '关于我们';
    this.oBox.appendChild(this.oAbout);  
    
    this.oSplit2 = document.createElement('span');
    this.oSplit2.className = 'split';
    this.oBox.appendChild(this.oSplit2);


    this.oCopyRight = document.createElement('a');
    this.oCopyRight.innerText = '版权声明';
    this.oCopyRight.href = '#';
    this.oBox.appendChild(this.oCopyRight);
    this.oP = document.createElement('p');
    this.oP.innerText='Copyright © 上海尖叫互动文化传媒有限公司 2015-2017 沪ICP备14045374号';
    this.oBox.appendChild(this.oP);
}
Init_head.prototype.addHeadListener = function(){
    this.oLogo.addEventListener('click',function(){
        location.href ='index.html';
    })
    this.oLeft.addEventListener('mouseover', () => {
        this.oSelect.style.display='-webkit-flex';
        this.oDropdown.style.background='url(img/up.png)';
        
    })
    this.oSelect.addEventListener('mouseleave',() => {
        this.oSelect.style.display = 'none';
        this.oDropdown.style.background='url(img/icon_dropdown.png)';
    })
  
    this.oShopingCart.addEventListener('click',() => {
        location.href = 'shoppingCart.html';
    })
    this.oSearch.addEventListener('click', () => {
        // location.href = 'html/seach.html'
        self.oInput.style.display = 'block';        
    })
    this.oSearch.addEventListener('dblclick', () => {
         self.oInput.style.display = 'none';        
    })
    this.oBlock = document.createElement('div');
    this.oUse.appendChild(this.oBlock);
    this.oBlock.className = 'oBlock';
    
    this.oShopingCart.addEventListener('mouseover',function() {
        // this.className='icon_hover';
        this.style.width = '42px';
        this.style.height = '42px';
        this.style.border = 'none';
    })
    this.oShopingCart.addEventListener('mouseleave',function() {
        this.style.width = '38px';
        this.style.height = '38px';
        this.style.borderWidth = '2px';
        this.style.borderStyle = 'solid';
        this.style.borderColor = '#eee';
    })
    this.oUse.addEventListener('mouseenter',function() {
        // this.className='icon_hover';
        this.style.width = '42px';
        this.style.height = '42px';
        this.style.border = 'none';
        self.oBlock.style.display = 'block';
        // console.log(localStorage.token);
        if(localStorage.token){
            //显示username ,点击跳转到购物车
            self.oBlock.innerHTML = `<p>欢迎:${localStorage.username}</p><p class='logoff'>注销</p>`
        }else{
            self.oBlock.innerHTML = `<p>你还未登陆</p>
                                <a href='login.html'><p>去登陆</p></a>
                                `
        }

        self.oLogoff = document.querySelector('.logoff');
        if(self.oLogoff){
            self.oLogoff.addEventListener('click',function(){
                localStorage.clear();
                location.reload();
            })
        }
        
    })
    
    this.oBlock.addEventListener('mouseleave', function() {
        self.oBlock.style.display = 'none';
    })
    this.oUse.addEventListener('mouseleave',function() {
        this.style.width = '38px';
        this.style.height = '38px';
        this.style.borderWidth = '2px';
        this.style.borderStyle = 'solid';
        this.style.borderColor = '#eee';
        self.oBlock.style.display = 'none';
        
    })
    var self = this;
    // console.log(self);
    // console.log(self.oInput);
    this.oSearch.addEventListener('mouseover',function() {
        // this.className='icon_hover';
        this.style.width = '42px';
        this.style.height = '42px';
        this.style.border = 'none';
        // self.oInput.style.display = 'block';
    })
    this.oSearch.addEventListener('mouseleave',function() {
        this.style.width = '38px';
        this.style.height = '38px';
        this.style.borderWidth = '2px';
        this.style.borderStyle = 'solid';
        this.style.borderColor = '#eee';        
    })
    // document.addEventListener('click', function() {
    //     self.oInput.style.display = 'none';        
    // })
    this.oInput.addEventListener('keydown', function(e){
        if(e.keyCode == 13){
            location.href = 'search.html?search_text=' + self.oInput.value;
        }
    })
}
Init_footer.prototype.addFooterListener = function() {}