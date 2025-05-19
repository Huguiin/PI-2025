let idAtual = 1;

function adicionarProduto() {
  const nome = document.getElementById('nome').value;
  const categoria = document.getElementById('categoria').value;
  const preco = document.getElementById('preco').value;
  const marca = document.getElementById('marca').value;

  if (!nome || !categoria || !preco || !marca) return;

  const tabela = document.getElementById('corpo-tabela');
  const linha = document.createElement('tr');

  linha.innerHTML = `
    <td>${idAtual}</td>
    <td>${nome}</td>
    <td>${categoria}</td>
    <td>${marca}</td>
    <td>${preco}</td>
    <td>
      <button class="btn-small" onclick="editarProduto(this)">Editar</button>
      <button class="btn-small" onclick="removerProduto(this)">Remover</button>
    </td>
  `;

  tabela.appendChild(linha);
  idAtual++;

  document.getElementById('nome').value = '';
  document.getElementById('categoria').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('marca').value = '';
}

function removerProduto(botao) {
  const linha = botao.parentElement.parentElement;
  linha.remove();
}

function editarProduto(botao) {
  const linha = botao.parentElement.parentElement;
  const colunas = linha.querySelectorAll('td');

  const novoNome = prompt("Editar nome:", colunas[1].innerText);
  const novaCategoria = prompt("Editar categoria:", colunas[2].innerText);
  const novaMarca = prompt("Editar marca:", colunas[3].innerText);
  const novoPreco = prompt("Editar preço:", colunas[4].innerText);

  if (novoNome && novaCategoria && novaMarca && novoPreco) {
    colunas[1].innerText = novoNome;
    colunas[2].innerText = novaCategoria;
    colunas[3].innerText = novaMarca;
    colunas[4].innerText = novoPreco;
  }
}