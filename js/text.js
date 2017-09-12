var oLogo = document.querySelector('.logo');
oLogo.onclick = function() {    //点击logo 页面重载
    location.reload();
}

var oUse = document.querySelector('.use');//点击use图片跳转到登录页面
oUse.onclick = function() {
    location.href = 'html/login.html';
}
var oInput = document.querySelector('.head-nav .input');
var oSearch = document.querySelector('.search');
var flag = null;
oSearch.onclick = function() {
    oInput.style.display = 'block';
}
oInput.addEventListener('keydown',function(e) {
    if(e.keyCode == 13){
        console.log('get请求搜索商品')
        //
    }
})
var oLeft = document.querySelector('.left');
var oSelect = document.querySelector('.select');
oLeft.onmouseover = function() {
    oSelect.style.display = 'block'
}
oSelect.addEventListener('mouseleave', function() {
    oSelect.style.display = 'none';
},false);