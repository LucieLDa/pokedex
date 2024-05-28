export class Pokemon {
    readonly nom : string;
    readonly imageUrl : string;
    readonly description : string;

    constructor(nom: string, image : string, description : string){
        this.description = description;
        this.imageUrl = image;
        this.nom = nom;
    }
}