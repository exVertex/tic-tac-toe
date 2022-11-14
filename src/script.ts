// Menu 
const mainContainer = document.getElementById("main-container");
const exitButton = document.getElementById("exit-button");
const gameFrame = document.getElementById("game-frame");
const playText = document.getElementById("play-text");
const onePlayerText = document.getElementById("one-player");
const twoPlayerText = document.getElementById("two-player");

let toggleTheMenu = function(): void {
    mainContainer?.classList.toggle("in-active");
};

exitButton?.addEventListener("click", () => {
    if(gameFrame) {
        gameFrame.innerHTML = '';
        gameFrame.style.display = "none";
    }
    if (playText) playText.style.display = "block";
    if(onePlayerText) onePlayerText.style.display = "block"
    if(twoPlayerText) twoPlayerText.style.display = "block"
    toggleTheMenu();
    exitButton.hidden = true;
});    

function addMessageBoard(): HTMLDivElement {
    const messaageBoard = document.createElement("div");
    messaageBoard.classList.add("light-font");
    messaageBoard.classList.add("heading");
    messaageBoard.textContent = " ";
    messaageBoard.setAttribute("id", "message-board");
    return messaageBoard;
};

function setUpPlayground(): Array<HTMLDivElement> {

    // hide the menu elements
    if(playText) playText.style.display = "none";
    if(onePlayerText) onePlayerText.style.display = "none";
    if(twoPlayerText) twoPlayerText.style.display = "none";

    // show setting elements
    if (exitButton) exitButton.hidden = false;
    if (gameFrame) gameFrame.style.display = "flex";

    // create new containers
    gameFrame?.appendChild(addMessageBoard());

    let gameContainer = document.createElement("div");
    gameContainer.classList.add("tictactoe-container");
    gameFrame?.appendChild(gameContainer); 

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

    var gameBoxes: Array<HTMLDivElement> = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];

    return gameBoxes;
};

function createPlayShape(idAttribute: string): HTMLDivElement {
    let shape = document.createElement("div");
    shape.setAttribute("id", idAttribute);
    shape.style.animation = "appearAnimation 0.2s";
    return shape;
}

function checkIfWon(gameState: Array<string>, el: string): boolean {
    const messageBoard = document.getElementById("message-board");
    const winMessage = el.toUpperCase() + " WON";
    if (gameState[0]==el && gameState[3]==el && gameState[6]==el) {
        if (messageBoard) messageBoard.textContent = winMessage;
        return true;
    }
    if (gameState[0]==el && gameState[1]==el && gameState[2]==el) {
        if (messageBoard) messageBoard.textContent = winMessage;
        return true;
    }
    if (gameState[0]==el && gameState[4]==el && gameState[8]==el) {
        if (messageBoard) messageBoard.textContent = winMessage;
        return true;
    }
    if (gameState[1]==el && gameState[4]==el && gameState[7]==el) {
        if (messageBoard) messageBoard.textContent = winMessage;
        return true;
    }
    if (gameState[2]==el && gameState[5]==el && gameState[8]==el) {
        if (messageBoard) messageBoard.textContent = winMessage;
        return true;
    }
    if (gameState[2]==el && gameState[4]==el && gameState[6]==el) {
        if (messageBoard) messageBoard.textContent = winMessage;
        return true;
    }
    if (gameState[3]==el && gameState[4]==el && gameState[5]==el) {
        if (messageBoard) messageBoard.textContent = winMessage;
        return true;
    }
    if (gameState[6]==el && gameState[7]==el && gameState[8]==el) {
        if (messageBoard) messageBoard.textContent = winMessage;
        return true;
    }
    return false;
};

function getRandomNumber(): number {
    return Math.floor(Math.random() * (8 + 1));
}

function getEmptyField(gameState: string[]): number {
    var numb = getRandomNumber();
    if (gameState[numb] != "") {
        return getEmptyField(gameState);
    } else {
        return numb;
    }
}

