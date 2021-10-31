"use strict"

import * as main from '../scripts/main.js'
// import * as getplayers from '../scripts/getplayers.js'



const testData = {
    name: "New name head",
    age: "128",
    email: "newmail@mail.mail",
    pic: []
}

const putPlayerData = JSON.stringify(testData)
const ENDPOINT_URL = "https://pokerplayers-806c.restdb.io/rest/players"

export function putData(id) {
    console.log("Putting some data")
    console.log(id)

    fetch(`${ENDPOINT_URL}/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": "617812ed8597142da1745ad1",
                "cache-control": "no-cache"
            },
            body: putPlayerData,
        })
        .then(response => response.json())
        .then(main.displayListFromGet())

}