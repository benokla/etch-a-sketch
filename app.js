const container = document.querySelector(".container");

const newGridNumberInput = document.querySelector("#newGridNumberInput");
const setNewGridNumberBtn = document.querySelector("#setNewGridNumberBtn");

const clearBtn = document.querySelector("#clearBtn");
const blueBtn = document.querySelector("#blueBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const darkenBtn = document.querySelector("#darkenBtn");

// init
createGrid(4);


clearBtn.addEventListener("click", clearGrid);
blueBtn.addEventListener("click", () => {
    color("blue")
})
rainbowBtn.addEventListener("click", () => {
    const eachBox = document.querySelectorAll(".eachBox");
    eachBox.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
            console.log(e.target.style.backgroundColor)
        })
    })
})
darkenBtn.addEventListener("click", () => {
    let random = getRandomInt(359)
    const eachBox = document.querySelectorAll(".eachBox");
    eachBox.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `hsl(${random},${getRandomInt(255)},${getRandomInt(255)})`;
        })
    })
})

function clearGrid() {
    const eachBox = document.querySelectorAll(".eachBox");
    eachBox.forEach((box) => {
        box.style.backgroundColor = "white";
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

setNewGridNumberBtn.addEventListener("click", () => {
    removeGrid()
    createGrid(newGridNumberInput.value)
})

function createGrid(num) {
    if(num > 50) {
        alert("Number must be below 50")
        createGrid(16);
        return
    }
    for (let i = 0; i < num*num; i++) {
        const box = document.createElement("div");
        box.classList.add("eachBox");
        box.style.height = `${400/num}px`
        box.style.width = `${400/num}px`
        container.appendChild(box)
    }
    color("red");
}

function removeGrid() {
    const eachBox = document.querySelectorAll(".eachBox");
    eachBox.forEach((box) => {
        container.removeChild(box)
    })
}

function color(color) {
    const eachBox = document.querySelectorAll(".eachBox");
    eachBox.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `${color}`;
        })
    })
}