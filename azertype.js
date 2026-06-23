/*let inputEcriture = document.getElementById("inputEcriture")
console.log(inputEcriture);

let btnValiderMot = document.getElementById("btnValiderMot")
console.groupCollapsed(btnValiderMot)

let zoneProposition = document.querySelector(".zoneProposition")
console.log(zoneProposition);

let zoneScore = document.querySelector(".zoneScore span")
console.log(zoneScore);
let listbtnradio = document.querySelectorAll(".optionSource");
console.log(listbtnradio);

for (let i = 0; i < listbtnradio.length; i++) {
    console.log(listbtnradio[i]);
}*/


function affichetResultat( score, nbmotsproposés){
    // afficher le score
     //utilisation des methodes (le DOM)
    let spanScore = document.querySelector(".zoneScore span")
   
    let afficherscore = `${score} / ${nbmotsproposés}`
   spanScore.textContent = afficherscore
    console.log("votre score est de : " + score+ " sur " + nbmotsproposés )
}
function choisirPhraseOuMot(){
    // choisir les mots ou les phrases
    let choix = prompt("veillez choisir la liste des: mots ou phrases ");

    while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("veillez choisir la liste des: mots ou phrases ");
}
return choix;
}
function lancerBoucleDeJeu(listeProposition){
    let score = 0;
     for( let i = 0; i < listeProposition.length; i++){ 
        let mottape = prompt ("entrez le mot :" +listeProposition[i])
       if (  mottape === listeProposition[i] ) {
score +=1;  
       }
    }
    return score;
}
function lancerJeu(){
    let choix = choisirPhraseOuMot();
    let score = 0;
    let nbmotsproposés;
    

    if (choix === "mots") {
       
       score = lancerBoucleDeJeu(listeMots)
        nbmotsproposés = listeMots.length
    } else{
   
        score = lancerBoucleDeJeu(listePhrases)
        nbmotsproposés=listePhrases.length
}
   affichetResultat (score,  nbmotsproposés)
}
lancerJeu()

