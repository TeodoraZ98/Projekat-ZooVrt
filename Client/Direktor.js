export class Direktor{
    constructor(id, ime, prezime){
        this.direktorId = id;
        this.direktorIme = ime;
        this.direktorPrezime = prezime;

        this.container = null;

    }


crtajDirektora(gde){
    this.container = document.createElement("div");
    this.container.className = "direktor";
    gde.appendChild(this.container);

    let labela = document.createElement("h3");
    labela.className = "labela-direktor-ime";
    labela.innerHTML = "Direktor ZooVrta: " + this.direktorIme + " "
                    + this.direktorPrezime;
    this.container.appendChild(labela);

    // labela = document.createElement("h3");
    // labela.className = "labela-direktor-prezime";
    // labela.innerHTML = " " +this.direktorPrezime;
    // this.container.appendChild(labela);

    }

}
