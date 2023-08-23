const base = document.querySelector("#base");
const height = document.querySelector("#height");
const areaBtn = document.querySelector("#area-btn");
const outputContainer = document.querySelector("#output-container");

function calculateProduct(b, h) {
    const product = b * h;
    return product;
}

function calculateArea() {
    const product = calculateProduct(Number(base.value), Number(height.value));
    const areaOfTriangle = product* 0.5;
    outputContainer.innerText= "The area of triangle is " + areaOfTriangle;
}

areaBtn.addEventListener("click", calculateArea);