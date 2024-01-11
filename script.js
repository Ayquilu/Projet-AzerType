console.log("Hello World");

const listDePhrases = [
  "Pas de panique",
  "La vie, l'univers et le reste",
  "Merci pour le poisson",
];
const listDeMots = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;

let userPrompt = prompt("Voulez-vous jouer avec des phrases ou des mots?");
while (userPrompt !== "mots" && userPrompt !== "phrases") {
  userPrompt = prompt("Voulez-vous jouer avec des phrases ou des mots?");
}

if (prompt === "phrases") {
  for (let i = 0; i < 3; i++) {
    let phraseUtilisateur = prompt("Entrez la phrase: " + listDePhrases[i]);

    if (phraseUtilisateur === listDePhrases[i]) {
      score++;
    }
  }
  console.log("Votre score est de " + score + "sur " + listDePhrases.length);
} else if (prompt === "mots") {
  for (let i = 0; i < 3; i++) {
    let motUtilisateur = prompt("Entrez le mot: " + listDeMots[i]);

    if (motUtilisateur === listDeMots[i]) {
      score++;
    }
  }
  console.log("Votre score est de " + score + "sur " + listDeMots.length);
}
