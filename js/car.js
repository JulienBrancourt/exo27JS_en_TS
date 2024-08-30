export class Car {
    constructor(nom, modele, vitesse) {
        this.nom = nom;
        this.modele = modele;
        this.vitesse = vitesse;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get modele() {
        return this._modele;
    }
    set modele(value) {
        this._modele = value;
    }
    get vitesse() {
        return this._vitesse;
    }
    set vitesse(value) {
        this._vitesse = value;
    }
    accelerer() {
        this.vitesse += 10;
    }
    tourner() {
        this.vitesse -= 5;
    }
}
