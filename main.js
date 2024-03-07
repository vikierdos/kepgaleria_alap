import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const GALLERIA = document.querySelector(".galeria");


/* írd bele az összeálíltott html képsorozatot */
var txt = htmlOsszeAllit();
GALLERIA.innerHTML += txt;

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const NAGYKEP = document.querySelector(".nagykep img");

/* A .nagykep div megfogása */
const NAGYKEPDIV = document.querySelector(".nagykep");


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const KISKEPEK = document.querySelectorAll(".kep img");

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let index = 0; index < KISKEPEK.length; index++) {
    KISKEPEK[index].addEventListener("click", esemenyKezelo);

/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */
    function esemenyKezelo(){
        NAGYKEP.src = KISKEPEK[index].src;
        aktindex = index;
        NAGYKEPDIV.classList.remove("rejtett")
    }
}

/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
const JOBB = document.querySelector(".jobb");
const BAL = document.querySelector(".bal");

JOBB.addEventListener("click", esemenyKezeloJobb);
BAL.addEventListener("click", esemenyKezeloBal);
let aktindex = 0;
function esemenyKezeloJobb(){
    if (NAGYKEP.src == KISKEPEK[KISKEPEK.length-1].src) {
        aktindex = 0;
        NAGYKEP.src = KISKEPEK[aktindex].src;
        
    }
    else{
            aktindex ++;
            NAGYKEP.src = KISKEPEK[aktindex].src;
    }
    
    }

    function esemenyKezeloBal(){
    if (NAGYKEP.src == KISKEPEK[0].src) {
        aktindex = KISKEPEK.length-1;
        NAGYKEP.src = KISKEPEK[aktindex].src;
        
    }
    else{
            aktindex --;
            NAGYKEP.src = KISKEPEK[aktindex].src;
    }
    
    }
