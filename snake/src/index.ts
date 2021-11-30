import "./assets/less/main";
import Snake from "./modules/Snake";

const snake =new Snake();

document.getElementById("btn")?.addEventListener("click", function () {
    snake.addBody();
});