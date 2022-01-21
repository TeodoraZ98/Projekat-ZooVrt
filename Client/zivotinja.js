export class Zivotinja{
    constructor(id, vrsta, trenutno){

        this.zivotinjaId = id; // ime atributa pisemo isto kao u Web Api modelu,
                              // samo pocetno malo slovo
        if(vrsta){
            this.imeVrste = vrsta;
        }
        else{
            this.imeVrste = "DEFAULT";

        }
        this.trenutnaKolicina = trenutno;

        this.container = null;
    }

    crtajZivotinju(gde){
        this.container = document.createElement("div");
        this.container.className = "zivotinja";
        gde.appendChild(this.container);

        let labela = document.createElement("label");
        labela.className = "labela-zivotinja"; // 
        labela.innerHTML = this.imeVrste + 
                            " - " + this.trenutnaKolicina + ": ";
        this.container.appendChild(labela);

        let status = document.createElement("div");
        status.className = "zivotinja-status";
        this.container.appendChild(status);

        let popuna = document.createElement("div");
        popuna.className = "popuna";
        //popuna.style.flexGrow = 1/2; //ne moze jer nemam kapacitet
        status.appendChild(popuna);
    }
}