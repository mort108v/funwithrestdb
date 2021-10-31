"use strict"



addEventListener('DOMContentLoaded', () => {

    listenForPlayerInput()

})

function listenForPlayerInput() {
    console.log("player input")

    pushScript.pushPlayer()
}

import * as pushScript './pushplayer.js'