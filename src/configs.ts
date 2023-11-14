let strutureDatas: any[] = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

let verticalDatas: any[] = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

let diagonalDatas: any[] = [
    [null, null, null],
    [null, null, null]
];

let pointsX: number = 0;
let pointsO: number = 0;

let optionTurn: boolean = false;
var optionWinn: string = "";
var continuePlay: boolean = true;
var countLevels: number = 1;

var numberLevels: number = 0;
var nameUserX: string = "X";
var nameUserO: string = "O";


var buttonsVertical: any[] = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
];
var buttonsHorizontal: any[] = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
];
var buttonsDiagonal: any[] = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
];

var colorX = "black"
var colorO = "white"
var colorWin = "yellow"