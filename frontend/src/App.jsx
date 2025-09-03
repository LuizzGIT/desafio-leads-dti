import { useState, useEffect } from 'react';
import LeadCard from './LeadCard.jsx'; 
import { getLeads, acceptLead, declineLead } from './apiService.js'; 

function App() {
  // Estado para guardar a lista de leads de cada aba
  const [invitedLeads, setInvitedLeads] = useState([]);
  const [acceptedLeads, setAcceptedLeads] = useState([]);

  // Estado para controlar qual aba está ativa no momento
  const [activeTab, setActiveTab] = useState('invited');

  // Estado para feedback ao usuário
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar os dados da API
  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError(null);
      // Busca os leads de cada categoria em paralelo para ser mais rápido
      const [invitedData, acceptedData] = await Promise.all([
        getLeads('Invited'),
        getLeads('Accepted')
      ]);
      setInvitedLeads(invitedData);
      setAcceptedLeads(acceptedData);
    } catch (err) {
      setError('Falha ao carregar os leads. Verifique se a API está a rodar.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  // Função para lidar com o clique no botão "Accept"
  const handleAccept = async (id) => {
    try {
      await acceptLead(id);
      fetchLeads(); // busca os leads para atualizar a tela
    } catch (error) {
      console.error('Erro ao aceitar lead:', error);
      setError('Não foi possível aceitar o lead.');
    }
  };

  // Função para lidar com o clique no botão Decline
  const handleDecline = async (id) => {
    try {
      await declineLead(id);
      fetchLeads(); // busca os leads para atualizar a tela
    } catch (error) {
      console.error('Erro ao recusar lead:', error);
      setError('Não foi possível recusar o lead.');
    }
  };

  // Funções para trocar de aba
  const showInvited = () => setActiveTab('invited');
  const showAccepted = () => setActiveTab('accepted');

  // Estilos CSS dinâmicos para as abas 
  const invitedTabClass = activeTab === 'invited' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';
  const acceptedTabClass = activeTab === 'accepted' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto p-4 md:p-8">
        {/* Abas de Navegação */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button onClick={showInvited} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${invitedTabClass}`}>
              Invited
            </button>
            <button onClick={showAccepted} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${acceptedTabClass}`}>
              Accepted
            </button>
          </nav>
        </div>

        {/* Conteúdo Principal */}
        <div className="mt-8">
          {/* Mostra mensagem de carregando */}
          {loading && <p className="text-center text-gray-500">Carregando leads...</p>}
          
          {/* Mostra mensagem de erro */}
          {error && <p className="text-center text-red-500 bg-red-100 p-4 rounded-md">{error}</p>}
          
          {/* Conteúdo da Aba "Invited" */}
          {activeTab === 'invited' && !loading && (
            <div className="space-y-4">
              {invitedLeads.length > 0 ? (
                invitedLeads.map(lead => (
                  <LeadCard key={lead.id} lead={lead} variant="invited" onAccept={handleAccept} onDecline={handleDecline} />
                ))
              ) : (
                <p className="text-center text-gray-500">Nenhum novo convite de lead.</p>
              )}
            </div>
          )}

          {/* Conteúdo da Aba "Accepted" */}
          {activeTab === 'accepted' && !loading && (
            <div className="space-y-4">
              {acceptedLeads.length > 0 ? (
                acceptedLeads.map(lead => (
                  <LeadCard key={lead.id} lead={lead} variant="accepted" />
                ))
              ) : (
                <p className="text-center text-gray-500">Nenhum lead aceito ainda.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;