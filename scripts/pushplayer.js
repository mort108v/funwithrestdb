"use strict"

// import {listenForPlayerInput} from './main.js'

import * as main from '../scripts/main.js'

const testPlayer = {
    name: "Hans Face",
    age: 18,
    email: "hans@jurgen.dk",
    image: ""
}

const postPlayer = JSON.stringify(testPlayer)
    // addEventListener("DOMContentLoaded", pushPlayer)

export async function pushPlayer() {
    console.log("Pushing a player to db")
    console.log(postPlayer)


    await fetch("https://pokerplayers-806c.restdb.io/rest/players/", {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": "617812ed8597142da1745ad1",
                "cache-control": "no-cache"
            },
            body: postPlayer,
        })
        .then(response => response.json())
        .then(testPlayer => console.log(testPlayer))
    main.displayListFromGet()
}