class ButtonFactory {
    constructor(classList = []) {
        this.classList = classList;
    }

    new({ buttonText = "", buttonFunction = null } = {}) {
        const button = document.createElement("button");

        button.classList.add(...this.classList);

        if (buttonText) {
            const textNode = document.createTextNode(buttonText);
            button.appendChild(textNode);
        }

        if (buttonFunction) {
            button.addEventListener("click", buttonFunction);
        }

        return button;
    }
}

export default ButtonFactory;
