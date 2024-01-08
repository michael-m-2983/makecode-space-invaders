player = (2, 3)
bullet = None

def move_left():
    led.unplot(player[0], player[1])
    player[0] -= 1
    if player[0] < 0:
        player[0] = 0
    led.plot(player[0], player[1])


def shoot():
    global bullet
    if bullet == None:
        bullet = [player[0], player[1] - 1]
        led.plot(bullet[0], bullet[1])

def move_right():
    led.unplot(player[0], player[1])
    player[0] += 1
    if player[0] > 4:
        player[0] = 4
    led.plot(player[0], player[1])

input.on_button_pressed(Button.A, move_left)
input.on_button_pressed(Button.B, move_right)
input.on_button_pressed(Button.AB, shoot)


# Plot initial player position
led.plot(player[0], player[1])

def on_forever():
    global bullet
    if bullet == None:
        return
    led.unplot(bullet[0], bullet[1])
    bullet[1] -= 1
    if bullet[1] < 0:
        bullet = None
        return
    led.plot(bullet[0], bullet[1])

loops.every_interval(500, on_forever)