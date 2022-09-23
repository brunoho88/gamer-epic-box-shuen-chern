let a = 0
let b = 0
let bleh = 0
let gamer = 0
input.onButtonPressed(Button.A, function () {
    a = randint(1, 3)
    if (a == 1) {
        basic.showIcon(IconNames.Square)
    } else if (a == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (a == 1 && b == 1) {
        basic.showString("draw")
    } else if (a == 2 && b == 2) {
        basic.showString("draw")
    } else if (a == 3 && b == 3) {
        basic.showString("draw")
    } else if (a == 1 && b == 3 || b == 3 && a == 1) {
        basic.showString("pa win")
    } else if (a == 3 && b == 2 || b == 2 && a == 3) {
        basic.showString("pa win")
    } else if (a == 2 && b == 1 || b == 1 && a == 2) {
        basic.showString("pa win")
    } else if (b == 1 && a == 3 || a == 3 && b == 1) {
        basic.showString("pb win")
    } else if (b == 3 && a == 2 || a == 2 && b == 3) {
        basic.showString("pb win")
    } else if (b == 2 && a == 1 || a == 1 && b == 2) {
        basic.showString("pb win")
    }
})
input.onButtonPressed(Button.B, function () {
    b = randint(1, 3)
    if (b == 1) {
        basic.showIcon(IconNames.Square)
    } else if (b == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onGesture(Gesture.Shake, function () {
    bleh = randint(1, 8)
    if (bleh == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (bleh == 2) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (bleh == 3) {
        basic.showArrow(ArrowNames.East)
    } else if (bleh == 4) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (bleh == 5) {
        basic.showArrow(ArrowNames.South)
    } else if (bleh == 6) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (bleh == 7) {
        basic.showArrow(ArrowNames.West)
    } else if (bleh == 8) {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    gamer = randint(1, 2)
    if (gamer == 1) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.SmallDiamond)
        }
        basic.showString("PA")
    } else {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.SmallDiamond)
        }
        basic.showString("PB")
    }
})
