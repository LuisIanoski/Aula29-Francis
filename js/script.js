const textoNota = document.getElementById('textoNota');
const addBtn = document.getElementById('addBtn');
const limparBtn = document.getElementById('limparBtn');
const urgenteElement = document.getElementById('urgente');
const naoUrgente = document.getElementById('naoUrgente');
const urgenteCheck = document.getElementById('urgenteCheck');
let colorIndex = 0;
const coresPadrao = ['azul', 'verde', 'roxo']; 

function adicionarNota() {
    const noteText = textoNota.value.trim();
    const urgente = urgenteCheck.checked;

    if (!noteText) {
        alert("Digite uma nota antes de adicionar!");
        return;
    }

    const nota = document.createElement('div');
    nota.classList.add('note');

    const corFundo = coresPadrao[colorIndex];
    colorIndex = (colorIndex + 1) % coresPadrao.length;
    nota.classList.add(corFundo);

    if (urgente) {
        nota.classList.add('borda-vermelha');
    } else {
        nota.classList.add('borda-amarela');
    }

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remover";
    removeBtn.classList.add('remove-btn');
    removeBtn.onclick = () => nota.remove();

    const p = document.createElement('p');
    p.textContent = noteText;

    nota.appendChild(p);
    nota.appendChild(removeBtn);

    if (urgente) {
        urgenteElement.appendChild(nota);
    } else {
        naoUrgente.appendChild(nota);
    }

    textoNota.value = "";
    textoNota.focus();
}

function limparTudo() {
    urgenteElement.innerHTML = "";
    naoUrgente.innerHTML = "";
}

textoNota.addEventListener('keypress', e => {
    if (e.key === 'Enter') adicionarNota();
});
