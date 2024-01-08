let player = 2
let player_y = 4
let bullet = [2, 3]
// ## Moving the bullet
loops.everyInterval(500, function game_update() {
    
    if (bullet != null) {
        led.unplot(bullet[0], bullet[1])
        bullet[1] -= 1
        if (bullet[1] < 0) {
            bullet = null
        } else {
            led.plot(bullet[0], bullet[1])
        }
        
    }
    
})
// ## Shooting
function shoot_bullet() {
    
    bullet = [2, 3]
}

input.onLogoEvent(TouchButtonEvent.Pressed, shoot_bullet)
input.onButtonPressed(Button.AB, shoot_bullet)
