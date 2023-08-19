const angleInput = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputContainer = document.querySelector("#output-container");

function hideMessage() {
    outputContainer.style.display = "none";
}

function showMessage(message) {
    outputContainer.style.display = "block";
    outputContainer.innerText = message;
}

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    hideMessage();

    const sumOfAngles = calculateSumOfAngles(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));
    
    if (sumOfAngles === 180) {
        showMessage("Yay, The angles form a triangle");
    } else {
        showMessage("Oh Oh! The angles don't form a triangle");
    }
}

isTriangleBtn.addEventListener("click", isTriangle);