function init (){
    this.crearDom();
    this.addListener()
}
init.prototype.crearDom = function(){
    var oHead_nav = document.createElement('div');
    oHead_nav.className = 'head_nav'
    document.body.appendChild(oHead_nav);

    var oLogo = document.createElement('div');
    oLogo.className = 'logo';
    oHead_nav.appendChild(oLogo);

    var oTittle = document.createElement('div');
    oTittle.className = 'title';
    oTittle.innerText = '聚焦与众不同的日常设计'
    oHead_nav.appendChild(oTittle);

    var oHead = document.createElement('div')
    oHead.className = 'head';
    oHead_nav.appendChild(oHead);

    var oLeft = document.createElement('div');
    oLeft.className = 'left';
    oHead.appendChild(oLeft);

    var oList = document.createElement('div');
    oList.className = 'list';
    oList.innerText = '商品分类';
    oLeft.appendChild(oList);

    var oDropdown = document.createElement('div');
    oDropdown.classList = 'dropdown';
    oLeft.appendChild(oDropdown);

    var oRight = document.createElement('div');
    oRight.className = 'right';
    oHead.appendChild(oRight);

    var oShopingCart = document.createElement('div');
    oShopingCart.className = 'shopping-cart';
    oRight.appendChild(oShopingCart);

    var oUse = document.createElement('div');
    oUse.className = 'use';
    oRight.appendChild(oUse);

    var oSearch = document.createElement('div');
    oSearch.className = 'search';
    oRight.appendChild(oSearch);

    var oInput = document.createElement('div');
    oInput.className = 'input';
    oRight.appendChild(oInput);

    var oSelect = document.createElement('div');
    oSelect.className = 'select';
    oHead_nav.appendChild(oSelect);


    // var oGoodsList = GoodsList();
    // oSelect.appendChild(GoodsList);//在GoodList函数返回DOM结构
    



    // var oContent = document.createElement('div');
    // oContent.className = 'content';
    // document.body.appendChild(oContent);



    var oFooter = document.createElement('div');
    oFooter.className = 'footer';
    document.body.appendChild(oFooter);
    var oWeixin = document.createElement('div');
    oWeixin.className = 'weixin';
    oFooter.appendChild(oWeixin);

    var oBox = document.createElement('div');
    oBox.className = 'box';
    oFooter.appendChild(oBox);
    var oJoin = document.createElement('a');
    oJoin.href = '#';
    oJoin.innerText = '加入我们';
    var oSplit = document.createElement('span');
    oSplit.className = 'split';
    oBox.appendChild(oSplit);
    var oAbout = document.createElement('a');
    oAbout.href = '#';
    oAbout.innerText = '关于我们';
    oBox.appendChild(oSplit);
    var oCopyRight = document.createElement('a');
    oCopyRight.innerText = '版权声明';
    oCopyRight.href = '#';
    oBox.appendChild(oCopyRight);
    var oP = document.createElement('p');
    oP.innerText='Copyright © 上海尖叫互动文化传媒有限公司 2015-2017 沪ICP备14045374号';
    oBox.appendChild(oP);
}
init.prototype.addListener = function(){

}
new init();