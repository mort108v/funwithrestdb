"use strict"
import * as pushScript from '../scripts/pushplayer.js'
import * as getScript from '../scripts/getplayers.js'
import * as putScript from '../scripts/putdata.js'

export const playerID = "6177d73a868101090008d079"

const submitData = document.querySelector(".inputdata")


addEventListener('DOMContentLoaded', () => {

    listenForPlayerInput()
    displayListFromGet()
    listenForPlayerChange()
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

function listenForPlayerChange() {

    const changeDataButton = document.querySelector(".putdata")

    changeDataButton.addEventListener("click", () => {
        putScript.putData(playerID)
    })
}