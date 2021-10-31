"use strict"

// import {listenForPlayerInput} from './main.js'

import * as main from '../scripts/main.js'

const testPlayer = {
    name: "Dennis ",
    age: 18,
    email: "jurgen@jurgen.dk",
    image: "dont know this"
}

const postPlayer = JSON.stringify(testPlayer)
    // addEventListener("DOMContentLoaded", pushPlayer)

export function pushPlayer() {
    console.log("Pushing a player to db")


    fetch("https://pokerplayers-806c.restdb.io/rest/players", {
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