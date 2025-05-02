let saldo = 200.0;
const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tênis", preco: 120 },
  { nome: "Calça", preco: 80 },
  { nome: "Boné", preco: 30 },
  { nome: "Jaqueta", preco: 150 },
  { nome: "Meias", preco: 20 },
];

function renderizarProdutos() {
  const listaProdutos = document.getElementById("product-list");
  listaProdutos.innerHTML = "";
  produtos.forEach((produto, index) => {
    const item = document.createElement("div");
    item.className = "product-item";
    item.innerHTML = `
      <input type="checkbox" id="produto-${index}" data-preco="${produto.preco}">
      <label for="produto-${index}">${produto.nome} - R$${produto.preco.toFixed(2)}</label>
    `;
    listaProdutos.appendChild(item);
  });
}

function calcularTotal() {
  const checkboxes = document.querySelectorAll(".product-item input[type='checkbox']");
  let total = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      total += parseFloat(checkbox.getAttribute("data-preco"));
    }
  });

  return total;
}

function atualizarInterface() {
  saldo = 200.0; 
  const total = calcularTotal();
  const mensagem = document.getElementById("mensagem");
  const saldoElemento = document.getElementById("saldo");
  const totalElemento = document.getElementById("total");

  const checkboxes = document.querySelectorAll(".product-item input[type='checkbox']");
  const algumSelecionado = Array.from(checkboxes).some((checkbox) => checkbox.checked);

  mensagem.className = "message";

  if (!algumSelecionado) {
    mensagem.textContent = "Não foi possível calcular o valor. Selecione pelo menos um produto.";
    mensagem.classList.add("warning"); 
    totalElemento.textContent = `R$0,00`;
    saldoElemento.textContent = `R$${saldo.toFixed(2)}`;
    return;
  }

  totalElemento.textContent = `R$${total.toFixed(2)}`;

  if (total <= saldo) {
    mensagem.textContent = "Compra realizada com sucesso!";
    mensagem.classList.add("success");
    saldo -= total;
    saldoElemento.textContent = `R$${saldo.toFixed(2)}`;
  } else {
    mensagem.textContent = "Saldo insuficiente!";
    mensagem.classList.add("error");
    saldoElemento.textContent = `R$${saldo.toFixed(2)}`;
  }
}

document.getElementById("comprar").addEventListener("click", atualizarInterface);
renderizarProdutos();