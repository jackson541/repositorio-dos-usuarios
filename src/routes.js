import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Repositories from './pages/repositories'
import Home from './pages/home'

export default function Routes() {
    return (

        //define quais componentes devem ser chamados quando as rotas da 'path'
        // forem procuradas no navegador.

        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/repositories' component={ Repositories } />
            </Switch>
        </BrowserRouter>
    )
}