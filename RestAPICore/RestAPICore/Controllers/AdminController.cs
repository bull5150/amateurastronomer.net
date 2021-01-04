using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestAPICore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPICore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        /// <summary>
        /// Gets perms for post page
        /// </summary>
        /// <returns></returns>
        /// <returns></returns>
        [HttpGet("")]
        public ActionResult<AdminModel> Get()
        {
            AdminModel admin = new AdminModel();
            admin.username = Services.CredentialService.userName;
            admin.password = Services.CredentialService.password;
            return admin;
        }
    }
}
