function init() {
    changeName("Alexander Bazo");
    removeClass();
    initClickEvents();
    addBox();
}


function changeName(name) {
    var el = document.querySelector(".name");
    el.innerHTML = name;
}

function removeClass() {
    var el = document.querySelector(".name");
    el.classList.remove("placeholder");
}

function initClickEvents() {
    var boxes = document.querySelectorAll(".boxes");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", onBoxClicked);
    }
}

function onBoxClicked(event) {
    var el = event.target;
    el.classList.toggle("black");
    el.classList.toggle("white");
}

function addBox() {
	var parentEl = document.querySelector(".boxes");
	var el = document.createElement("span");
	el.classList.add("box", "red");
	parentEl.append(el);
}

init();

