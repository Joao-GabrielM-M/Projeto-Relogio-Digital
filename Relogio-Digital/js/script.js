// Função para atualizar o relógio em tempo real
function atualizarRelogio() {
    const agora = new Date();

    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    // Atualiza os elementos com os valores
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Chama a função a cada segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // Chama a função na inicialização
