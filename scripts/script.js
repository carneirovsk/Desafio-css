function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

    // Atualiza o atributo datetime do elemento <time> para acessibilidade
    document.querySelector('time').setAttribute('datetime', `${horas}:${minutos}:${segundos}`);
}

setInterval(atualizarRelogio, 1000);
