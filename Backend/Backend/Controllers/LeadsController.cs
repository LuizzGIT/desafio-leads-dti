using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeadsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LeadsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/leads?status=Invited
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lead>>> GetLeads([FromQuery] string? status)
        {
            if (string.IsNullOrEmpty(status))
                return await _context.Leads.ToListAsync();

            return await _context.Leads
                .Where(l => l.Status == status)
                .ToListAsync();
        }

        // POST: api/leads
        [HttpPost]
        public async Task<ActionResult<Lead>> CreateLead(Lead lead)
        {
            _context.Leads.Add(lead);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetLeads), new { id = lead.Id }, lead);
        }

        // PUT: api/leads/accept/5
        [HttpPut("accept/{id}")]
        public async Task<IActionResult> AcceptLead(int id)
        {
            var lead = await _context.Leads.FindAsync(id);
            if (lead == null) return NotFound();

            // aplica regra de desconto
            if (lead.Price > 500)
                lead.Price = lead.Price * 0.9m;

            lead.Status = "Accepted";

            await _context.SaveChangesAsync();

            // simula envio de e-mail 
            System.IO.File.AppendAllText("emails.txt", $"Lead {lead.Id} aceito. Email para vendas@test.com\n");

            return NoContent();
        }

        // PUT: api/leads/decline/5
        [HttpPut("decline/{id}")]
        public async Task<IActionResult> DeclineLead(int id)
        {
            var lead = await _context.Leads.FindAsync(id);
            if (lead == null) return NotFound();

            lead.Status = "Declined";
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
