player = 2
player_y = 4
bullet = (2, 3)

### Moving the bullet
def game_update():
    global bullet

    if bullet != None:
        led.unplot(bullet[0], bullet[1])

        bullet[1] -= 1

        if bullet[1] < 0:
            bullet = None
        else:
            led.plot(bullet[0], bullet[1])

loops.every_interval(500, game_update)

### Shooting
def shoot_bullet():
    global bullet
    bullet = (2, 3)

input.on_logo_event(TouchButtonEvent.PRESSED, shoot_bullet)
input.on_button_pressed(Button.AB, shoot_bullet)