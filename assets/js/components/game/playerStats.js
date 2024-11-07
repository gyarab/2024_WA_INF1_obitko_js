class PlayerStats {
    constructor(playerNumber) {
        this.playerNumber = playerNumber;
        this.score = 0;
        this.attempts = 0;
        this.matches = 0;
        this.stats = document.createElement("aside");
        this.init();
    }

    init() {
        this.title = document.createElement("h3");
        this.title.classList.add("player__title");
        this.title.innerHTML = `<img src="/assets/images/icons/user-icon.svg" alt="">Player ${this.playerNumber}`;

        this.scoreElement = this.createStatElement("Score", this.score);
        this.attemptsElement = this.createStatElement("Attempts", this.attempts);
        this.accuracyElement = this.createStatElement("Accuracy", "0%");

        this.stats.appendChild(this.title);
        this.stats.appendChild(this.scoreElement);
        this.stats.appendChild(this.attemptsElement);
        this.stats.appendChild(this.accuracyElement);
    }

    createStatElement(label, initialValue) {
        const stat = document.createElement("p");
        stat.innerHTML = `${label}: `;
        const statValue = document.createElement("span");
        statValue.classList.add(label.toLowerCase());
        statValue.textContent = initialValue;
        stat.appendChild(statValue);
        return stat;
    }

    setScore(s) {
        this.score = s;
        this.scoreElement.querySelector(".score").textContent = this.score;
    }

    setAttempts(a) {
        this.attempts = a;
        this.attemptsElement.querySelector(".attempts").textContent = this.attempts;
        this.updateAccuracy();
    }

    addMatch() {
        this.matches++;
        this.updateAccuracy();
    }

    updateAccuracy() {
        const accuracy = this.attempts ? ((this.matches / this.attempts) * 100).toFixed(1) : 0;
        this.accuracyElement.querySelector(".accuracy").textContent = `${accuracy}%`;
    }

    reset() {
        this.score = 0;
        this.attempts = 0;
        this.matches = 0;
        this.scoreElement.querySelector(".score").textContent = this.score;
        this.attemptsElement.querySelector(".attempts").textContent = this.attempts;
        this.accuracyElement.querySelector(".accuracy").textContent = "0%";
    }
}

export default PlayerStats;