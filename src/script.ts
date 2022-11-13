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
    let frame = document.createElement("div");
    frame.classList.add("frame");

    document.getElementById("play-menu")?.appendChild(frame);

    let gameContainer = document.createElement("div");
    gameContainer.classList.add("tictactoe-container");
    gameContainer.style.width = "70%";
    frame.appendChild(gameContainer); 

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

    var gameBoxes:HTMLDivElement[]= [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine ];

    return gameBoxes;

}

function openPlayerOne() : void {
    toggleTheMenu();
    var gameBoxes = setUpPlayground();

    gameBoxes[0].style.backgroundColor = "gray";


};

function notImplemented(): void {
    alert("This feature is not yet implemented. Plaese come back later.");
};
