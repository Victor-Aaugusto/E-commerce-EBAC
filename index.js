    let produtos = [
        {id: 1, name: 'Curso 1:', price: 10.99, image: "img/product1.jpg"},
        {id: 2, name: 'Curso 2:', price: 20.99, image: "img/product2.jpg"},
        {id: 3, name: 'Curso 3:', price: 30.99, image: "img/product3.jpg"},
        {id: 4, name: 'Curso 4:', price: 40.99, image: "img/product4.jpg"},
        {id: 5, name: 'Curso 5:', price: 50.99, image: "img/product5.jpg"},
        {id: 6, name: 'Curso 6:', price: 60.99, image: "img/product6.jpg"},
        {id: 7, name: 'Curso 7:', price: 70.99, image: "img/product7.jpg"},
        {id: 8, name: 'Curso 8:', price: 80.99, image: "img/product8.jpg"},
        {id: 9, name: 'Curso 9:', price: 90.99, image: "img/product9.jpg"},
    ]

    let cart = []

    function renderProdutos(){
            let produtosGrid = document.querySelector('.produtos-grid')
            produtosGrid.innerHTML = ''
            produtos.forEach((product) => {
                let produtosDiv = document.createElement('div')
                produtosDiv.className = 'produtos'
                produtosDiv.innerHTML = 
                `<img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Adicionar ao carrinho</button>
                `;
                produtosDiv.querySelector('button').addEventListener('click', () =>{
                addCarrinho(product.id)
                })
                produtosGrid.appendChild(produtosDiv)
            }
        )
        }

    function addCarrinho(productId){
        let produto = produtos.find((product) => product.id === productId);
        cart.push(produto)
        renderCart()
    }

    function renderCart(){
        let cardTable = document.querySelector('.card table tbody')
        cardTable.innerHTML = ''
        cart.forEach((produtos) => {
            let cartRow = document.createElement('tr')
            cartRow.innerHTML = `
                <td> ${produtos.name} </td>
                <td>1</td>
                <td>${produtos.price}
                <td>${produtos.price}
            `
            cardTable.appendChild(cartRow)
        });
        atualizarTotal()
    }

    function atualizarTotal(){
        let total = cart.reduce((acc, produtos) => acc + produtos.price, 0)
        document.getElementById('total').textContent = `${total.toFixed(2)}`
    }

    let carroselProduto = 0
    let prov = document.querySelector('.prev')
    let next = document.querySelector('.next')

    document.getElementById('checkout').addEventListener('click', () =>{
        const total = document.getElementById('total')
            if (cart.length === 0){
                total.innerText = 'Seu carrinho está vázio!'
            } else{
                alert('Pedido realizado com sucesso!')
                cart = []
                renderCart()

            }
    })

    renderProdutos()
