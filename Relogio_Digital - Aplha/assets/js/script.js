// Seleciona os elementos HTML pelos seus IDs
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");
const calendarioBtn = document.getElementById("calendarioBtn");
const calendarioDiv = document.getElementById("calendario");
const diasContainer = document.getElementById("diasContainer");

// Função para definir as horas
function setHours() {
    const dateToday = new Date(); // Obtém a data atual
    const horaAtual = String(dateToday.getHours()).padStart(2, '0'); // Formata a hora para ter 2 dígitos
    const minutoAtual = String(dateToday.getMinutes()).padStart(2, '0'); // Formata os minutos para ter 2 dígitos
    const segundoAtual = String(dateToday.getSeconds()).padStart(2, '0'); // Formata os segundos para ter 2 dígitos

    // Atualiza o conteúdo dos elementos de horas, minutos e segundos
    horas.textContent = horaAtual;
    minutos.textContent = minutoAtual;
    segundos.textContent = segundoAtual;
}

// Função para definir a data
function setDate() {
    const date = new Date(); // Obtém a data atual
    dia.textContent = String(date.getDate()).padStart(2, '0'); // Formata o dia para ter 2 dígitos
    mes.textContent = String(date.getMonth() + 1).padStart(2, '0'); // Formata o mês (0-11) para 1-12
    ano.textContent = date.getFullYear(); // Obtém o ano atual
}

// Função para atualizar o relógio
function updateClock() {
    setHours(); // Atualiza as horas
    setDate(); // Atualiza a data
}

// Atualiza a cada segundo
setInterval(updateClock, 1000); // Chama updateClock a cada 1000 milissegundos (1 segundo)

// Função para alternar a exibição do calendário
calendarioBtn.addEventListener("click", () => {
    // Altera a visibilidade do calendário
    calendarioDiv.style.display = calendarioDiv.style.display === "none" || calendarioDiv.style.display === "" ? "block" : "none";
});

// Função para selecionar um mês
function selectMonth(month) {
    // Obtém o número de dias no mês selecionado
    const diasNoMes = new Date(ano.textContent, month + 1, 0).getDate(); 
    diasContainer.innerHTML = ""; // Limpa o container de dias

    // Adiciona os dias ao container
    for (let i = 1; i <= diasNoMes; i++) {
        const diaElement = document.createElement("span"); // Cria um novo elemento para o dia
        diaElement.textContent = i; // Define o texto do elemento como o número do dia
        // Adiciona um evento de clique que mostra um alerta com o dia selecionado
        diaElement.onclick = () => alert(`Dia selecionado: ${i}`);
        diasContainer.appendChild(diaElement); // Adiciona o dia ao container
    }

    // Exibe o calendário
    calendarioDiv.style.display = "block"; // Garante que o calendário esteja visível
}

// Inicializa a visibilidade do calendário
calendarioDiv.style.display = "none"; // Oculta o calendário por padrão
