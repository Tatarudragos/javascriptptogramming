class Carte{
    constructor(titlu,autor,editura,anAparitie,nrPagini){
        this.titlu =titlu;
        this.autor =autor;
        this.editura =editura;
        this.anAparitie =anAparitie;
        this.nrPagini =nrPagini;

    }
    afiseazaTitlu(){
console.log(`Titlul este ${this.titlu}`)
    }
}