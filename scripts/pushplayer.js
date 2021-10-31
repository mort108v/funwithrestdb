"use strict"

// import {listenForPlayerInput} from './main.js'

import * as main from '../scripts/main.js'
// import * as getplayers from '../scripts/getplayers.js'

const testPlayer = {
    name: "gggg head",
    age: 128,
    email: "ggggg@jurgen.dk",
    image: []
}

const postPlayer = JSON.stringify(testPlayer)

export async function pushPlayer() {
    console.log("Pushing a player to db")
    console.log(postPlayer)

    await fetch("https://pokerplayers-806c.restdb.io/rest/players", {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": "617812ed8597142da1745ad1",
                "cache-control": "no-cache"
            },
            body: postPlayer,
        })
        .then(response => response.json())
        .then(main.displayListFromGet())

}