var Ball = function() {
    var image = imgFromPath("ball.png")
    var o = {
        image: image,
        x: 50,
        y: 50,
        speedX: 10,
        speedY: 10,
        fired: false,
    }
    o.fire = function() {
        o.fired = true
    }

    o.bounce = function() {
        o.speedY *= -1
    }

    o.move = function() {
        if(o.fired) {
            if(o.x > 400 || o.x < 0) {
                o.speedX = -o.speedX
            }
            if(o.y > 300 || o.y < 0) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    
    return o
}