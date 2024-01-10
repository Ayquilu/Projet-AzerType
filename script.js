console.log("Hello World")

let listDeMots = ["Cachalot","Pétunia","Serviette"];
let score = 0;

let motUtilisateur = prompt("Entrez le mot: " + listDeMots[0]);

if (motUtilisateur === listDeMots[0]) {
    console.log("Bravo!");
    score++;
} else {
    console.log("Dommage!");
}

motUtilisateur = prompt("Entrez le mot: " + listDeMots[1]);

if (motUtilisateur === listDeMots[1]) {
    console.log("Bravo!");
    score++;
} else {       
    console.log("Dommage!");
}

motUtilisateur = prompt("Entrez le mot: " + listDeMots[2]);

if (motUtilisateur === listDeMots[2]) {
    console.log("Bravo!");
    score++;
} else {
    console.log("Dommage!");
}

console.log("Votre score est de " + score + " sur 3");

