function insertOptionInFront(element: any): void{
    if (continuePlay){
        const optionXO: string = optionTurn? "X": "O";
        element.innerText = optionXO;
        if(optionXO == "X"){
            element.style.color = colorX;
        }
        else if(optionXO == "O"){
            element.style.color = colorO;
        }
        mapp();
    }
}

function verifyTypes(ftype: any, stype: any): boolean {
    if(typeof ftype !== typeof stype){
        return true;
    }
    return false;
}

function mappingDatasVertical(original: any[], vertical: any[]): any[] {
    for(let index = 0; index < original.length; index++){
        vertical[index][0] = original[0][index];
        vertical[index][1] = original[1][index];
        vertical[index][2] = original[2][index];
    }
    return vertical;
}

function mappingDatasDiagonal(original: any[], diagonal: any[]): any[] {
    let indexReverse: number = 2;
    original.forEach((value, index): void => {
        diagonal[0][index] = value[index];
        diagonal[1][index] = value[indexReverse];

        indexReverse--;
    })

    return diagonal;
}

function verifyEqual(): number{
    let count_null = 0
        for(const line of strutureDatas){
            for(const ent of line){
                if(verifyTypes(ent, null)){
                    count_null++;
                }
            }
        }
    
        return count_null;
}

function mapp(): void{
    verticalDatas = mappingDatasVertical(strutureDatas, verticalDatas);
    diagonalDatas = mappingDatasDiagonal(strutureDatas, diagonalDatas);

    if(analiseDiagonal() || analiseHorizontal() || analiseVertical()){
        nextRound();
    }else{
        let count_null: number = verifyEqual();
        if(count_null == 9){
            incrementEqualXO();
            nextRound();
        }
    }
}

function nextRound(): void{
    setTimeout(() => {
        paragraphResponseX.innerText = ` ${pointsX}`;
        paragraphResponseO.innerText = ` ${pointsO}`;
        resetDisplay();
        paragraphResponseLevel.innerText = ` ${countLevels}/${numberLevels}`;
    }, 2000);
}

function resetDisplay(): void{
    if(countLevels != numberLevels){
        
        continuePlay = true;
        buttons.forEach((element: any): void => {
            for(const b of element){
                b.innerText = "";
                b.style.color = "black"
            }
        })
        strutureDatas = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        countLevels++
    }else{
        let count_null: number = verifyEqual();
        if(pointsO == pointsX){

            let first_name: any = document.getElementById('first-name')
            let second_name: any = document.getElementById('second-name')

            first_name.innerText = nameUserX;
            second_name.innerText = nameUserO;
            
            let displayEqual: any = document.getElementById('response-equal')
            displayEqual.style.left = "35%";
        }else{
            let name_winner: any = document.getElementById('name-winner')
            if(optionWinn == "x" && pointsX > pointsO){
                name_winner.innerText = nameUserX;
            }else if(optionWinn == "o" && pointsO > pointsX){
                name_winner.innerText = nameUserO;
            }
            
            let displayWinner: any = document.getElementById('response-winn')
            displayWinner.style.left = "35%";
        }
    }
} 

function setStyleOption(): void{
    spanO.style.transition = "all .3s;"
    spanX.style.transition = "all .3s;"
    figO.style.transition = "all .3s;"
    figX.style.transition = "all .3s;"    
    if(optionTurn){
        spanO.style.color = "var(--fourtiary-color)"
        spanX.style.color = "var(--primary-color)"

        figX.style.borderColor = "var(--primary-color)"
        figO.style.borderColor = "var(--fourtiary-color)"

    }else{
        spanX.style.color = "var(--fourtiary-color)"
        spanO.style.color = "var(--primary-color)"

        figO.style.borderColor = "var(--primary-color)"
        figX.style.borderColor = "var(--fourtiary-color)"
    }
}

paragraphResponseLevel.innerText = ` ${countLevels}/${numberLevels}`;
console.log(optionTurn)
setStyleOption()