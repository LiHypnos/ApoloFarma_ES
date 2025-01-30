// Função para exibir a mensagem de sucesso no modal
function mostrarMensagem() {
    // Verifica se todos os campos obrigatórios estão preenchidos
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const endereco = document.getElementById('endereco').value;
    const numeroCartao = document.getElementById('numero_cartao').value;
    const titular = document.getElementById('titular').value;
    const dataValidade = document.getElementById('data_validade').value;
    const cvv = document.getElementById('cvv').value;

    if (nome && cpf && email && senha && endereco && numeroCartao && titular && dataValidade && cvv) {
        // Exibe o modal de sucesso
        const modal = document.getElementById('modal-sucesso');
        modal.style.display = 'block';
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal-sucesso');
    modal.style.display = 'none';
}

// Função para voltar à página anterior
function voltar() {
    window.history.back();
}

// Fecha o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
    const modal = document.getElementById('modal-sucesso');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}