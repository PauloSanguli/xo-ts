"use strict";
var _a;
function setValues() {
    nameUserO = inputO.value;
    nameUserX = inputX.value;
    numberLevels = selectLevel.value;
    name_user_o.innerText = nameUserO;
    name_user_x.innerText = nameUserX;
    paragraphResponseLevel.innerText = ` ${countLevels}/${numberLevels}`;
}
(_a = document.getElementById('play-user')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    setValues();
    let disp = document.getElementById('display');
    disp.style.transform = "translateY(-100%)";
    let p = document.getElementById("response-paragraph-level");
    p.style.top = "7%";
    let game = document.getElementById("content-game");
    game.style.top = "0%";
    let gameX = document.getElementById("response-game-x");
    gameX.style.top = "35%";
    let gameO = document.getElementById("response-game-o");
    gameO.style.top = "35%";
});
function backHome() {
    window.location.href = "../XO/app.html";
}
