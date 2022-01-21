using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ZooVrt.Models
{
    public class Direktor
    {
        [Key]
        public int DirektorId {get; set;}
        public string DirektorIme {get; set;}
        public string DirektorPrezime {get; set;}

        [JsonIgnore]
        public ZooloskiVrt ZooloskiVrt {get; set;} //da ima pokazivac na zoo
    }
}