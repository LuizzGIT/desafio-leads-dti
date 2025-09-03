const LeadCard = ({ lead, variant, onAccept, onDecline }) => {

  // Função para formatar a data para um formato mais legível
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    // Container principal do card com estilos do Tailwind CSS
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-2xl">
      <div className="flex items-start space-x-4">
        {/* Círculo com a inicial do nome */}
        <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {lead.firstName.charAt(0)}
        </div>

        <div className="flex-grow">
          {/* Nome e data */}
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-800">{lead.firstName}</h3>
          </div>
          <p className="text-sm text-gray-500">{formatDate(lead.dateCreated)}</p>

          {/* Informações do Job: Bairro, Categoria e ID */}
          <div className="flex items-center space-x-4 text-gray-600 mt-3 text-sm">
            <div className="flex items-center space-x-1">
              {/* Ícone de Localização (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>{lead.suburb}</span>
            </div>
            <div className="flex items-center space-x-1">
              {/* Ícone de Categoria (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              <span>{lead.category}</span>
            </div>
            <span>Job ID: {lead.id}</span>
          </div>

          {/* Se a variante for "Accepted", mostra email e telefone */}
          {variant === 'accepted' && (
            <div className="flex items-center space-x-4 text-blue-600 mt-3 text-sm font-medium">
              <div className="flex items-center space-x-1">
                {/* Ícone de Telefone (SVG) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>{lead.phoneNumber}</span>
              </div>
              <div className="flex items-center space-x-1">
                {/* Ícone de Email (SVG) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>{lead.email}</span>
              </div>
            </div>
          )}

          {/* Descrição do trabalho */}
          <p className="mt-3 text-gray-700">{lead.description}</p>
        </div>
      </div>

      {/* Linha divisória e seção inferior */}
      <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
        {/* Se a variante for "Invited", mostra os botões Aceitar/Recusar */}
        {variant === 'invited' ? (
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onAccept(lead.id)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => onDecline(lead.id)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md transition-colors"
            >
              Decline
            </button>
          </div>
        ) : (
          // Se não for "Invited", deixa um espaço vazio para manter o alinhamento
          <div></div>
        )}
        {/* Preço do Lead */}
        <div className="text-right">
          <p className="text-lg font-bold text-gray-800">${lead.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">Lead Invitation</p>
        </div>
      </div>
    </div>
  );
};

export default LeadCard;
