import { Zivotinja } from "./zivotinja.js";

export class ZooloskiVrt{
    constructor(id, naziv, ulica, kapacitet){
        this.zooloskiVrtId = id;
        this.naziv = naziv;
        this.ulica = ulica;
        this.kapacitet = kapacitet;
        this.zivotinje = [];
        this.direktor = [];

        this.container = null;
    }

    postaviDirektora(dir){
        this.direktor.push(dir);
    }
    dodajZivotinju(zivotinja)
    {
        this.zivotinje.push(zivotinja);
    }

    crtajZooloskiVrt(gde){
        this.container = document.createElement("div");
        this.container.className = "zoovrt";
        gde.appendChild(this.container);

/*
        //direktor
        let direktor = document.createElement("div");
        this.container.className = "direktor";
        gde.appendChild(direktor);


        let direktorPodaci = document.createElement("div");
        direktor.className = "direktor-podaci";
        direktor.appendChild(direktorPodaci);

        let smena = document.createElement("div");
        direktor.className = "smena";
        direktor.appendChild(smena);

        let direktorSlika = document.createElement("div");
        direktorPodaci.className = "direktor-slika";
        direktorPodaci.appendChild(direktorSlika);

        let direktorIme = document.createElement("div");
        direktorPodaci.className = "direktor-ime";
        direktorPodaci.appendChild(direktorIme);

        //direktorPodaci labele
        let labela = document.createElement("label");
        labela.innerHTML = "Ime";
        direktorPodaci.appendChild(labela);

*/
       



        //podaci
        let podaci = document.createElement("div");
        podaci.className = "podaci";
        this.container.appendChild(podaci);

        let naslov = document.createElement("h2");
        naslov.className = "naslov";
        naslov.innerHTML = this.naziv + " " + "ulica: " + this.ulica
                            + ", " + " kapacitet po vrsti: " + this.kapacitet;
        podaci.appendChild(naslov);

        let podaciZivotinje = document.createElement("div");
        podaciZivotinje.className = "podaci-zivotinje";
        podaci.appendChild(podaciZivotinje);


        let podaciDirektor = document.createElement("div");
        podaciDirektor.className = "podaci-direktor";
        podaci.appendChild(podaciDirektor);

        let forma = document.createElement("div");
        forma.className = "forma";
        this.container.appendChild(forma);

        let gornjaForma = document.createElement("div");
        gornjaForma.className = "gornja-forma";
        forma.appendChild(gornjaForma);

         //forma
         let labelaVrsta = document.createElement("label");
         labelaVrsta.innerHTML = "Vrsta";
         gornjaForma.appendChild(labelaVrsta);
 
         let vrstaInput = document.createElement("input");
         vrstaInput.className = "inputvrsta";
         gornjaForma.appendChild(vrstaInput);
 
         let labelaKolicina = document.createElement("label");
         labelaKolicina.innerHTML = "Kolicina";
         gornjaForma.appendChild(labelaKolicina);
 
         let kolicinaInput = document.createElement("input");
         kolicinaInput.className = "inputkolicina";
         kolicinaInput.type = "number";
         gornjaForma.appendChild(kolicinaInput);
 
         let dugme = document.createElement("button");
         dugme.innerHTML = "Dodaj životinju";
         dugme.onclick = (ev) => this.dodaj(zivotinje);
         gornjaForma.appendChild(dugme);

         
 
        
        let donjaForma = document.createElement("div");
        donjaForma.className = "donja-forma";
        forma.appendChild(donjaForma);

        
        //smena labele 
        let labelaIme = document.createElement("label");
        labelaIme.innerHTML = "Direktor: ";
        donjaForma.appendChild(labelaIme);


        let direktorSelekt = document.createElement("select");
        direktorSelekt.className = "selekt-ime";
        donjaForma.appendChild(direktorSelekt);

        // let labelaPrezime = document.createElement("label");
        // labelaPrezime.innerHTML = "Prezime";
        // donjaForma.appendChild(labelaPrezime);

        this.direktor.forEach((dr, index)=>{
            let opcija = document.createElement("option");
            opcija.className = "opcija";
            opcija.innerHTML = dr.direktorIme + " " + dr.direktorPrezime; //padajući meni sa imenima direktora kojeg biramo
            opcija.value = dr.direktorId; //pamtimo koji element liste smo izabrali
            direktorSelekt.appendChild(opcija);
        });

        // let prezimeSelekt = document.createElement("select");
        // prezimeSelekt.className = "selekt-prezime";
        // donjaForma.appendChild(prezimeSelekt);

        let dugmeS = document.createElement("button");
        dugmeS.innerHTML = "Smeni upravu";
        dugmeS.onclick = (ev) => this.klikSmeni();
        donjaForma.appendChild(dugmeS);

        dugme.onclick = (ev) => this.klikSmeni();


        let zivotinje = document.createElement("div");
        zivotinje.className = "zivotinje";
        podaciZivotinje.appendChild(zivotinje);

        this.zivotinje.forEach(zivotinja =>{
            zivotinja.crtajZivotinju(zivotinje);
        });
        let labelauprava = document.createElement("h3");
        labelauprava.innerHTML= "Uprava: ";
        podaciDirektor.appendChild(labelauprava);

        this.direktor.forEach((dir, index)=>{
            dir.crtajDirektora(podaciDirektor);
        });
       
        //crtanje popuna!
        let popune = this.container.querySelectorAll(".popuna");
        //let popune sadrzi niz elemenata (div) cija je klasa "popuna"
        //niz je zbog All u querySelectorAll
        this.zivotinje.forEach((z, index)=>{
            popune[index].style.flexGrow = z.trenutnaKolicina/this.kapacitet;
        });
    }

