let turn = "X";
let isGameOver = false;
let clickSound = new Audio("ting.mp3");
clickSound.volume = 0.2;
let boxes = document.getElementsByClassName("box");
let nav = document.querySelector(".nav-container");
let winImg = document.getElementsByClassName("win")[0];
let markboxes = document.getElementsByClassName("markbox");
let boardMsg = document.getElementsByClassName("board-msg")[0];

const showNavLinks = () => {
    nav.classList.toggle("nav-container-visible");   
}
const changeTurn = () => {
    if (turn === "X") {
        return "O";
    } else {
        return "X";
    }
};

const checkWin = () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(i => {
        if (
            markboxes[i[0]].innerText !== "" &&
            markboxes[i[0]].innerText === markboxes[i[1]].innerText &&
            markboxes[i[0]].innerText === markboxes[i[2]].innerText
        ) {
            document.querySelector(".board-msg").innerText = markboxes[i[0]].innerText + " has won";
            winImg.style.visibility = "visible";
            isGameOver = true;
        };
    });
};



Array.from(boxes).forEach(box => {
    let markbox = box.querySelector(".markbox");
    box.addEventListener("click", () => {
        if (markbox.innerText === "") {
            markbox.innerText = turn;
            clickSound.play();
            checkWin();
            turn = changeTurn();
            if(!isGameOver) {
                boardMsg.innerText = "Turn for " + turn;
            };
        };
    })
})

const reset = () => {
    const markboxes = document.querySelectorAll(".markbox");
    markboxes.forEach(markbox => {
        markbox.innerText = "";
    });
    winImg.style.visibility = "hidden";
    isGameOver = false;
    turn = "X";
    boardMsg.innerText = "Turn for " + turn;
};

