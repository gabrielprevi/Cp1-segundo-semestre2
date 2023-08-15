const adicionarBtn = document.getElementById('adicionar');
const descricaoInput = document.getElementById('descricao');
const autorInput = document.getElementById('autor');
const departamentoInput = document.getElementById('departamento');
const importanciaInput = document.getElementById('importancia');
const listaTarefas = document.getElementById('lista-tarefas');
const gerarListaImportanciaBtn = document.getElementById('gerar-lista-importancia');

const tarefas = [];

adicionarBtn.addEventListener('click', () => {
  const descricao = descricaoInput.value;
  const autor = autorInput.value;
  const departamento = departamentoInput.value;
  const importancia = importanciaInput.value;

  const novaTarefa = {
    descricao,
    autor,
    departamento,
    importancia
  };

  tarefas.push(novaTarefa);
  renderizarTarefas();

  descricaoInput.value = '';
  autorInput.value = '';
  departamentoInput.value = '';
  importanciaInput.value = '';
});

function renderizarTarefas() {
  const tbody = document.querySelector('#lista-tarefas tbody');
  tbody.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${tarefa.descricao}</td>
      <td>${tarefa.autor}</td>
      <td>${tarefa.departamento}</td>
      <td>${tarefa.importancia}</td>
      <td><button onclick="removerTarefa(${index})">Concluída</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function removerTarefa(index) {
  tarefas.splice(index, 1);
  renderizarTarefas();
}