// O endereço base da sua API .NET que está rodando
const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Busca leads do backend, opcionalmente filtrando por status.
 * @param {string} status - O status para filtrar ('Invited', 'Accepted', etc.)
 * @returns {Promise<Array>} - Uma promessa que resolve para a lista de leads.
 */
export const getLeads = async (status) => {
    const response = await fetch(`${API_BASE_URL}/leads?status=${status}`);
    if (!response.ok) {
        throw new Error('Não foi possível buscar os leads.');
    }
    return response.json();
};

/**
 * Atualiza o status de um lead para "Accepted".
 * @param {number} id - O ID do lead a ser aceito.
 * @returns {Promise<Response>}
 */
export const acceptLead = async (id) => {
    const response = await fetch(`${API_BASE_URL}/leads/accept/${id}`, {
        method: 'PUT',
    });
    if (!response.ok) {
        throw new Error('Não foi possível aceitar o lead.');
    }
    return response;
};

/**
 * Atualiza o status de um lead para "Declined".
 * @param {number} id - O ID do lead a ser recusado.
 * @returns {Promise<Response>}
 */
export const declineLead = async (id) => {
    const response = await fetch(`${API_BASE_URL}/leads/decline/${id}`, {
        method: 'PUT',
    });
    if (!response.ok) {
        throw new Error('Não foi possível recusar o lead.');
    }
    return response;
};
