const summary = document.getElementById("summary");
const backBtn = document.getElementById("backBtn");

const studentName = localStorage.getItem("studentName");
const events = JSON.parse(localStorage.getItem("events")) || [];

let result = "Name: " + studentName + "<br>Events:<br>";

for (let i = 0; i < events.length; i++) {
    result += events[i] + "<br>";
}

result += "Total Fee: " + (events.length * 150) + " Taka";
summary.innerHTML = result;

function goBack() {
    window.location.href = "index.html";
}

backBtn.addEventListener("click", goBack);