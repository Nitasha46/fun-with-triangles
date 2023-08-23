const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputContainer = document.querySelector("#output-container");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);

    for (let value of formResults.values()) {
        if(value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputContainer.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calculateScore);