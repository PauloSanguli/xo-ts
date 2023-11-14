function setValues(): void{
    nameUserO = inputO.value;
    nameUserX = inputX.value;
    numberLevels = selectLevel.value;

    name_user_o.innerText = nameUserO
    name_user_x.innerText = nameUserX
    paragraphResponseLevel.innerText = ` ${countLevels}/${numberLevels}`;
}

document.getElementById('play-user')?.addEventListener("click", (): void => {
    setValues()

    let disp: any = document.getElementById('display');
    disp.style.transform = "translateY(-100%)"

    let p: any = document.getElementById("response-paragraph-level");
    p.style.top = "7%";

    let game: any = document.getElementById("content-game");
    game.style.top = "0%";

    let gameX: any = document.getElementById("response-game-x");
    gameX.style.top = "35%";    

    let gameO: any = document.getElementById("response-game-o");
    gameO.style.top = "35%";    
})

function backHome (): void {
    window.location.href = "../XO/app.html"
}
