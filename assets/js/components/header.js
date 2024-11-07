class Header {
    constructor(links) {
        this.links = links;

        this.headerElement = document.createElement("header");
        this.headerElement.classList.add("header");

        this.render()
        return this.headerElement;
    }

    render() {
        const navElement = document.createElement("nav");
        navElement.classList.add("header__nav")

        this.links.forEach(link => {
            const anchor = document.createElement("a");
            anchor.textContent = link.text;
            anchor.href = "#";
            anchor.addEventListener("click", link.action);
            navElement.appendChild(anchor);
        });

        this.headerElement.appendChild(navElement);
    }
}

export default Header; 