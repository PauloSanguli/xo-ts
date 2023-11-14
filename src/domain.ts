function analiseVertical(array?: any[]): boolean{
    array = verticalDatas;
    for(let index = 0; index <= array.length-1; index++){
        buttonsVertical = mappingDatasVertical(buttons, buttonsVertical)
        if(array[index][0] && array[index][1] && array[index][2]){
            incrementPointsX();
            optionWinn = "x";
            identifierButtons(buttonsVertical[index])
            return true;
        }else{
            let negated: boolean[] = negateValues(array[index]);
            if(negated[0] && negated[1] && negated[2]){
                incrementPointsO();
                optionWinn = "o";
                identifierButtons(buttonsVertical[index])
                return true;
            }
        }
    }
    return false;
    //incrementEqualXO();
}
    

function analiseDiagonal(array?: any[]): boolean{
    array = diagonalDatas;
    for(let index = 0; index <= array.length-1; index++){
        buttonsDiagonal = mappingDatasDiagonal(buttons, buttonsDiagonal)
        if(array[index][0] && array[index][1] && array[index][2]){
            incrementPointsX();
            optionWinn = "x";
            identifierButtons(buttonsDiagonal[index])
            return true;
        }else{
            let negated: boolean[] = negateValues(array[index]);
            if(negated[0] && negated[1] && negated[2]){
                incrementPointsO();
                optionWinn = "o";
                identifierButtons(buttonsDiagonal[index])
                return true;
            }
        }
    }
    return false;
    //incrementEqualXO();
    
}


function analiseHorizontal(array?: any[]): boolean{
    array = strutureDatas;
    for(let index = 0; index <= array.length-1; index++){
        if(array[index][0] && array[index][1] && array[index][2]){
            incrementPointsX();
            optionWinn = "x";
            identifierButtons(buttons[index])
            return true;
        }else{
            let negated: boolean[] = negateValues(array[index]);
            if(negated[0] && negated[1] && negated[2]){
                incrementPointsO();
                optionWinn = "o";
                identifierButtons(buttons[index])
                return true;
            }
        }
    }
    return false;
    //incrementEqualXO();
}


function negateValues(array: boolean[]): boolean[]{
    let newArray: boolean[] = new Array();
    for (let index = 0; index <= array.length; index++) {
        if(verifyTypes(array[index], null)){
            newArray[index]= !array[index];
        }else{
            newArray[index] = false;
        }
    }
    return newArray;
}

function incrementPointsX(): void{
    pointsX++;
    continuePlay = false;
}

function incrementPointsO(): void{
    pointsO++;
    continuePlay = false;
}

function incrementEqualXO(): void{
    pointsO++;
    pointsX++;
}

function identifierButtons(array: any[]): void{
    console.log(array);
    array.forEach((element): void => {
        element.style.color = colorWin;
    })
}
