// Lista de entregas
const entregas = [
    { id: 1, cliente: "João Silva", endereco: "Rua A, 123", status: "pendente" },
    { id: 2, cliente: "Maria Souza", endereco: "Av. B, 456", status: "pendente" },
    { id: 3, cliente: "Carlos Lima", endereco: "Praça C, 789", status: "pendente" }
];

// Simula busca assíncrona no "banco de dados"
function buscarEntregas() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(entregas);
        }, 1000); // Simula 1 segundo de busca
    });
}

// Atualiza o status de uma entrega após 3 segundos
function atualizarStatusEntrega(id) {
    setTimeout(() => {
        const entrega = entregas.find(e => e.id === id);
        if (entrega) {
            entrega.status = "entregue";
            console.log("Entrega atualizada:");
            console.log(entrega);
        }
        else {
            console.log(`Entrega com id ${id} não encontrada.`);
        }
    }, 3000);
}

// Execução principal
buscarEntregas().then(lista => {
    console.log("Entregas encontradas:");
    console.table(lista)

    // Atualiza o status da entrega de id 2
    atualizarStatusEntrega(2);
});