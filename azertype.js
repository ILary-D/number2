

function affichetResultat( score, nbmotsproposés){
    // afficher le score
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


