class Playground {

    gameContainer: HTMLDivElement;
    messageBoard: HTMLDivElement;

    gameFields: Array<HTMLDivElement>;

    constructor(gameFrame: HTMLElement) {
        this.gameContainer = document.createElement("div");
        this.gameContainer.classList.add("tictactoe-container");

        this.messageBoard = addMessageBoard();

        gameFrame.appendChild(this.messageBoard);
        gameFrame.appendChild(this.gameContainer);

        this.gameFields = Array<HTMLDivElement>(9);

        for (let i = 0; i < 9; i++) {
            this.gameFields[i] = document.createElement("div");
            this.gameFields[i].classList.add("box" + (i + 1));
            this.gameContainer.appendChild(this.gameFields[i]);
        }
    }
}

function addMessageBoard(): HTMLDivElement {

    const messaageBoard = document.createElement("div");
    
    messaageBoard.classList.add("light-font");
    messaageBoard.classList.add("heading");
    messaageBoard.textContent = "It's your turn!".toUpperCase();
    messaageBoard.setAttribute("id", "message-board");

    return messaageBoard;
};