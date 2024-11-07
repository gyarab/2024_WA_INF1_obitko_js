import Hero from "./components/hero.js";
import GameScreen from "./components/game/gameScreen.js";
import Header from "./components/header.js";

const page = document.getElementById("page");

const hero = new Hero(page, () => loadGame(1), () => loadGame(2));

const header = new Header([
  { text: "Home", action: () => home() }
])

function clearPage() {
  page.innerHTML = "";
}

function loadGame(numOfplayers) {
  const gameScreen = new GameScreen(numOfplayers);
  clearPage();
  page.appendChild(header)
  page.appendChild(gameScreen.sreenHTML);
}

function home() {
  clearPage()
  hero.render()
}
