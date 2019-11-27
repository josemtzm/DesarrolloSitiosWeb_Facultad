using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api_magenta.Models
{
    [Table("Client")]
    public class Client
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Message { get; set; }
    }
}
