import React, {useState} from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import * as styled from './styled'

function Home() {
    //define a variavel que vai receber o none dos usuários e a função que
    // altera o seu valor.
  const [ usuario, setUsuario ] = useState('')
  const [ error, setError ] = useState(false)
  const history = useHistory()


  //Função para buscar na api do github os repositórios do usuário digitado
  function handlePesquisa(){
    
    
    console.log('Pesquisando...')
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data
        const repositoriesNames = []


        // Salva apenas os nomes de repositórios na variável
        repositories.map(repository => repositoriesNames.push(repository.name))


        // Salva os nomes dos repositórios na storage
        localStorage.setItem('repositoriesNames', JSON.stringify(repositoriesNames))

        setError(false)

        //redireciona para a página de repositórios
        history.push('/repositories')
      })
      .catch(() => {
        setError(true)
      })
    
  }

  return (

    //Pega o nome do usuário digitado no input e salva em 'usuario' e aciona a
    // 'handlePesquisa' quando o botão é precionado
    <div className="App">
      <>
        <h1>Pegar repositórios dos usuários do GitHub </h1>
        <styled.Input type="text" placeholder="usuário" value={ usuario } onChange={ e => setUsuario(e.target.value) }/>
        <styled.Button onClick={ handlePesquisa } >Pesquisar</styled.Button>

        { error ? <styled.ErrorUser> Usuário não encontrado! </styled.ErrorUser> : '' }
        
      </>
    </div>
  );
}

export default Home;
