import styled from 'styled-components'
import { Link } from 'react-router-dom'

//criação dos estilos das páginas utilizando a styled-components

export const Title = styled.h1`
    text-align: center;
    font-family: sans-serif;
    font-size: 36px;
`

export const List = styled.ul`
    list-style: none;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    background-color: black;
    color: white;
    padding: 10px;
    margin-bottom: 5px;
`

// Dessa forma se estiliza tags que não pertencem ao html, como o Link do 
// react-router-dom
export const LinkHome = styled(Link)`
    background-color: black;
    color: white;
    padding: 5px 10px;
    text-decoration: none;
    margin-left: 40px;
`