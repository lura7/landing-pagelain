// Selecionar os elementos
const openModalButton = document.querySelector('#redes-button'); // Ajuste o seletor para corresponder ao seu botão
const closeButton = document.querySelector('.close-button');
const modal = document.querySelector('#redes');

// Função para abrir o modal
function openModal() {
    modal.style.display = 'flex'; // Alterar display para flex para mostrar o modal
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = 'none'; // Ocultar o modal
}

// Adicionar evento para abrir o modal
openModalButton.addEventListener('click', openModal);

// Adicionar evento para fechar o modal
closeButton.addEventListener('click', closeModal);

// Opcional: Fechar o modal quando clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
  // Funções para gerenciar mensagens de boas-vindas
  function showWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
      setTimeout(() => {
        welcomeMessage.classList.add('show');
      }, 500); // Ajuste o tempo conforme necessário
    }
  }
  
  // Funções utilitárias
  function copyDiscord() {
    const discordUsername = 'nanasmari';
    navigator.clipboard.writeText(discordUsername).then(() => {
      alert('User discord copiado para a área de transferência!');
    }).catch(err => {
      console.error('Erro ao copiar o User discord: ', err);
    });
  }
  
  // Configuração do JavaScript ao carregar a página
  document.addEventListener('DOMContentLoaded', function() {
  
    // Exibir mensagem de boas-vindas com animação
    showWelcomeMessage();
  
    // Adiciona a classe "blinking-cursor" após o último caractere de cada parágrafo
    const blinkingCursors = document.querySelectorAll('.blinking-cursor');
    blinkingCursors.forEach(cursor => {
      const textNode = cursor.parentNode.lastChild;
      if (textNode.nodeType === Node.TEXT_NODE) {
        textNode.data += ' ';
        const span = document.createElement('span');
        span.classList.add('blinking-cursor');
        textNode.parentNode.appendChild(span);
      }
    });
  });
  