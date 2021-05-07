import { cimetiere, malIndente, unsave, e404, azmatique, syntaxError } from "../main.js";

export class Patient {
    constructor(nom, maladie, argent, poche, etatSante, traitement) {
        this.nom = nom,
        this.maladie = maladie,
        this.argent = argent,
        this.poche = poche,
        this.etatSante = etatSante,
        this.traitement = traitement
    }
    goTo(depart) {
        console.log(`${this.nom} se deplace vers ${depart}`);
    }
    
    takeCare() {
        if (this.traitement == "ctrl+maj+f") {
            let medicament = 60;
            console.log(`Le traitement de ${this.nom} est ${malIndente.traitement} et coute ${medicament}€.`);
            this.argent -= medicament;
        } else if (this.traitement == "saveOnFocusChange") {
            let medicament = 100;
            console.log(`Le traitement de ${this.nom} est ${unsave.traitement} et coute ${medicament}€.`);
            this.argent -= medicament;
        } else if (this.traitement == "CheckLinkRelation") {
            let medicament = 35;
            console.log(`Le traitement de ${this.nom} est ${e404.traitement} et coute ${medicament}€.`);
            this.argent -= medicament;
        } else if (this.traitement == "Ventoline") {
            let medicament = 40;
            console.log(`Le traitement de ${this.nom} est ${azmatique.traitement} et coute ${medicament}€.`);
            this.argent -= medicament;
        } else {
            let medicament=20;
            console.log(`Le traitement de ${this.nom} est ${syntaxError.traitement} et coute ${medicament}€.`);
            this.argent -= medicament;
        }
    }
    
    paye() {
        if (this.argent <= 0 ) {
            cimetiere.push(this.nom);
            this.etatSante = "mort"
            console.log(`${this.nom} n'a plus d'argent, il est mort, il fini au cimetiere !`);
        } else {
            this.etatSant = "guéri"
            console.log(`${this.nom} a assez d'argent, il est guéri !`);
        }
    }
}

export class Maladie {
    constructor(nom, traitement) {
        this.nom = nom;
        this.traitement = traitement;
    }
}