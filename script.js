"use strict";

const handHours = document.querySelector("[data-hand-hours]")
const handMinutes = document.querySelector("[data-hand-minutes]")
const handSeconds = document.querySelector("[data-hand-seconds]")

function theClock() {
    const date = new Date();
    const [percHours, percMinutes, percSeconds] = [date.getHours() / 12, date.getMinutes() / 60, date.getSeconds() / 60]

    setHandPosition(handHours, percHours)
    setHandPosition(handMinutes, percMinutes)
    setHandPosition(handSeconds, percSeconds)
}

function setHandPosition(element, percentage) {
    element.style.setProperty("--rotation", percentage * 360)
}

setInterval(theClock, 1000)
theClock()
