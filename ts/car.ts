export class Car {
    private _nom: string;
    private _modele: string;
    private _vitesse: number;
    
    constructor(nom: string, modele: string, vitesse: number) {
        this.nom = nom;
        this.modele = modele;
        this.vitesse = vitesse;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get modele(): string {
        return this._modele;
    }
    public set modele(value: string) {
        this._modele = value;
    }
    public get vitesse(): number {
        return this._vitesse;
    }
    public set vitesse(value: number) {
        this._vitesse = value;
    }

    accelerer(): void {
        this.vitesse += 10;
    }

    tourner(): void {
        this.vitesse -= 5;
    }

}
