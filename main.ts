input.onGesture(Gesture.LogoUp, function () {
    פקמן.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.A, function () {
    פקמן.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    פקמן.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    פקמן.change(LedSpriteProperty.Y, -1)
})
let פקמן: game.LedSprite = null
let גלידה = game.createSprite(randint(0, 4), randint(0, 4))
פקמן = game.createSprite(2, 2)
basic.forever(function () {
    if (פקמן.isTouching(גלידה)) {
        גלידה.delete()
        גלידה = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
