function Search(url) {
    this.creatDom(url);
}
Search.prototype.creatDom = function(rul) {
    console.log(url);
    myajax.get(url,{},function(error, responed) {
        var json = JSON.parse(responed);
        console.log(json)
    })
}