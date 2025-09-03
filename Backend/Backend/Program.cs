using Microsoft.EntityFrameworkCore;
using Backend.Models;

var builder = WebApplication.CreateBuilder(args);

//  CORREÇÃO DO CORS 
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        // Esta linha faz o seu frontend conversar com back
        policy.WithOrigins("http://localhost:5173") 
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
//  FIM DA CORREÇÃO DO CORS 

// Pega a sua string de conexão do ficheiro appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Adiciona o serviço do DbContext, configurando-o para usar SQL Server 
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString));

// Adiciona o serviço dos controllers
builder.Services.AddControllers();

var app = builder.Build();

// --- ATIVAR A POLÍTICA DE CORS ---
app.UseCors("AllowReactApp");

//middlewares
app.MapControllers();
app.Run();