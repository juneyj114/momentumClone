const body = document.querySelector("body");

const IMAGE_NUM = 3;

const imgNumber = genRandom();

function genRandom() {
    const number = Math.floor(Math.random() * IMAGE_NUM);
    return number;
}

function paintImage() {
    // const image = new Image();
    // image.src = `images/pic${imgNumber + 1}.jpg`
    // image.classList.add("bgImg");
    // body.appendChild(image)

    const image = document.createElement("img");
    image.src = `images/pic${imgNumber + 1}.jpg`;
    image.classList.add("bgImg");
    body.appendChild(image);
    
}

function init() {
    paintImage();
}

init();