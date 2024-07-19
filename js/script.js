const $ = document

let inputElem = $.getElementById("input")

let counterElem = $.querySelector(".counter")

let inputElemAttr = inputElem.getAttribute("maxlength")

inputElem.addEventListener("keyup" , function () {
    counterElem.innerHTML = inputElemAttr - (inputElem.value.length)
})