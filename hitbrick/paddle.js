var Paddle = function() {
    var image = imgFromPath("paddle.png")
    var o = {
        image: image,
        x: 100,
        y: 260,
        speed: 5,
    }

    o.collide = function(guaImage) {
        if (guaImage.x > o.x && guaImage.x < o.x + o.image.width) {
            if (guaImage.y + guaImage.image.height > o.y) {
                return true
            }
        }
        return false
    }

    o.move = function(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.image.width) {
            x = 400 - o.image.width
        }
        o.x = x
    }

    o.moveLeft = function() {
        o.move(o.x - o.speed)
    }
    o.moveRight = function() {
        o.move(o.x + o.speed)
    }
    return o
}