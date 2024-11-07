import Card from "./card.js";

class CardGrid {
  constructor(size, gameScreen) {
    this.size = size;
    this.gameScreen = gameScreen;
    this.numOfCards = size * size;
    this.cards = [];
    this.flippedCards = [];
    this.matchesFound = 0;
    this.grid = document.createElement("div");
    this.grid.classList.add("card-grid");
    this.grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    this.grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    this.init();
  }

  async init() {
    const imageData = await this.loadImageData();
    this.loadImages(imageData);
    this.renderCards();
  }

  async loadImageData() {
    try {
      const response = await fetch("/assets/js/images.json");
      if (!response.ok) throw new Error("Failed to load images");
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      return {};
    }
  }

  loadImages(imageData) {
    const images = Object.entries(imageData).flatMap(([category, imageNames]) =>
      imageNames.map((image) => ({
        url: `/assets/images/game/${category}/${image}`,
        type: category,
      }))
    );

    const numPairs = this.numOfCards / 2;
    const selectedImages = this.shuffle(images).slice(0, numPairs);

    this.cards = selectedImages.flatMap((imageData, i) => [
      new Card(imageData.url, i),
      new Card(imageData.url, i),
    ]);

    this.cards = this.shuffle(this.cards);
    this.cards.forEach((card) => { card.element.addEventListener("click", () => this.flipCard(card)); });
  }

  flipCard(card) {
    if (card.isFlipped || this.flippedCards.length >= 2) return;

    card.flip();
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      const currentPlayer = this.gameScreen.currentPlayer;
      currentPlayer.setAttempts(currentPlayer.attempts + 1);

      const [firstCard, secondCard] = this.flippedCards;

      if (firstCard.id === secondCard.id) {
        currentPlayer.setScore(currentPlayer.score + 1);
        currentPlayer.addMatch();
        this.matchesFound++;
        this.flippedCards = [];

        if (this.matchesFound === this.numOfCards / 2) {
          this.endGame();
        }
      } else {
        setTimeout(() => {
          firstCard.reset();
          secondCard.reset();
          this.flippedCards = [];
          this.gameScreen.switchPlayer();
        }, 1000);
      }
    }
  }

  endGame() {
    setTimeout(() => {
      const winMessage = document.createElement("h3");
      if (this.gameScreen.mode === 2) {
        winMessage.textContent = `Congratulations! Player ${this.gameScreen.currentPlayer.playerNumber} wins.`
      }
      else {
        winMessage.textContent = "Congratulations! You win.";
      }
      winMessage.classList.add("win-message");

      this.grid.style.position = "relative";
      winMessage.style.position = "absolute";
      winMessage.style.top = "50%";
      winMessage.style.left = "50%";
      winMessage.style.transform = "translate(-50%, -50%)";

      this.grid.appendChild(winMessage);
    }, 300);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  renderCards() {
    this.grid.innerHTML = "";
    this.cards.forEach((card) => this.grid.appendChild(card.element));
  }

  reset() {
    const winMessage = this.grid.querySelector(".win-message");
    if (winMessage) winMessage.remove();

    this.grid.style.display = "grid";
    this.flippedCards = [];
    this.matchesFound = 0;
    this.cards.forEach((card) => card.reset());
    this.cards = this.shuffle(this.cards);
    this.renderCards();
  }

  changeSize(size) {
    this.reset();
    this.size = size;
    this.numOfCards = size * size;
    this.grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    this.grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    this.init();
  }
}


export default CardGrid;