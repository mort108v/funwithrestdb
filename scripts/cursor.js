const cursor = document.getElementsByClassName("myCursor")

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`)
})