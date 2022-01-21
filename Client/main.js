
import { Direktor } from "./Direktor.js";
import { Zivotinja } from "./zivotinja.js";
import { ZooloskiVrt } from "./zooloskiVrt.js";


// let zivotinja =new Zivotinja(1, "Zirafa");
// zivotinja.trenutno = 5;

// zivotinja.crtajZivotinju(document.body);

// let zoo1 = new ZooloskiVrt(1, "Zoo 1", "Ulica 1", 20);
// zoo1.dodajZivotinju(new Zivotinja(1, "Zirafa"));
// zoo1.dodajZivotinju(new Zivotinja(2, "Lav"));
// zoo1.dodajZivotinju(new Zivotinja(3, "Tigar"));
// zoo1.zivotinje[0].trenutno = 10;
// zoo1.zivotinje[1].trenutno = 15;
// zoo1.zivotinje[2].trenutno = 20;

// let zoo2 = new ZooloskiVrt(2, "Zoo 2", "Ulica 2", 30);
// zoo2.dodajZivotinju(new Zivotinja(4, "Zmija"));


// zoo1.crtajZooloskiVrt(document.body);
// zoo2.crtajZooloskiVrt(document.body);

const vratiZooURL = "https://localhost:5001/ZooloskiVrt/vratiZooVrtove";

function pribaviZooVrt(){
    fetch(vratiZooURL, {
        method: "GET"
    }).then(resp => resp.json())
    .then(zooloskiVrtovi => {
        zooloskiVrtovi.forEach(zooVrt => {
            let zv = new ZooloskiVrt(zooVrt.zooloskiVrtId, zooVrt.naziv,
                                    zooVrt.ulica, zooVrt.kapacitet);
            
            zooVrt.zivotinje.forEach(zivotinja=>{
                zv.dodajZivotinju(new Zivotinja(zivotinja.zivotinjaId,
                                                zivotinja.imeVrste,
                                                zivotinja.trenutnaKolicina));
            })
            zooVrt.direktor.forEach(dr=>{
                zv.postaviDirektora(new Direktor(dr.direktorId, dr.direktorIme, dr.direktorPrezime));
            })
            zv.crtajZooloskiVrt(document.body);
        });
    })
}

pribaviZooVrt();