import React, { useEffect, useState } from 'react'

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'fontsource-roboto'
import './style.css'

import Header from './Header'
import Content from './Content'
import Sidebar from './Sidebar'

import { useStore } from '../store/StoreContext'

const Main = () => {
    const { store, setStore } = useStore()

    useEffect(() => {
        console.log(store.toggleHamburguer)
        console.log('Botao clicado')
    }, [store.toggleHamburguer])

    return (
        <Router>
            <div>
                <input
                    type="checkbox"
                    id="check"
                    checked={store.toggleHamburguer}
                ></input>

                <Header></Header>

                <Sidebar></Sidebar>

                <Content></Content>
            </div>
        </Router>
    )
}

export default Main
