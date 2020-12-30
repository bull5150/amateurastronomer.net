using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPICore.Models
{
    public class EmailModel
    {
        public string fromEmail { get; set; }
        public string message { get; set; }
        public string fName { get; set; }
        public string lName { get; set; }
        public string reason { get; set; }
        public string reciept { get; set; }
        public string company { get; set; }
    }
}
