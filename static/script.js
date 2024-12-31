document.addEventListener('DOMContentLoaded', () => {
    const refreshButtons = document.querySelectorAll('.refresh-btn');
    
    refreshButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const tableId = event.target.dataset.table;
            fetch(`/refresh/${tableId}`)
                .then(response => response.json())
                .then(data => {
                    alert(`Tabela ${tableId} atualizada com sucesso!`);
                    location.reload(); // Atualiza a página para ver os novos dados
                })
                .catch(err => console.error(`Erro ao atualizar: ${err}`));
        });
    });
});
