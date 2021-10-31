"use strict"

addEventListener("DOMContentLoaded", init)

const Player = {
    name: "",
    age: "",
    email: "",
    pic: []
}

async function init() {

    await fetch("https://pokerplayers-806c.restdb.io/rest/players", {
            method: "get",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": "617812ed8597142da1745ad1",
                "cache-control": "no-cache"
            }
        })
        .then(response => response.json())
        .then(data => prepData(data))
}
let players

function prepData(data) {

    players = data.map(makePlayer)

    buildPlayerList()
}

function makePlayer(data) {

    // const imageMetaURL = fetch("https://pokerplayers-806c.restdb.io/media/" + data.image + "/meta/", {
    //     method: "get",
    //     headers: {
    //         "Content-Type": "application/json; charset=utf-8",
    //         "x-apikey": "617812ed8597142da1745ad1",
    //         "cache-control": "no-cache"
    //     }
    // })

    const player = Object.create(Player)

    player.name = data.name
    player.age = data.age
    player.email = data.email
    const mediaURL = "https://pokerplayers-806c.restdb.io/media/"
    player.pic = mediaURL + data.image
        // player.pic = imageMetaURL + imageMetaURL.fullname

    // https://pokerplayers-806c.restdb.io/media/6177d76f868101090008d094?key=53662004652756265702

    // const imageMetaURL = mediaURL + data.image + "/meta/"
    // player.pic = imageMetaURL["fullname"]
    // https://pokerplayers-806c.restdb.io/media/6177d76f868101090008d094
    // player.pic = imageURL + data.image
    // player.pic = data.origname + data.file

    console.log(player)
    return player

}

function buildPlayerList() {

    document.querySelector("#list tbody").innerHTML = ""
    players.forEach(displayPlayerList)
}

function displayPlayerList(player) {

    const playerClone = document.querySelector("template#playerTemplate").content.cloneNode(true)

    playerClone.querySelector("[data-field=name]").textContent = player.name
    playerClone.querySelector("[data-field=age]").textContent = player.age
    playerClone.querySelector("[data-field=email]").textContent = player.email
    playerClone.querySelector(".playerpic").src = player.pic

    document.querySelector("#list tbody").appendChild(playerClone)

}