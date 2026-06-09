/**
 * Carrinho de Compras
 * Lógica de adição, remoção e totalização de produtos.
 */

// ===================================================
// ESTADO DA APLICAÇÃO
// ===================================================

/** @type {number} Total acumulado dos produtos no carrinho */
let totalGeral = 0;

// ===================================================
// REFERÊNCIAS AO DOM
// ===================================================

const form = document.getElementById('product-form');
const productSelect = document.getElementById('produto');
const quantityInput = document.getElementById('quantidade');
const cartList = document.getElementById('cart-list');
const totalDisplay = document.getElementById('valor-total');
const feedbackEl = document.getElementById('form-feedback');
const clearBtn = document.getElementById('btn-limpar');

// ===================================================
// INICIALIZAÇÃO
// ===================================================

/** Inicializa a aplicação ao carregar a página */
function init() {
  limpar();
  form.addEventListener('submit', handleSubmit);
  clearBtn.addEventListener('click', limpar);
}

// ===================================================
// HANDLERS DE EVENTOS
// ===================================================

/**
 * Intercepta o submit do formulário e adiciona o produto ao carrinho.
 * @param {SubmitEvent} event
 */
function handleSubmit(event) {
  event.preventDefault();

  const quantidade = parseInt(quantityInput.value, 10);

  if (!validarQuantidade(quantidade)) return;

  adicionar(quantidade);
}

// ===================================================
// VALIDAÇÃO
// ===================================================

/**
 * Valida o valor de quantidade inserido pelo usuário.
 * @param {number} quantidade
 * @returns {boolean} true se válido, false caso contrário
 */
function validarQuantidade(quantidade) {
  if (isNaN(quantidade) || quantidade <= 0) {
    exibirFeedback('Insira uma quantidade válida (mínimo 1).', 'error');
    quantityInput.classList.add('error');
    quantityInput.focus();
    return false;
  }

  quantityInput.classList.remove('error');
  return true;
}

// ===================================================
// LÓGICA DO CARRINHO
// ===================================================

/**
 * Extrai nome e valor unitário a partir do value do <option> selecionado.
 * Formato esperado: "Nome do Produto|valorNumerico"
 * @returns {{ nome: string, valorUnitario: number }}
 */
function obterDadosProduto() {
  const [nome, valor] = productSelect.value.split('|');
  return {
    nome: nome.trim(),
    valorUnitario: parseFloat(valor),
  };
}

/**
 * Formata um número como moeda brasileira (BRL).
 * @param {number} valor
 * @returns {string} Ex.: "R$ 1.400,00"
 */
function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

/**
 * Adiciona um produto ao carrinho com base nos inputs do formulário.
 * @param {number} quantidade
 */
function adicionar(quantidade) {
  const { nome, valorUnitario } = obterDadosProduto();
  const subtotal = quantidade * valorUnitario;

  totalGeral += subtotal;

  renderizarItemCarrinho({ nome, quantidade, subtotal });
  atualizarTotal();
  limparCampoQuantidade();
  exibirFeedback(`${quantidade}x ${nome} adicionado ao carrinho!`, 'success');
}

/**
 * Cria e insere um novo item na lista do carrinho.
 * @param {{ nome: string, quantidade: number, subtotal: number }} item
 */
function renderizarItemCarrinho({ nome, quantidade, subtotal }) {
  // Remove o estado vazio se existir
  const emptyState = cartList.querySelector('.cart-empty');
  if (emptyState) emptyState.remove();

  const li = document.createElement('li');
  li.classList.add('cart-item');
  li.setAttribute('role', 'listitem');

  li.innerHTML = `
    <span class="qty" aria-label="${quantidade} unidades">${quantidade}x</span>
    <span class="name">${nome}</span>
    <span class="price" aria-label="${formatarMoeda(subtotal)}">${formatarMoeda(subtotal)}</span>
  `;

  cartList.appendChild(li);
}

/**
 * Atualiza o valor total exibido no rodapé do carrinho.
 */
function atualizarTotal() {
  totalDisplay.textContent = formatarMoeda(totalGeral);
}

/**
 * Limpa todos os produtos do carrinho e zera o total.
 */
function limpar() {
  totalGeral = 0;
  cartList.innerHTML = '';
  atualizarTotal();
  renderizarCarrinhoVazio();
  limparCampoQuantidade();
  limparFeedback();
}

/**
 * Exibe a mensagem de carrinho vazio.
 */
function renderizarCarrinhoVazio() {
  const p = document.createElement('p');
  p.classList.add('cart-empty');
  p.textContent = 'Nenhum produto adicionado ainda.';
  cartList.appendChild(p);
}

/**
 * Reseta o campo de quantidade para o valor padrão.
 */
function limparCampoQuantidade() {
  quantityInput.value = '';
  quantityInput.classList.remove('error');
}

// ===================================================
// FEEDBACK VISUAL
// ===================================================

/** @type {ReturnType<typeof setTimeout> | null} */
let feedbackTimeout = null;

/**
 * Exibe uma mensagem de feedback e a remove automaticamente após 3 segundos.
 * @param {string} mensagem
 * @param {'success' | 'error'} tipo
 */
function exibirFeedback(mensagem, tipo) {
  if (feedbackTimeout) clearTimeout(feedbackTimeout);

  feedbackEl.textContent = mensagem;
  feedbackEl.className = `form-feedback ${tipo}`;

  feedbackTimeout = setTimeout(limparFeedback, 3000);
}

/**
 * Remove a mensagem de feedback exibida.
 */
function limparFeedback() {
  feedbackEl.textContent = '';
  feedbackEl.className = 'form-feedback';
}

// ===================================================
// BOOTSTRAP
// ===================================================

init();
