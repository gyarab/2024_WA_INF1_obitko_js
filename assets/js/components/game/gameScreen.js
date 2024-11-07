import ButtonFactory from "../buttonFactory.js";
import CardGrid from "./cardGrid.js";
import PlayerStats from "./playerStats.js";

class GameScreen {
    constructor(mode) {
        this.sizes = [2, 4, 6];
        this.sizeIndex = 1;
        this.mode = mode;
        this.buttonFactory = new ButtonFactory(["thm-btn", "thm-btn-small"]);

        this.cardGrid = new CardGrid(this.sizes[this.sizeIndex], this);

        this.playerOne = new PlayerStats(1);
        this.currentPlayer = this.playerOne;
        this.currentPlayer.title.classList.add("active");

        this.sreenHTML = document.createElement("div");
        this.sreenHTML.classList.add("game-screen");
        this.sreenHTML.appendChild(this.playerOne.stats);

        this.gameScreenMain = document.createElement("main");
        this.gameScreenMain.classList.add("game-screen__main");
        this.gameScreenMain.appendChild(this.cardGrid.grid);

        this.controlls = document.createElement("div");
        this.controlls.className = "game-screen__controlls";

        this.resetGameButton = this.buttonFactory.new({
            buttonText: "Reset Game",
            buttonFunction: () => this.resetGrid()
        });

        this.difficultyButton = this.buttonFactory.new({
            buttonText: "Difficulty >>",
            buttonFunction: () => this.changeGridSize()
        });

        this.controlls.appendChild(this.resetGameButton);
        this.controlls.appendChild(this.difficultyButton);
        this.gameScreenMain.appendChild(this.controlls);
        this.sreenHTML.appendChild(this.gameScreenMain);

        if (this.mode === 2) {
            this.playerTwo = new PlayerStats(2);
            this.sreenHTML.appendChild(this.playerTwo.stats);
            this.currentPlayer = this.playerOne;
        }
    }

    resetGrid() {
        this.cardGrid.reset();
        this.playerOne.setScore(0);
        this.playerOne.setAttempts(0);
        if (this.mode === 2) {
            this.playerTwo.setScore(0);
            this.playerTwo.setAttempts(0);
        }

        this.playerOne.reset();
        if (this.mode === 2) {
            this.playerTwo.reset();
        }
    }

    changeGridSize() {
        this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
        let newSize = this.sizes[this.sizeIndex];
        this.cardGrid.changeSize(newSize);

        const arrows = ">".repeat(this.sizeIndex + 1);
        this.difficultyButton.innerText = `Difficulty ${arrows}`;
    }

    switchPlayer() {
        if (this.mode === 2) {
            this.currentPlayer.title.classList.remove("active");
            this.currentPlayer = this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
            this.currentPlayer.title.classList.add("active");
        }
    }
}

export default GameScreen;
