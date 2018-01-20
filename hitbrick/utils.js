var log = console.log

var imgFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function(a, b){
    if(b.x > a.x && b.x < a.x + a.image.width) {
        if(b.y > a.y && b.y < a.y + a.image.height) {
            return true
        }
    }
    return false
}