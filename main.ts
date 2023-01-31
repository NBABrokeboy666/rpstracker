input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    PB += 1
    Rounds += 1
    OLED.clear()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    Ties += 1
    Rounds += 1
    OLED.clear()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    PB += 1
    Rounds += 1
    OLED.clear()
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("YOU DON'T HAVE AN OPTION TO NOT PLAY. PLAY OR ELSE(Made by Ethan Gandham)")
    basic.pause(2000)
    ScoreUpdate()
}
function ScoreUpdate () {
    OLED.clear()
    OLED.writeStringNewLine("Player A" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + Rounds)
}
let Rounds = 0
let Ties = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
PA = 0
PB = 0
Ties = 0
Rounds = 0
OLED.writeStringNewLine("YOU DON'T HAVE AN OPTION TO NOT PLAY. PLAY OR ELSE(Made by Ethan Gandham)")
basic.pause(2000)
ScoreUpdate()
