class Hero {
    constructor(parentNode, onSinglePlayer, onMultiPlayer) {
        this.parentNode = parentNode;
        this.onSinglePlayer = onSinglePlayer;
        this.onMultiPlayer = onMultiPlayer;

        this.render();
    }

    render() {
        this.parentNode.innerHTML = `
            <div class="hero">
                <div class="hero__tag">
                    <img src="assets/images/figma-logo.svg" alt="">
                    <p>Designed in Figma</p>
                </div>
                <h1 class="hero__title">
                    Welcome to the <span class="text-outline">ultimate</span> UI / UX<br>
                    <span class="text-green">memory game</span>
                </h1>
                <div class="hero__buttons">
                    <img src="assets/images/icons/pointing-arrow-icon.svg" alt="" class="hero__pointing-arrow-icon">
                    <button class="thm-btn" id="singlePlayerButton">
                        <img src="assets/images/icons/user-icon.svg" alt="">Single player
                        <div class="thm-btn__before"></div>
                    </button>
                    <p>or</p>
                    <button class="thm-btn" id="multiPlayerButton">
                        <img src="assets/images/icons/users-icon.svg" alt="">Play with a friend
                    </button>
                </div>
            </div>`;

        this.attachEventListeners();
    }

    attachEventListeners() {
        const singlePlayerButton = document.querySelector("#singlePlayerButton");
        const multiPlayerButton = document.querySelector("#multiPlayerButton");

        singlePlayerButton.addEventListener("click", this.onSinglePlayer);
        multiPlayerButton.addEventListener("click", this.onMultiPlayer);
    }
}

export default Hero; 