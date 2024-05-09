function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComdescontos = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
        
    })
    return livrosComdescontos
}