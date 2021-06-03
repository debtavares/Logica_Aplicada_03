const livros = require('./database')

const read = require('readline-sync')

const verLivros = read.question("Deseja encontrar um livro para ler(S/N)? ")



if (verLivros.toLocaleUpperCase()==='S') {
    console.log('As opções são: busca por categoria, recomendações do leitor e lista de desejo.')
    const categori = read.question('Deseja buscar por categoria(S/N)? ')

    if (categori.toLocaleUpperCase()==='S') {

        const categori = read.question('Temos Drama, Romance, Romance Policial e Psicanalise. O que deseja? ')
            if(categori.toLocaleUpperCase()==='ROMANCE') {
                const locais = livros.filter(livros => livros.categoria === 'Romance')
                console.table(locais)
            } else if(categori.toLocaleUpperCase()==='ROMANCE POLICIAL')  {
                const locais = livros.filter(livros => livros.categoria === 'Romance Policial')
                console.table(locais)

            } else if(categori.toLocaleUpperCase()==='DRAMA')  {
                const locais = livros.filter(livros => livros.categoria === 'Drama')
                console.table(locais)

            } else if(categori.toLocaleUpperCase()==='PSICANALISE')  {
                const locais = livros.filter(livros => livros.categoria === 'Psicanalise')
                console.table(locais)

            } else {
                console.log ("Digite uma entrada válida")
            }


    } else {  
        const recomendacoes = read.question('Deseja recomendacoes do leitor (S/N)? ') 

        if (recomendacoes.toLocaleUpperCase()==='S') {
            const rec = livros.filter(livros => livros.recomenda === true)
            console.table(rec)
        } else {
            const desejo = read.question('Deseja saber a lista de desejo (S/N)? ')

            if (desejo.toLocaleUpperCase()==='S') {
                const des = livros.filter(livros => livros.leu === false)
                console.table(des)
            } else {

                console.table(livros)

            }
        }

    }


} else {
console.table(livros)
}
