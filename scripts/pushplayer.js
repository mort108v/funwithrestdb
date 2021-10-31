"use strict"

// import {listenForPlayerInput} from './main.js'

const testPlayer = {
    name: "Dennis Jürgensen",
    age: 108,
    email: "jurgen@jurgen.dk",
    image: "dont know how to do this"
}

addEventListener("DOMContentLoaded", pushPlayer)

function pushPlayer() {
    console.log("Pushing a player to db")

    const postPlayer = JSON.stringify(testPlayer)
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
}