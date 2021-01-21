using Microsoft.AspNetCore.Mvc;


namespace RestAPICore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        Services.EmailService emailService = new Services.EmailService()
        {
            AzureSendGridKey = Services.CredentialService.sendGridKey
        };
        /// <summary>
        /// Post to send an email
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("")]
        public ActionResult<string> sendEmail(Models.EmailModel email)
        {
            emailService.sendEmail(email).GetAwaiter();
            if (email.reciept == "yes")
            {
                emailService.sendReciept(email).GetAwaiter();
            }
            return "success";
        }
    }
}
