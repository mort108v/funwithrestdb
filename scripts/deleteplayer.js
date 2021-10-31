"use strict"

import * as main from '../scripts/main.js'

const API_KEY = "617812ed8597142da1745ad1"
const BASE_URL = "https://pokerplayers-806c.restdb.io"
const REST_URL = "/rest/players"
const MEDIA_URL = "/media/"

export function deletePlayer(id) {

    document.querySelector(`tr[data-id="${id}"]`).remove()

    fetch(`${BASE_URL}${REST_URL}/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": API_KEY,
                "cache-control": "no-cache"
            }
        })
        .then(response => response.json())
        .then(main.displayListFromGet())
}