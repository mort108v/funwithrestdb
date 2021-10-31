"use strict"

import * as pushScript './pushplayer.js'

addEventListener('DOMContentLoaded', () => {

    listenForPlayerInput()

})

function listenForPlayerInput() {
    console.log("player input")

    pushScript.pushPlayer()
}