function ScoreUpdate () {
    OLED.clear()
    OLED.writeStringNewLine("Player A" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + Rounds)
    OLED.newLine()
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
OLED.writeStringNewLine("Welcome to Rock Paper Scissors. YOU DON'T HAVE AN OPTION TO NOT PLAY. PLAY OR ELSE(Made by Ethan Gandham)")
basic.pause(2000)
