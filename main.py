player = 2
player_y = 4
bullet = (2, 3)

### Moving the bullet
def game_update():
    global bullet, player_y

    if bullet != None:
        if player_y != bullet[1]:
            led.unplot(bullet[0], bullet[1])

        bullet[1] -= 1

        if bullet[1] < 0:
            bullet = None
        else:
            led.plot(bullet[0], bullet[1])

loops.every_interval(500, game_update)

### Shooting
def shoot_bullet():
    global bullet, player, player_y
    bullet = (player, player_y)

input.on_logo_event(TouchButtonEvent.PRESSED, shoot_bullet)
input.on_button_pressed(Button.AB, shoot_bullet)

### Player movement

def move_player_direction(direction):
    global player, player_y
    led.unplot(player, player_y)

    player += direction

    led.plot(player, player_y)

def move_player_left():
    move_player_direction(-1)
    
def move_player_right():
    move_player_direction(1)

input.on_button_pressed(Button.A, move_player_left)
input.on_button_pressed(Button.B, move_player_right)

# Plot initial player position
led.plot(player, player_y)