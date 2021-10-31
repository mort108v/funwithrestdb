"use strict"
import * as pushScript from '../scripts/pushplayer.js'
import * as getScript from '../scripts/getplayers.js'



addEventListener('DOMContentLoaded', () => {

    // listenForPlayerInput()
    displayListFromGet()
})

export function listenForPlayerInput() {
    console.log("player input")

    pushScript.pushPlayer()
}

export function displayListFromGet() {
    getScript.init()
}