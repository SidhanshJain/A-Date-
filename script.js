const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
    // Calculate the random number between min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;
    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
        newTop = getRandomNumber(0, containerHeight - btnHeight);
    }

    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
        newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");



    const bodyEl = document.querySelector("body");

    bodyEl.addEventListener("mousemove", (event) => {
        const xPos = event.offsetX;
        const yPos = event.offsetY;

        const spanEl = document.createElement("span");

        spanEl.style.left = xPos + "px";
        spanEl.style.top = yPos + "px";

        const size = Math.random() * 10;
        spanEl.style.width = size + "px";
        spanEl.style.height = size + "px";

        bodyEl.appendChild(spanEl);

        setTimeout(() => {
            spanEl.remove();
        }, 500);
    });
});









const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        // emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        confettiNumber: 300,
        confettiRadius: 6,
        confettiTime: 5
    })
    .then(() => jsConfetti.addConfetti())
});