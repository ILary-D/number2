function afficherproposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition;
}

function afficherResultat(score, total) {
    let spanScore = document.querySelector(".zoneScore span");
    spanScore.textContent = `${score} / ${total}`;
}

/* ---------------------------
   VALIDATION
----------------------------*/

function validerNom(nom) {
    if (nom.length < 2) {
        throw new Error("Le nom est trop court.");
    }
}

function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

    if (!emailRegExp.test(email)) {
        throw new Error("L'email n'est pas correct.");
    }
}

/* ---------------------------
   AFFICHAGE EMAIL
----------------------------*/

function afficheremail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score AzerType&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site AzerType !`;

    location.href = mailto;
}

/* ---------------------------
   GESTION EMAIL + ERREURS
----------------------------*/

function gererEmail(scoreemail) {
    try {
        let nom = document.getElementById("nom").value;
        let email = document.getElementById("email").value;

        validerNom(nom);
        validerEmail(email);

        afficherMessageErreur("");

        afficheremail(nom, email, scoreemail);

    } catch (erreur) {
        afficherMessageErreur(erreur.message);
    }
}

/* ---------------------------
   MESSAGE ERREUR POPUP
----------------------------*/

function afficherMessageErreur(message) {
    let spanErreur = document.getElementById("erreurMessage");

    if (!spanErreur) {
        let popup = document.querySelector(".popup");
        spanErreur = document.createElement("span");
        spanErreur.id = "erreurMessage";
        popup.append(spanErreur);
    }

    spanErreur.innerText = message;
}

/* ---------------------------
   JEU PRINCIPAL
----------------------------*/

function lancerJeu() {
    let score = 0;
    let i = 0;
    let listeproposition = listeMots;

    let bouton = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");

    afficherproposition(listeproposition[i]);
    afficherResultat(score, i);

    /* Validation mot */
    bouton.addEventListener("click", () => {
        if (inputEcriture.value === listeproposition[i]) {
            score++;
        }

        i++;

        inputEcriture.value = "";

        if (listeproposition[i] === undefined) {
            afficherproposition("Le jeu est fini");
            bouton.disabled = true;
            return;
        }

        afficherproposition(listeproposition[i]);
        afficherResultat(score, i);
    });

    /* Choix mots / phrases */
    let listbtnradio = document.querySelectorAll(".optionSource input");

    for (let index = 0; index < listbtnradio.length; index++) {
        listbtnradio[index].addEventListener("change", (event) => {

            if (event.target.value === "1") {
                listeproposition = listeMots;
            } else {
                listeproposition = listePhrases;
            }

            i = 0;
            score = 0;

            afficherproposition(listeproposition[i]);
            afficherResultat(score, i);
        });
    }

    /* POPUP PARTAGE */
    let boutonPartager = document.querySelector(".zonePartage button");
    let popupBackground = document.querySelector(".popupBackground");

    boutonPartager.addEventListener("click", () => {
        popupBackground.classList.add("active");
    });

    /* FORMULAIRE */
    let form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let scoreemail = `${score} / ${i}`;

        gererEmail(scoreemail);
    });

    afficherResultat(score, i);
}

lancerJeu();