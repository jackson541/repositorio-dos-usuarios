import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import * as styled from './styled'

export default function Respositories() {
    const [ repositories, setRepositories ] = useState([])
    const history = useHistory()

    useEffect(() => {
        //pega os dados do storage e salva na variável sempre que a página é
        // acessada

        let repositoriesNames = localStorage.getItem('repositoriesNames')
        repositoriesNames = JSON.parse(repositoriesNames)

        // Redireciona para a home caso o valor do storage seja nulo
        if (!repositoriesNames){
            history.push('/')
        }

        localStorage.clear()

        setRepositories(repositoriesNames)

    }, [])

    return (

        //as tags HTML são trocadas pelas variaveis para poderem receber os
        // estilos.

        //o map serve para listar todos os repositórios

        <div className="App">
            <styled.Title>Repositórios</styled.Title>

            <styled.LinkHome to='/' > Voltar </styled.LinkHome>

            <styled.List>
                { repositories.map(repository => (
                    <styled.ListItem>Repositorio: {repository}</styled.ListItem>
                )) }
            </styled.List>
        </div>
    )
}