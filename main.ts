let player = 2
let player_y = 4
let bullet = [2, 3]
// ## Moving the bullet
loops.everyInterval(500, function game_update() {
    
    if (bullet != null) {
        if (player_y != bullet[1]) {
            led.unplot(bullet[0], bullet[1])
        }
        
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
    
    bullet = [player, player_y]
}

input.onLogoEvent(TouchButtonEvent.Pressed, shoot_bullet)
input.onButtonPressed(Button.AB, shoot_bullet)
// ## Player movement
function move_player_direction(direction: number) {
    
    led.unplot(player, player_y)
    player += direction
    led.plot(player, player_y)
}

input.onButtonPressed(Button.A, function move_player_left() {
    move_player_direction(-1)
})
input.onButtonPressed(Button.B, function move_player_right() {
    move_player_direction(1)
})
//  Plot initial player position
led.plot(player, player_y)
