//const etudiants = [13, 15, 16];
//console.log(etudiants);
//console.log(etudiants[0]);

//etudiants[1] = 20;
//console.log(etudiants);
//let etudiantsNoms = ["Jean", "Paul", "Kaya"];
//console.log(etudiantsNoms[2]);
//let mixedArray = [13, "Jean", true, 15.5];
//console.log(mixedArray);
//let moyenneSection = (etudiants[0] + etudiants[1] + etudiants[2] / 3);
//console.log("la moyenne de la section est de:" + moyenneSection);
//let etudiantMatieres = [
//   [12, 15, 16],
//    [14, 15, 17],
//    [15, 16, 17],
//];
//console.log(etudiantMatieres);
//console.log(etudiantMatieres[1]);
//console.log(etudiantMatieres[1][0]);
//let etudiants = [12, 14, 13, 14, 15, 1, 16, 17, 10, 9, 8, 7, 5, 7, 8, 4, 6, 22, 11, 47, ];
//let somme = 0;
//for (let i = 0; i < etudiants.length; i++) {
//    console.log(etudiants[i]);
//}
//const moyenne = somme / etudiants.length;
//console.log(moyenne);
//let etudiant = [
//  [12, 15, 11, 10],
// [15, 13, 15, 18],
// [10, 12, 10, 11],
//];
//let moyenneClasse = 0;
//for (let i = 0; i < 3; i++) {
//  let moyenneEtudiant = 0;

// for (let j = 0; j < 4; j++) {
//     moyenneEtudiant += etudiant[i][j];
// }

//  moyenneEtudiant /= 4;
//  moyenneClasse += moyenneEtudiant;

//}
//moyenneClasse /= 3;
//console.log(moyenneClasse);
//let notes = [12, 14, 8];
//notes.shift();
//console.log(notes);
//notes.unshift();
///notes.splice(1, 2);
///const isInArray = notes.includes(8);
//console.log(isInArray);
//const index = notes.indexOf(8);
//console.log(index);
//let user = {
// firstname: "Roukaya",
// lastname: "ZETCHI",
// age: "27",
// email: "zetchi.roukaya@gmail.com",
// password: "****",
// isAdmin: false,
// hobbies: ["coding", "swimming"],
// fullname: {
// firstname: "Roukaya",
//  lastname: "ZETCHI",
//}

//};
//console.log(user);
//console.log(user.firstname);
//console.log(user.lastname);
//console.log(user.age);
//console.log(user.email);
//console.log(user.isAdmin);
//user.email = "dz";
//console.log(user.email);
//console.log(user.hobbies[0]);
//console.log(user.fullname.firstname);
//let users = [{
//age: 21,
// email: "kemmounramzy@gmail.com",
//  password: "**",
//  isAdmin: false,
// hobbies: ["coding", "reading", "gaming"],
// fullname: {
// firstName: "zizou",
// lastName: "zizi",
// },
// },
// {
//  age: 21,
// email: "kemmounramzy@gmail.com",
//  password: "**",
// isAdmin: false,
//  hobbies: ["coding", "reading", "gaming"],
//  fullname: {
//  firstName: "chafik",
//  lastName: "Rahmani",
// },
//},
// {
// age: 21,
// email: "kemmounramzy@gmail.com",
//  password: "**",
//  isAdmin: false,
//  hobbies: ["coding", "reading", "gaming"],
//  fullname: {
//   firstName: "kaya",
//  lastName: "RR",
// },
//  },
//];

//console.log(users[2].fullname.firstName);
let tab = [5, 4, 8, 9, 11, 80, 50, 111];
let max = 5;
for (let i = 0; tab.length; i++) {
    if (tab[i] > max) {
        max = tab[i];
    }

}

console.log(max);