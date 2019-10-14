"use strict";

let kiir = 0;
let feltolt = "";
let feltolt2 = "";/*a kicsi ablakhoz kellett*/
let elsoSzam = ""; 
let masodikSzam = "";
let muvelet = ""; 
let tomb = [];
let minuszegyszer = "-1";/*értelemszerűen a -1-es művelethez*/

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
    /*itt a feltolt2-ig az if-től, az kb annyi akar lenni hogy ha megnyomom az M+ gombot akkor pici mezőben a M-t kiirja*/
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
    /*pretty much the same csak itt kitörli az M-et ha már olvastam a memóriát*/
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
/*ez a -1-el való beszorzásos művelet */
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
            /*a minuszegy-es case-t írtam hozzá*/
        case "minuszegy":    
            document.getElementById("ablak").value = +elsoSzam * +minuszegyszer;
            break;
    }
}

/* ahogy a tanár csinálta

function memoryPlus() {
    tomb.push(feltolt);
    let szoveg = "                                M";      Ez az amit nemértek, hogy miért jobb hogy ilyen "odarakok sok space-t" megoldással csinálta. Elég scuffed
    for (let i = 0; i < szoveg.length; i++) {
        if (i < feltolt.length) {
            kiir = kiir.concat(feltolt.charAt(i));
        }
        else {
            kiir = kiir.concat(szoveg.charAt(i));
        }
    }
    document.getElementById("ablak").value = kiir;
    kiir = "";
    feltolt = "";
}

Amikhez odaírtam azok csináltam házinak, a többi az mind órai munka amit tanárral együtt kellett

*/