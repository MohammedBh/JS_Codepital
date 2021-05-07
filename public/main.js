import { Patient, Maladie } from "./modules/class.js";

export let cimetiere = [];

let Marcus = new Patient("Marcus", "mal indenté", 100, [], "malade");
let Optimus = new Patient("Optimus", "unsave", 200, [], "malade");
let Sangoku = new Patient ("Sangoku","404", 80, [], "malade");
let DarthVader = new Patient("DarthVader", "azmatique", 110, [], "malade");
let Semicolon = new Patient("Semicolon", "syntaxError", 60, [], "malade");

export let malIndente = new Maladie("mal indenté", "ctrl+maj+f")
export let unsave = new Maladie("unsave", "saveOnFocusChange")
export let e404 = new Maladie("404", "CheckLinkRelation")
export let azmatique = new Maladie("azmatique", "ventoline")
export let syntaxError = new Maladie("syntaxError", "f12+doc")

let doctor = {
    nom: "Dr Frank",
    argent: 500,
    cabinet : [],
    diagnostique(patient) {
        if (patient.maladie == "mal indenté") {
            patient.traitement = malIndente.traitement
            console.log(`${this.nom} prescrit du ${malIndente.traitement} a ${patient.nom} `);
        } else if (patient.maladie == "unsave") {
            patient.traitement = unsave.traitement
            console.log(`${this.nom} prescrit du ${unsave.traitement} a ${patient.nom}`);
        } else if (patient.maladie == "404") {
            patient.traitement = e404.traitement
            console.log(`${this.nom} prescrit du ${e404.traitement} a ${patient.nom}`);
        } else if (patient.maladie == "azmatique") {
            patient.traitement = azmatique.traitement
            console.log(`${this.nom} prescrit du ${azmatique.traitement} a ${patient.nom}`);
        } else {
            console.log(`${this.nom} prescrit du ${syntaxError.traitement} a ${patient.nom}`);
        }
    },
    patientIn(patient) {
        this.cabinet.push(patient);
        console.log(`${patient.nom} rentre dans le cabinet`);
        console.log(`${patient.nom} est atteint de ${patient.maladie}`);
    },
    patientOut(patient) {
        patient.etatSante = "traitement";
        patient.argent -= 50;
        this.argent += 50;
        this.cabinet.pop();
        console.log(`${patient.nom} sort du cabinet`);
    }
}

let salleAttente = [Marcus, Optimus, Sangoku, DarthVader, Semicolon];
salleAttente.forEach(element => {
    doctor.patientIn(element);
    doctor.diagnostique(element);
    doctor.patientOut(element);
    element.goTo("pharmacie");
    element.takeCare();
    element.paye();
    salleAttente.splice(salleAttente.indexOf(element), 1);
});