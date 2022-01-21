using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ZooVrt.Models
{
    public class Zivotinja
    {
        [Key]
        public int ZivotinjaId {get; set;}
        public string ImeVrste {get; set;}
        public string TrenutnaKolicina {get; set;}

        [JsonIgnore]
        public ZooloskiVrt ZooloskiVrt {get; set;} //da zivotinja ima pokazivac na zoo
    }
}