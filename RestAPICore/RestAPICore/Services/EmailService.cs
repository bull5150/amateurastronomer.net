using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace RestAPICore.Services
{
    public class EmailService
    {
        public string AzureSendGridKey { get; set; }
        public async Task sendEmail(Models.EmailModel email)
        {
            string fromAddress = "AmateurAstronomer@AA.net";
            string SubjectName = "AA.Net Contact";
            var client = new SendGridClient(AzureSendGridKey);
            var msg = new SendGridMessage();

            msg.SetFrom(new EmailAddress(fromAddress, SubjectName));

            var recipients = new List<EmailAddress>
            {
                new EmailAddress("bull5150@hotmail.com")
            };
            msg.AddTos(recipients);

            msg.SetSubject(email.reason.ToUpper());

            //msg.AddContent(MimeType.Text, messages);  
            msg.AddContent(MimeType.Html, "From: " + email.fName + " " + email.lName +
                "<br/>@" + email.fromEmail +
                "<br/><br/>" + email.message);
            var response = await client.SendEmailAsync(msg);
        }
        public async Task sendReciept(Models.EmailModel email)
        {
            string fromAddress = "AmateurAstronomer@aa.net";
            string SubjectName = "AA.Net Contact";
            var client = new SendGridClient(AzureSendGridKey);
            var msg = new SendGridMessage();

            msg.SetFrom(new EmailAddress(fromAddress, SubjectName));

            var recipients = new List<EmailAddress>
            {
                new EmailAddress(email.fromEmail)
            };
            msg.AddTos(recipients);

            msg.SetSubject("DO NOT REPLY");
            msg.AddContent(MimeType.Html, "Thanks for the " + email.reason.ToUpper() +
                " email, I have recieved it.<br/>Jeff Heldridge");
            var response = await client.SendEmailAsync(msg);
        }
    }
}
