import { KEPEK } from "./adatok.js";


export function htmlOsszeAllit(lista) {
   /* állíts össze egy txt-t div, img, a megfelelő kép adatokkal */
   let txt = "";
   for (let index = 0; index < KEPEK.length; index++) {
    txt += `<div class="kep"><img src="${KEPEK[index].kep}" alt="${KEPEK[index].cim}"></div>`;
   }
   return txt;
}
