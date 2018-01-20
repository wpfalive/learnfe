var GuaGame = function() {
    var g = {
        actions: {},
        keydowns: {},
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

    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }

    g.drawImage = function(guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }

    window.fps = 30
    var runloop = function() {
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
        setTimeout(function() {
            runloop()
        }, 1000/window.fps)
    }
    //这里用setTimeout的原因是，如果用setInterval，那么fps无法动态被改变
    
    setTimeout(runloop, 1000/window.fps)

    return g
}