    // 1. uzmu podaci iz forme
    // 2. napravi fetch post metoda
    // 3. u body delu ide objekat zivotinja koja mora da bude json!
    // 4. u controlleru pravimo POST metodu
    //ponovno iscrtavanje


    klikSmeni()
    {

        let idKogBrisem = this.container.querySelector(".selekt-ime").value;
        for(let i = 0;i<this.direktor.length;i++){
            if(this.direktor[i].direktorId == idKogBrisem){
                this.direktor.splice(i,1);
            }
        }
        fetch("https://localhost:5001/ZooloskiVrt/brisiDirektora/" + idKogBrisem,{
            method:"DELETE"
        }).then(res=>res.text())
            .then(res=> alert("Direktor je obrisan!"));

        let podaciDirektor = this.container.querySelector(".podaci-direktor");
        podaciDirektor.innerHTML = '';

        let labelauprava = document.createElement("h3");
        labelauprava.innerHTML= "Uprava: ";
        podaciDirektor.appendChild(labelauprava);

        this.direktor.forEach((dir, index)=>{
            dir.crtajDirektora(podaciDirektor);
        });
    }

    dodaj(gdeDaCrtam){
        let vrsta = this.container.querySelector(".inputvrsta").value;
        let kolicina = parseInt(this.container.querySelector(".inputkolicina").value);

        let postoji = this.zivotinje.find(x=>x.imeVrste == vrsta);

        if(!postoji){
            let zivotinja = new Zivotinja(20,vrsta, kolicina);
            this.dodajZivotinju(zivotinja);
            
            zivotinja.crtajZivotinju(gdeDaCrtam);

            let zaBazu = ({
                            'imeVrste':vrsta,
                            'trenutnaKolicina' : kolicina.toString(),
                            });

            fetch("https://localhost:5001/ZooloskiVrt/dodajZivotinju/" + this.zooloskiVrtId,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(zaBazu)
            });
            alert("Dodata je zivotinja: " + vrsta);
             //opet azuriram crtanje popuna!
            let popune = this.container.querySelectorAll(".popuna");
            //let popune sadrzi niz elemenata (div) cija je klasa "popuna"
            //niz je zbog All u querySelectorAll
            this.zivotinje.forEach((z, index)=>{
            popune[index].style.flexGrow = parseInt(z.trenutnaKolicina)/this.kapacitet;


        });
        }
        else{
            alert("Zadata vrsta vec postoji!");
        }   
    }
}