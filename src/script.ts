// Menu 
const menuToggleSpan = document.getElementById("toggle-menu");
const mainContainer = document.getElementById("main-container");

const playText = document.getElementById("play-text");
const onePlayerText = document.getElementById("one-player");
const twoPlayerText = document.getElementById("two-player");

let toggleTheMenu = function(): void {
    mainContainer?.classList.toggle("in-active");
};

menuToggleSpan?.addEventListener("click", () => {
    toggleTheMenu();
});

function setUpPlayground(): HTMLDivElement[] {
    
    // hide the menu elements
    if(playText) playText.style.display = "none";
    if(onePlayerText) onePlayerText.style.display = "none";
    if(twoPlayerText) twoPlayerText.style.display = "none";

    // create new containers
    let gameFrame = document.createElement("div");
    gameFrame.classList.add("gameFrame");

    document.getElementById("play-menu")?.appendChild(gameFrame);

    let gameContainer = document.createElement("div");
    gameContainer.classList.add("tictactoe-container");
    gameFrame.appendChild(gameContainer); 

    //create and add tictactoe boxes
    let boxOne = document.createElement("div");
    boxOne.classList.add("box-one");
    gameContainer.appendChild(boxOne);
    let boxTwo = document.createElement("div");
    boxTwo.classList.add("box-two");
    gameContainer.appendChild(boxTwo);
    let boxThree = document.createElement("div");
    boxThree.classList.add("box-three");
    gameContainer.appendChild(boxThree);
    let boxFour = document.createElement("div");
    boxFour.classList.add("box-four");
    gameContainer.appendChild(boxFour);
    let boxFive = document.createElement("div");
    boxFive.classList.add("box-five");
    gameContainer.appendChild(boxFive);
    let boxSix = document.createElement("div");
    boxSix.classList.add("box-six");
    gameContainer.appendChild(boxSix);
    let boxSeven = document.createElement("div");
    boxSeven.classList.add("box-seven");
    gameContainer.appendChild(boxSeven);
    let boxEight = document.createElement("div");
    boxEight.classList.add("box-eight");
    gameContainer.appendChild(boxEight);
    let boxNine = document.createElement("div");
    boxNine.classList.add("box-nine");
    gameContainer.appendChild(boxNine);

    var gameBoxes:HTMLDivElement[]= [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];

    return gameBoxes;
}

function createEx(): HTMLDivElement {
    let krizic = document.createElement("div");
    krizic.setAttribute("id", "cross");
    krizic.style.animation = "appearAnimation 0.2s";
    return krizic;
}

function createOo(): HTMLDivElement {
    let kruzic = document.createElement("div");
    kruzic.setAttribute("id", "circle");
    kruzic.style.animation = "appearAnimation 0.2s";
    return kruzic;
}

function openPlayerOne() : void {
    toggleTheMenu();
    var gameBoxes = setUpPlayground();

    let gameState = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "o";

    gameBoxes[0].addEventListener("click", () => {
        if (currentPlayer=="x") {
            gameBoxes[0].appendChild(createEx());
            gameState[0] = "x";
            currentPlayer = "o";
            console.log(currentPlayer);
        } else {
            gameBoxes[0].appendChild(createOo());
            gameState[0] = "o";
            currentPlayer = "x";
        }
    }, {once: true});

    gameBoxes[1].addEventListener("click", () => {
        if (currentPlayer=="x") {
            gameBoxes[1].appendChild(createEx());
            gameState[1] = "x";
            currentPlayer = "o";
        } else {
            gameBoxes[1].appendChild(createOo());
            gameState[1] = "o";
            currentPlayer = "x";
        }
    }, {once: true});

    gameBoxes[2].addEventListener("click", () => {
        if (currentPlayer=="x") {
            gameBoxes[2].appendChild(createEx());
            gameState[2] = "x";
            currentPlayer = "o";
        } else {
            gameBoxes[2].appendChild(createOo());
            gameState[2] = "o";
            currentPlayer = "x";
        }
    }, {once: true});

    gameBoxes[3].addEventListener("click", () => {
        if (currentPlayer=="x") {
            gameBoxes[3].appendChild(createEx());
            gameState[3] = "x";
            currentPlayer = "o";
        } else {
            gameBoxes[3].appendChild(createOo());
            gameState[3] = "o";
            currentPlayer = "x";
        }
    }, {once: true});

    gameBoxes[4].addEventListener("click", () => {
        if (currentPlayer=="x") {
            gameBoxes[4].appendChild(createEx());
            gameState[4] = "x";
            currentPlayer = "o";
        } else {
            gameBoxes[4].appendChild(createOo());
            gameState[4] = "o";
            currentPlayer = "x";
        }
    }, {once: true});

    gameBoxes[5].addEventListener("click", () => {
        if (currentPlayer=="x") {
            gameBoxes[5].appendChild(createEx());
            gameState[5] = "x";
            currentPlayer = "o";
        } else {
            gameBoxes[5].appendChild(createOo());
            gameState[5] = "o";
            currentPlayer = "x";
        }
    }, {once: true});

    gameBoxes[6].addEventListener("click", () => {
        if (currentPlayer=="x") {
            gameBoxes[6].appendChild(createEx());
            gameState[6] = "x";
            currentPlayer = "o";
        } else {
            gameBoxes[6].appendChild(createOo());
            gameState[6] = "o";
            currentPlayer = "x";
        }
    }, {once: true});

    gameBoxes[7].addEventListener("click", () => {
        if (currentPlayer=="x") {
            gameBoxes[7].appendChild(createEx());
            gameState[7] = "x";
            currentPlayer = "o";
        } else {
            gameBoxes[7].appendChild(createOo());
            gameState[7] = "o";
            currentPlayer = "x";
        }
    }, {once: true});

    gameBoxes[8].addEventListener("click", () => {
        if (currentPlayer=="x") {
            gameBoxes[8].appendChild(createEx());
            gameState[8] = "x";
            currentPlayer = "o";
        } else {
            gameBoxes[8].appendChild(createOo());
            gameState[8] = "o";
            currentPlayer = "x";
        }
    }, {once: true});

};

function notImplemented(): void {
    alert("This feature is not yet implemented. Plaese come back later.");
};
