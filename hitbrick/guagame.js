var GuaGame = function(fps) {
    var g ={
        actions: {},
        keydowns: {},
        paused: false,
    }
    var canvas = document.querySelector("#id-canvas")
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context
    window.addEventListener("keydown", function(event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener("keyup", function(event) {
        g.keydowns[event.key] = false
    })

    window.addEventListener("keydown", function(event) {
        if(event.key === "p") {
            g.pauseGame()
        }
    })

    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }

    g.drawImage = function(guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }

    g.pauseGame = function() {
        g.paused = !g.paused
    }

    setInterval(function() {
        //events
        var actions = Object.keys(g.actions)
        for(var i = 0; i < actions.length; i++) {
            var key = actions[i]
            //如果某个按键被按下，则执行对应的action
            if(g.keydowns[key]) {
                g.actions[key]()
            }
        }
        g.update()
        //clear
        g.context.clearRect(0, 0, canvas.width, canvas.height)
        g.draw()

    }, 1000/fps)

    return g
}