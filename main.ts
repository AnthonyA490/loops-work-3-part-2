input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . .
            # # # . #
            # # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . # .
            # # # . .
            # # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # . # . .
            # # . . .
            # # # . .
            # # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # . . .
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # . . .
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # . # . .
            # # . . .
            # # # . .
            # # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . # .
            # # # . .
            # # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . .
            # # # . #
            # # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(500)
    }
})
