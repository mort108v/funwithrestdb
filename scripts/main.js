"use strict"
import * as pushScript from '../scripts/pushplayer.js'
import * as getScript from '../scripts/getplayers.js'
import * as deleteScript from '../scripts/deleteplayer.js'

const submitData = document.querySelector(".inputdata")


addEventListener('DOMContentLoaded', () => {

    listenForPlayerInput()
    displayListFromGet()
        // listenForPlayerDelete()
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

// function listenForPlayerDelete() {

//     const deleteData = document.querySelector("template#playerTemplate.subtract")

//     deleteData.addEventListener("click", () => {
//         deleteScript.deletePlayer(player._id)
//     })
// }