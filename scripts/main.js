function adicionarItens(){
    let produto = document.getElementById("inputProduto").value
    let quantidade = document.getElementById("inputQuantidade").value
    let valor = document.getElementById("inputValor").value
    
    
        
    alert(`O produto ${produto} com ${quantidade} unidades totalizando o valor de R$ ${valor} adicionado com sucesso ao carrinho!  `)
}   