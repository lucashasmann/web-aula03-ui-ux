fetch('./produtos.json')
    .then(response => response.json())
    .then(produtos => {
        const container = document.querySelector('.produtos-container');
        
        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            `;
            
            container.appendChild(card);
        });
    });
