//Seu JavaScript de validação aqui
// selecionar os itens
const menuItems = document.querySelectorAll('.menu__list__item');

// Adicionar um listener de evento para os itens
menuItems.forEach(item => {
    // Adicionar evento de mouseover para mudar a cor de fundo
    item.addEventListener('mouseover', () => {
        item.classList.add('hovered');
    });

    // Adicionar para restaurar a cor de fundo original
    item.addEventListener('mouseout', () => {
        item.classList.remove('hovered');
    });
});

// validando o formulário antes de enviar
function validarFormulario() {
    // Obter os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    // Validando os campos  preenchidos
    if (nome.trim() === '' || email.trim() === '' || assunto.trim() === '' || mensagem.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Valida o formato do e-mail utilizando uma expressão regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    // se o formulario estiver ok o formulário é enviado
    return true;
}

// Adicionar um event listener para o evento 'submit' do formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    // Impedir o envio padrão do formulário
    event.preventDefault();
    
    // Chamar a função para validar o formulário
    if (validarFormulario()) {
        // Se o formulário for válido, enviar os dados para o servidor
        this.submit();
    }
});
