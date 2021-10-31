"use strict"
import * as pushScript from '../scripts/pushplayer.js'
import * as getScript from '../scripts/getplayers.js'

const submitData = document.querySelector(".inputdata")

addEventListener('DOMContentLoaded', () => {

    listenForPlayerInput()
    displayListFromGet()
})

export function listenForPlayerInput() {
    console.log("player input")

    submitData.addEventListener("click", () => {
        pushScript.pushPlayer()
    })

}

export function displayListFromGet() {
    getScript.init()
}