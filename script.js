// Esercizio 1 //
/*
const sottotitolo = document.getElementById("sottotitolo");
sottotitolo.textContent = "IL NEGOZIO DI FRANCIS";
// document.querySelector("h1").innerText ="IL NEGOZIO DI FRANCIS"
*/
// Esercizio 2 //
//document.querySelector("body").style.backgroundColor= "	#c0c0c0"


 // Esercizio 3 //
  /*function coloreRandomSfondo() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    let coloreCasuale = 'rgb(' + r + ',' + g + ',' + b + ')';
    return coloreCasuale;
}
 let colore = coloreRandomSfondo();
 document.querySelector("body").style.backgroundColor = colore;
 coloreRandomSfondo();
 */
 
 // Esercizio 3 //

/*document.getElementById("indirizzo").innerText = "Strada stregata ,31 "*/

// Esercizio 4 //
/*
const adds = document.querySelectorAll("a");
for (let i = 0; i < adds.length; i++) {
    adds[i].classList.add("link");
}
*/

// Esercizio 5 //
/*
const immagine = document.querySelectorAll("img");
const bottone = document.getElementById("visibile");

 bottone.addEventListener('click',function () {
    for (let i = 0; i < immagine.length; i++) {
    immagine[i].classList.toggle("vista");
};
}) ;
*/
 // Esercizio 6 //
 /*
 function colorePrezzo() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    let coloreCasualePrezzo= 'rgb(' + r + ',' + g + ',' + b + ')';
   
    let prezzo = document.getElementsByTagName("span");
    for (let i = 0; i < prezzo.length; i++) {
         prezzo[i].style.color = coloreCasualePrezzo;
}
}
 colorePrezzo();
*/

