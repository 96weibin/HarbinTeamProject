function getQueryString(name) {
    var search = location.search.substr(1);
    var reg = new RegExp('(^|$)' + name + '=([^&]*)(&|$)');
    var result = search.match(reg);
    if(result === null) return null;
    return decodeURIComponent(result[2]);
}