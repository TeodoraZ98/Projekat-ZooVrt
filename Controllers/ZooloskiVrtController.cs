using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZooVrt.Models;

namespace ZooVrt.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ZooloskiVrtController : ControllerBase
    {
        public ContextKlasa Db; //pokazivac na dbcontext klasu
        public ZooloskiVrtController(ContextKlasa context)
        {
            Db = context;
        }

        //http://localhost:5001/ZooloskiVrt/vratiZooVrtove
        [HttpGet]
        [Route ("vratiZooVrtove")]
        public IEnumerable<ZooloskiVrt> VratiZooloskeVrtove()
        {
            var zooVrtovi = Db.ZooloskiVrtovi.Include(x=>x.Zivotinje).Include(y=>y.Direktor);
            return zooVrtovi.ToArray();
        }
        
        [HttpPost]
        [Route("dodajZivotinju/{idzoo}")]
        public void DodajZivotinju([FromBody] Zivotinja zivotinja,int idzoo)

        {

            var zoovrt = Db.ZooloskiVrtovi.Find(idzoo);

            zivotinja.ZooloskiVrt= zoovrt;

            if(zivotinja!=null){

                Db.Add(zivotinja);

                Db.SaveChanges();

            }

        }

        [HttpDelete]
        [Route("brisiDirektora/{id}")]
        public void BrisiDirektora(int id)
        {
            var direktor = Db.Direktori.Find(id);
            if(direktor!=null){
                Db.Remove(direktor);
                Db.SaveChanges();
            }
        }
    }
}