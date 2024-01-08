let player = [2, 3]
let bullet = null
input.onButtonPressed(Button.A, function move_left() {
    led.unplot(player[0], player[1])
    player[0] -= 1
    if (player[0] < 0) {
        player[0] = 0
    }
    
    led.plot(player[0], player[1])
})
input.onButtonPressed(Button.B, function move_right() {
    led.unplot(player[0], player[1])
    player[0] += 1
    if (player[0] > 4) {
        player[0] = 4
    }
    
    led.plot(player[0], player[1])
})
input.onButtonPressed(Button.AB, function shoot() {
    
    if (bullet == null) {
        bullet = [player[0], player[1] - 1]
        led.plot(bullet[0], bullet[1])
    }
    
})
//  Plot initial player position
led.plot(player[0], player[1])
loops.everyInterval(500, function on_forever() {
    
    if (bullet == null) {
        return
    }
    
    led.unplot(bullet[0], bullet[1])
    bullet[1] -= 1
    if (bullet[1] < 0) {
        bullet = null
        return
    }
    
    led.plot(bullet[0], bullet[1])
})
