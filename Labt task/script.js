const studentName = document.getElementById("studentName");
const eventBox = document.getElementById("event");
const addBtn = document.getElementById("addBtn");
const confirmBtn = document.getElementById("confirmBtn");

const events = [];

function addEvent() {

    if (eventBox.value.trim() === "") {
        alert("Please enter an event name.");
        return;
    }

    if (events.length >= 3) {
        alert("You can join a maximum of 3 events.");
        return;
    }

    events.push(eventBox.value.trim());
    eventBox.value = "";
    alert("Event Added");

}

function confirmRegistration() {

    if (studentName.value.trim() === "" || events.length === 0) {
        alert("Please enter your name and add at least one event.");
        return;
    }

    localStorage.setItem("studentName", studentName.value.trim());
    localStorage.setItem("events", JSON.stringify(events));
    window.location.href = "confirm.html";

}

addBtn.addEventListener("click", addEvent);
confirmBtn.addEventListener("click", confirmRegistration);