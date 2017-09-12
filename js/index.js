function init_head () {
    this.crearHeadDom();
    this.addHeadListener();
}
function init_footer() {
    this.crearFooterDom();
    this.addFooterListener();
}
init_head.prototype.crearHeadDom = function(){
    this.oHead_nav = document.createElement('div');
    this.oHead_nav.className = 'head_nav'
    document.body.appendChild(this.oHead_nav);

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
init_footer.prototype.crearFooterDom = function() {
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
    this.oSplit = document.createElement('span');
    this.oSplit.className = 'split';
    this.oBox.appendChild(this.oSplit);
    this.oAbout = document.createElement('a');
    this.oAbout.href = '#';
    this.oAbout.innerText = '关于我们';
    this.oBox.appendChild(this.oSplit);
    this.oCopyRight = document.createElement('a');
    this.oCopyRight.innerText = '版权声明';
    this.oCopyRight.href = '#';
    this.oBox.appendChild(this.oCopyRight);
    this.oP = document.createElement('p');
    this.oP.innerText='Copyright © 上海尖叫互动文化传媒有限公司 2015-2017 沪ICP备14045374号';
    this.oBox.appendChild(this.oP);
}
init_head.prototype.addHeadListener = function(){
    this.oLogo.addEventListener('click',function(){
        location.reload();
    })
    this.oLeft.addEventListener('mouseover', () => {
        this.oSelect.style.display='block';
        this.oDropdown.style.background='url(img/up.png)';
    })
    this.oSelect.addEventListener('mouseleave',() => {
        this.oSelect.style.display = 'none';
        this.oDropdown.style.background='url(img/icon_dropdown.png)';
        
    })
    this.oShopingCart.addEventListener('click',() => {
        location.href = 'html/shopingCart.html';
    })
    this.oSearch.addEventListener('click', () => {
        location.href = 'html/seach.html'
    })
    this.oUse.addEventListener('click',function() {
        location.href = 'html/login.html';
    })
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
    this.oUse.addEventListener('mouseover',function() {
        // this.className='icon_hover';
        this.style.width = '42px';
        this.style.height = '42px';
        this.style.border = 'none';
    })
    this.oUse.addEventListener('mouseleave',function() {
        this.style.width = '38px';
        this.style.height = '38px';
        this.style.borderWidth = '2px';
        this.style.borderStyle = 'solid';
        this.style.borderColor = '#eee';
    })
    this.oSearch.addEventListener('mouseover',function() {
        // this.className='icon_hover';
        this.style.width = '42px';
        this.style.height = '42px';
        this.style.border = 'none';
    })
    this.oSearch.addEventListener('mouseleave',function() {
        this.style.width = '38px';
        this.style.height = '38px';
        this.style.borderWidth = '2px';
        this.style.borderStyle = 'solid';
        this.style.borderColor = '#eee';
    })
    
}
init_footer.prototype.addFooterListener = function() {}