function play(ai: boolean) : void {

    // Initial set-up
    toggleTheMenu();
    if(exitButton) exitButton.hidden = true;

    var gameBoxes = setUpPlayground();
    let gameState = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "x";
    let win = false;

    gameBoxes[0].addEventListener("click", async () => {
        if (!win) {
            if (currentPlayer=="x") {
            gameBoxes[0].appendChild(createPlayShape("cross"));
            gameState[0] = "x";
            currentPlayer = "o";
            win = checkIfWon(gameState, "x");
            if (ai && !win) {
                await new Promise(f => setTimeout(f, 500));
                var field = getEmptyField(gameState);
                gameBoxes[field].appendChild(createPlayShape("circle"));
                gameState[field] = "o";
                currentPlayer = "x";
                win = checkIfWon(gameState, "o");
            }
        } else {
            gameBoxes[0].appendChild(createPlayShape("circle"));
            gameState[0] = "o";
            currentPlayer = "x";
            win = checkIfWon(gameState, "o");
            if (ai && !win) {
                await new Promise(f => setTimeout(f, 500));
                var field = getEmptyField(gameState);
                gameBoxes[field].appendChild(createPlayShape("cross"));
                gameState[field] = "x";
                currentPlayer = "o";
                win = checkIfWon(gameState, "x");
            }
        }
    }
    }, {once: true});

    gameBoxes[1].addEventListener("click", async () => {
        if (!win) {
            if (currentPlayer=="x") {
                gameBoxes[1].appendChild(createPlayShape("cross"));
                gameState[1] = "x";
                currentPlayer = "o";
                win = checkIfWon(gameState, "x");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("circle"));
                    gameState[field] = "o";
                    currentPlayer = "x";
                    win = checkIfWon(gameState, "o");
                }
            } else {
                gameBoxes[1].appendChild(createPlayShape("circle"));
                gameState[1] = "o";
                currentPlayer = "x";
                win = checkIfWon(gameState, "o");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("cross"));
                    gameState[field] = "x";
                    currentPlayer = "o";
                    win = checkIfWon(gameState, "x");
                }
            }
        }
    }, {once: true});

    gameBoxes[2].addEventListener("click", async () => {
        if (!win) {
            if (currentPlayer=="x") {
                gameBoxes[2].appendChild(createPlayShape("cross"));
                gameState[2] = "x";
                currentPlayer = "o";
                win = checkIfWon(gameState, "x");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("circle"));
                    gameState[field] = "o";
                    currentPlayer = "x";
                    win = checkIfWon(gameState, "o");
                }
            } else {
                gameBoxes[2].appendChild(createPlayShape("circle"));
                gameState[2] = "o";
                currentPlayer = "x";
                win = checkIfWon(gameState, "o");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("cross"));
                    gameState[field] = "x";
                    currentPlayer = "o";
                    win = checkIfWon(gameState, "x");
                }
            }
        }
    }, {once: true});

    gameBoxes[3].addEventListener("click", async () => {
        if (!win) {
            if (currentPlayer=="x") {
                gameBoxes[3].appendChild(createPlayShape("cross"));
                gameState[3] = "x";
                currentPlayer = "o";
                win = checkIfWon(gameState, "x");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("circle"));
                    gameState[field] = "o";
                    currentPlayer = "x";
                    win = checkIfWon(gameState, "o");
                }
            } else {
                gameBoxes[3].appendChild(createPlayShape("circle"));
                gameState[3] = "o";
                currentPlayer = "x";
                win = checkIfWon(gameState, "o");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("cross"));
                    gameState[field] = "x";
                    currentPlayer = "o";
                    win = checkIfWon(gameState, "x");
                }
            }
        }
    }, {once: true});

    gameBoxes[4].addEventListener("click", async () => {
        if (!win) {
            if (currentPlayer=="x") {
                gameBoxes[4].appendChild(createPlayShape("cross"));
                gameState[4] = "x";
                currentPlayer = "o";
                win = checkIfWon(gameState, "x");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("circle"));
                    gameState[field] = "o";
                    currentPlayer = "x";
                    win = checkIfWon(gameState, "o");
                }
            } else {
                gameBoxes[4].appendChild(createPlayShape("circle"));
                gameState[4] = "o";
                currentPlayer = "x";
                win = checkIfWon(gameState, "o");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("cross"));
                    gameState[field] = "x";
                    currentPlayer = "o";
                    win = checkIfWon(gameState, "x");
                }
            }
        }
    }, {once: true});

    gameBoxes[5].addEventListener("click", async () => {
        if(!win) {
            if (currentPlayer=="x") {
                gameBoxes[5].appendChild(createPlayShape("cross"));
                gameState[5] = "x";
                currentPlayer = "o";
                win = checkIfWon(gameState, "x");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("circle"));
                    gameState[field] = "o";
                    currentPlayer = "xo";
                    win = checkIfWon(gameState, "o");
                }
            } else {
                gameBoxes[5].appendChild(createPlayShape("circle"));
                gameState[5] = "o";
                currentPlayer = "x";
                win = checkIfWon(gameState, "o");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("cross"));
                    gameState[field] = "x";
                    currentPlayer = "o";
                    win = checkIfWon(gameState, "x");
                }
            }
        }

    }, {once: true});

    gameBoxes[6].addEventListener("click", async () => {
        if(!win) {
            if (currentPlayer=="x") {
                gameBoxes[6].appendChild(createPlayShape("cross"));
                gameState[6] = "x";
                currentPlayer = "o";
                win = checkIfWon(gameState, "x");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("circle"));
                    gameState[field] = "o";
                    currentPlayer = "x";
                    win = checkIfWon(gameState, "o");
                }
            } else {
                gameBoxes[6].appendChild(createPlayShape("circle"));
                gameState[6] = "o";
                currentPlayer = "x";
                win = checkIfWon(gameState, "o");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("cross"));
                    gameState[field] = "x";
                    currentPlayer = "o";
                    win = checkIfWon(gameState, "x");
                }
            }
        }
    }, {once: true});

    gameBoxes[7].addEventListener("click", async () => {
        if(!win) {
            if (currentPlayer=="x") {
                gameBoxes[7].appendChild(createPlayShape("cross"));
                gameState[7] = "x";
                currentPlayer = "o";
                win = checkIfWon(gameState, "x");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("circle"));
                    gameState[field] = "o";
                    currentPlayer = "x";
                    win = checkIfWon(gameState, "o");
                }
            } else {
                gameBoxes[7].appendChild(createPlayShape("circle"));
                gameState[7] = "o";
                currentPlayer = "x";
                win = checkIfWon(gameState, "o");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("cross"));
                    gameState[field] = "x";
                    currentPlayer = "o";
                    win = checkIfWon(gameState, "x");
                }
            }
        }
    }, {once: true});

    gameBoxes[8].addEventListener("click", async () => {
        if(!win) {
            if (currentPlayer=="x") {
                gameBoxes[8].appendChild(createPlayShape("cross"));
                gameState[8] = "x";
                currentPlayer = "o";
                win = checkIfWon(gameState, "x");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("circle"));
                    gameState[field] = "o";
                    currentPlayer = "x";
                    win = checkIfWon(gameState, "o");
                }
            } else {
                gameBoxes[8].appendChild(createPlayShape("circle"));
                gameState[8] = "o";
                currentPlayer = "x";
                win = checkIfWon(gameState, "o");
                if (ai && !win) {
                    await new Promise(f => setTimeout(f, 500));
                    var field = getEmptyField(gameState);
                    gameBoxes[field].appendChild(createPlayShape("cross"));
                    gameState[field] = "x";
                    currentPlayer = "o";
                    win = checkIfWon(gameState, "x");
                }
            }
        }

    }, {once: true});

};
