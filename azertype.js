const listeMots = [ "cachalot","petunia","serviette"];
const listePhrases =["pas de panique !", "la vie, l'univers et le reste","merci pour le poisson "]
let score = 0;

let choix = prompt("veillez choisir la liste des: mots ou phrases ")

while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("veillez choisir la liste des: mots ou phrases ")
}

if (choix === "mots") {
    for(let i = 0; i < listeMots.length; i++){ 
    let mottape = prompt("entrez le mot " + listeMots[i]);
    if (mottape === listeMots[i]) {
        score +=1;   
    }
}
console.log("votre score est de : " + score+ " sur " +listeMots.length); 
} else{
    for(let i = 0; i < listePhrases.length; i++){ 
      let mottape = prompt("entrez la phrase : " + listePhrases[i]);
       if (mottape === listePhrases[i]) {
        score +=1;   
       }
   
    }
    console.log("votre score est de : " + score+ " sur " + listePhrases.length);
}

