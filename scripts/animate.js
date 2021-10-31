"use strict"

let topLinks = document.querySelectorAll(".toplink")

let aboutMe = document.getElementById('aboutMe')
let aboutMeIsHovered = document.querySelector('.hoverAboutMe')
let contact = document.getElementById('contact')
let contactIsHovered = document.querySelector('.hoverContact')
let myWork = document.getElementById('myWork')
let myWorkIsHovered = document.querySelector('.hoverMyWork')
let something = document.getElementById('something')
let linkBox = document.querySelector("linkbox")
let somethingIsHovered = document.querySelector('.hoverSomething')

let linkBoxes = document.querySelectorAll('linkBox')

let currentElement
let linkContent

addEventListener('DOMContentLoaded', () => {

    listenForMouseOverTopLinks()

})

function listenForMouseOverTopLinks() {

    linkBoxes.forEach(linkBox => {
        linkBox.addEventListener('mouseout', () => {
            linkBox.classList.add('hide')
        })
    })

    topLinks.forEach((topLink) => {
        topLink.addEventListener('mouseover', thisIsHovered)
        topLink.addEventListener('mouseout', thisIsCovered)
    })
}

function thisIsCovered() {
    console.log(this, " Iscovered")

    this.children[1].classList.add("hide")
}

function thisIsHovered() {
    console.log(this, " IsHovered")

    this.children[1].classList.remove("hide")
}

let typedText = document.querySelector(".animatedTitle")
const headerAnimation = document.querySelector(".headerText")

let typed

let nthletter = 0
let typingSpeed = 50

const siteAnimateTimeline = gsap.timeline({ defaults: { duration: 1 } })

siteAnimateTimeline

// .from('#header', { y: '-150%', ease: 'bounce' }, .5)

// Fade in header
    .from(headerAnimation, { opacity: 0, stagger: .5 })
    // Typewrite future text
    .from(writeTitle(), { opacity: 0, stagger: 1.5 }, 1)
    // Animate future text into LOGO - scale it down and place it
    .fromTo(headerAnimation, { x: '0', y: '0', ease: 'power2.in', scale: 1 }, { x: '-34.5vw', y: '-6.2vw', ease: 'power2.in', scale: .323 })
    //
    .fromTo('.animatedTitle', { opacity: 1, rotationX: '0', innerHTML: 0 }, { rotationX: '360', innerHTML: '6p4c design', flipHeaderText, opacity: 0.65 })
    // Unhide Links and animate in place
    .from('.links', { opacity: 0, stagger: 1 })


// .from('.main', { opacity: 0, stagger: .5 })
// .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
// .from('.left', { x: '-100%' }, '<.5')
// .to('.footer', { y: 0, ease: 'elastic' })
// .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })

// .fromTo('#aboutMe', { rotationX: '0', innerHTML: 0, x: 0, ease: 'linear', opacity: 0 }, { rotationX: '360', innerHTML: 'ABOUT ME', x: '90vw', ease: 'power2.in', opacity: 1, unHideLink })


//  .from(topLinks, { x: '-100vw', ease: 'power2.in', opacity: 0, stagger: 1.5, unHideLinks }, 1)
// Animate Links in place and change tekst
// .fromTo('#aboutMe', { rotationX: '0', innerHTML: 0 }, { rotationX: '360', innerHTML: 'ABOUT ME', giveLinksProperties })

// function runMain() {
//     import { loadMain, } from "./main"

// loadMain()
// }


function giveLinksProperties() {
    console.log("link properties")
}

function flipHeaderText() {
    console.log("flip me")

    typedText.classList.add('fill')
    headerAnimation.classList.add('newStroke')
}

function writeTitle() {
    // Fetch txt from HTML
    typed = typedText.innerHTML
        // Clear fetched text
    typedText.innerHTML = ""
        // Start Loop function
    typewriterLoop(typed)
}

function typewriterLoop() {

    if (nthletter < typed.length) {
        console.log("The length of string is = " + typed.length)
            // - Set textContent to substring of 0 to N
        typedText.textContent += typed.charAt(nthletter)
            // Imcrement N (++) 
        nthletter++
        // Wait before calling loop again
        setTimeout(typewriterLoop, typingSpeed)
    }
}