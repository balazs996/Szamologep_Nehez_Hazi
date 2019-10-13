"use strict";

let kiir = 0;
let feltolt = "";
let feltolt2 = "";
let elsoSzam = ""; 
let masodikSzam = "";
let muvelet = ""; 
let tomb = [];
let minuszegyszer = "-1";

function egy() {
    feltolt += 1;
    document.getElementById("ablak").value = feltolt;
}

function ketto() {
    feltolt += 2;
    document.getElementById("ablak").value = feltolt;
}

function harom() {
    feltolt += 3;
    document.getElementById("ablak").value = feltolt;
}

function negy() {
    feltolt += 4;
    document.getElementById("ablak").value = feltolt;
}

function ot() {
    feltolt += 5;
    document.getElementById("ablak").value = feltolt;
}

function hat() {
    feltolt += 6;
    document.getElementById("ablak").value = feltolt;
}

function het() {
    feltolt += 7;
    document.getElementById("ablak").value = feltolt;
}

function nyolc() {
    feltolt += 8;
    document.getElementById("ablak").value = feltolt;
}

function kilenc() {
    feltolt += 9;
    document.getElementById("ablak").value = feltolt;
}

function nulla() {
    if (feltolt.length != 0) {
        feltolt += 0;
        document.getElementById("ablak").value = feltolt;
    }
}

function ossz() {
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet = "összeadás";
    document.getElementById("ablak").value = "";
}

function kivon() {
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet = "kivonás";
    document.getElementById("ablak").value = "";
}

function szoroz() {
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet = "szorzás";
    document.getElementById("ablak").value = "";
}

function oszt() {
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet = "osztás";
    document.getElementById("ablak").value = "";
}

function visszaTorol() {
    if (feltolt.length != 0) {
        feltolt = feltolt.slice(0, feltolt.length - 1);
        document.getElementById("ablak").value = feltolt;
    }
}

function utolso() {
    feltolt = "";
    document.getElementById("ablak").value = feltolt;
}

function torol() {
    elsoSzam = "";
    feltolt = "";
    document.getElementById("ablak").value = feltolt;
}

function memoryPlus() {
    if (feltolt2.length != 0) {
        feltolt2 = "";
    }
    feltolt2 += "M";
    document.getElementById("ablak2").value = feltolt2;
    tomb.push(feltolt);
    feltolt = "";
    document.getElementById("ablak").value = feltolt;
}

function memoryRead() {
    if (feltolt2.length != 0) {
        feltolt2 = "";
    }
    document.getElementById("ablak2").value = feltolt2;
    let osszeg = 0;
    for (let i = 0; i < tomb.length; i++) {
        osszeg += +tomb[i];
    }
    document.getElementById("ablak").value = osszeg;
}

function negativ() {
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet = "minuszegy";
    document.getElementById("ablak").value = "";
}

function ered() {
    masodikSzam = +feltolt;

    switch (muvelet) {
        case "összeadás":
            document.getElementById("ablak").value = +elsoSzam + +masodikSzam;
            break;
        case "kivonás":
            document.getElementById("ablak").value = +elsoSzam - +masodikSzam;
            break;
        case "szorzás":
            document.getElementById("ablak").value = +elsoSzam * +masodikSzam;
            break;
        case "osztás":
            document.getElementById("ablak").value = +elsoSzam / +masodikSzam;
            break;
        case "minuszegy":    
            document.getElementById("ablak").value = +elsoSzam * +minuszegyszer;
            break;
    }
}