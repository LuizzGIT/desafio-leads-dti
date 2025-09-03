using System;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }
    
        public DbSet<Lead> Leads { get; set; }  // Cria a minha tabela no meu bd
}
