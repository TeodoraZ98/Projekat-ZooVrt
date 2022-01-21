
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ZooVrt.Models 
{
    public class ZooloskiVrt
    {
        [Key]
        public int ZooloskiVrtId {get; set;}
        public string Naziv {get; set;}
        public string Ulica {get; set;}
        public int Kapacitet {get; set;}
        public IList<Zivotinja> Zivotinje {get; set;}
        public IList<Direktor> Direktor {get; set;}
    }

   
}