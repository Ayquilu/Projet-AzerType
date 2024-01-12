console.log("Hello World");

const listeDePhrases = [
  "Pas de panique",
  "La vie, l'univers et le reste",
  "Merci pour le poisson",
];
const listeDeMots = ["Cachalot", "Pétunia", "Serviette"];



function afficherScore(score, total) {
  console.log("Votre score est de " + score + " sur " + total);
}

function choixJoueur() {
  let choix = prompt ("Voulez-vous jouer avec des phrases ou des mots?");
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Voulez-vous jouer avec des phrases ou des mots?");
  }
  return choix;
}

function boucleDeJeu (listePropositions) {
  let score = 0;
  for (let i = 0; i < listePropositions.length; i++) {
    let proposition = prompt("Entrez la proposition: " + listePropositions[i]);

    if (proposition === listePropositions[i]) {
      score++;
    }
  }
  return score;
}

function jeu () {
  let choix = choixJoueur();
  score = 0;
  let total = 0;
  if (choix === "phrases") {
    score = boucleDeJeu(listeDePhrases);
    total = listeDePhrases.length;
  } else if (choix === "mots") {
    score = boucleDeJeu(listeDeMots);
    total = listeDeMots.length;
  }
  afficherScore(score, total);
}

jeu();