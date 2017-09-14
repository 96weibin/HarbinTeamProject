function Search(url, data) {
    this.url = url;
    this.data = data;
    this.creatDom();
}
Search.prototype.creatDom = function() {
    // console.log(url);
    myajax.get(this.url, this.data,function(error, responed) {
        var json = JSON.parse(responed);
        console.log(json)
    })
}