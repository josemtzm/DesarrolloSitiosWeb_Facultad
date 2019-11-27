using api_magenta.App_Data;
using api_magenta.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace api_magenta.Controllers.api
{
    public class ClientController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        [HttpGet]
        public IEnumerable<Client> Get()
        {
            return _db.Clients;
        }

        [HttpGet]
        public IHttpActionResult Get(int ID)
        {
            var client = _db.Clients.FirstOrDefault(c => c.ID == ID);
            if (client == null)
            {
                return NotFound();
            }
            return Ok(client);
        }

        [HttpPost]
        public IHttpActionResult Post([FromBody]Client clt)
        {
            try
            {
                Client clt_new = new Client
                {
                    FirstName = clt.FirstName,
                    LastName = clt.LastName,
                    Email = clt.Email,
                    Phone = clt.Phone,
                    Message = clt.Message
                };
                _db.Clients.Add(clt_new);
                _db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpPut]
        public IHttpActionResult Put([FromBody]Client clt)
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpDelete]
        public IHttpActionResult Delete(int ID)
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }
    }
}
