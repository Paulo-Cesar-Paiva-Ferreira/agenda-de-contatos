const form = document.getElementById('agenda');
const contatos = [];

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();
    adicionaLinha();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O nome de contato: ${inputNomeContato.value} já foi inserido tente outro.`);
    } else {
        contatos.push(inputNomeContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
};
