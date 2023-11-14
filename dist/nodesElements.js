"use strict";
let ffBtn = document.getElementById("button-option-first-first");
let fsBtn = document.getElementById("button-option-first-second");
let ftBtn = document.getElementById("button-option-first-third");
let sfBtn = document.getElementById("button-option-second-first");
let ssBtn = document.getElementById("button-option-second-second");
let stBtn = document.getElementById("button-option-second-third");
let tfBtn = document.getElementById("button-option-third-first");
let tsBtn = document.getElementById("button-option-third-second");
let ttBtn = document.getElementById("button-option-third-third");
//let buttons: any = document.querySelectorAll("[data-button-option]");
let buttons = [
    document.querySelectorAll('[data-button-first-line]'),
    document.querySelectorAll('[data-button-second-line]'),
    document.querySelectorAll('[data-button-third-line]')
];
let paragraphResponseX = document.getElementById('response-paragraph-point-x');
let paragraphResponseO = document.getElementById('response-paragraph-point-o');
let paragraphResponseLevel = document.getElementById('response-paragraph-level');
let name_user_x = document.getElementById('response-x-name-user');
let name_user_o = document.getElementById('response-o-name-user');
let inputO = document.getElementById('user-name-o');
let inputX = document.getElementById('user-name-x');
let selectLevel = document.getElementById('select-level');
var spanO = document.getElementById("span-o");
var spanX = document.getElementById("span-x");
var figX = document.getElementById("figure-x");
var figO = document.getElementById("figure-o");
let btn_back = document.getElementById("close-messagebox");
