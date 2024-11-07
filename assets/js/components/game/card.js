class Card {
  constructor(imageURL, id) {
    this.imageURL = imageURL;
    this.id = id;
    this.type = this.getType();
    this.isFlipped = false;

    this.element = document.createElement("div");
    this.element.classList.add("card", this.type);
    this.element.innerHTML = `
        <div class="card__front">
            <img src="/assets/images/game/card-back.svg" alt="card back arrows">
        </div>
        <div class="card__back">
          <div class="image-wrapper">
            <img src="${this.imageURL}" alt="card">
          </div>
        </div>
      `;
  }

  getType() {
    const parts = this.imageURL.split("/");
    return parts[parts.length - 2];
  }

  flip() {
    this.isFlipped = !this.isFlipped;
    this.element.classList.toggle("flip");
  }

  reset() {
    if (this.isFlipped) this.flip();
  }
}

export default Card;
