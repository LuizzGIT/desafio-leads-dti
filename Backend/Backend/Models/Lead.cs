using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Lead
    {
        [Key]
        public int Id { get; set; }  // Identificador único

        [Required]
        public string FirstName { get; set; } = string.Empty; // Nome 

        public string LastName { get; set; } = string.Empty;  // Só aparece em Accepted

        [Required]
        public DateTime DateCreated { get; set; } = DateTime.Now; // Data de criação

        public string Suburb { get; set; }  = string.Empty;   // Bairro
        public string Category { get; set; } = string.Empty;  // Categoria
        public string Description { get; set; }  = string.Empty;// Descrição
        public decimal Price { get; set; }      // Preço

        // Campos extras que aparecem na aba Accepted
        public string PhoneNumber { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;

        // Status: Invited, Accepted ou Declined
        [Required]
        public string Status { get; set; } = "Invited";
    }
}
