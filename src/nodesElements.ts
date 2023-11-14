let ffBtn: any = document.getElementById("button-option-first-first");
let fsBtn: any = document.getElementById("button-option-first-second");
let ftBtn: any = document.getElementById("button-option-first-third");

let sfBtn: any = document.getElementById("button-option-second-first");
let ssBtn: any = document.getElementById("button-option-second-second");
let stBtn: any = document.getElementById("button-option-second-third");

let tfBtn: any = document.getElementById("button-option-third-first");
let tsBtn: any = document.getElementById("button-option-third-second");
let ttBtn: any = document.getElementById("button-option-third-third");

//let buttons: any = document.querySelectorAll("[data-button-option]");

let buttons: any[] = [
    document.querySelectorAll('[data-button-first-line]'),
    document.querySelectorAll('[data-button-second-line]'),
    document.querySelectorAll('[data-button-third-line]')
];

let paragraphResponseX: any = document.getElementById('response-paragraph-point-x');
let paragraphResponseO: any = document.getElementById('response-paragraph-point-o');
let paragraphResponseLevel: any = document.getElementById('response-paragraph-level');

let name_user_x: any = document.getElementById('response-x-name-user');
let name_user_o: any = document.getElementById('response-o-name-user');

let inputO: any = document.getElementById('user-name-o');
let inputX: any = document.getElementById('user-name-x');
let selectLevel: any = document.getElementById('select-level');

var spanO: any = document.getElementById("span-o")
var spanX: any = document.getElementById("span-x")
var figX: any = document.getElementById("figure-x")
var figO: any = document.getElementById("figure-o")

let btn_back: any = document.getElementById("close-messagebox")