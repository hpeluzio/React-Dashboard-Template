import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'

import 'fontsource-roboto'

import { useStore } from '../store/StoreContext'
import Global from '../styles/global'

import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'
import profile from '../images/profile.png'

import {
    Spacer,
    Header,
    LeftHeader,
    RightHeader,
    LinkHeader,
    HamburguerToggle,
    Sidebar,
    Content,
} from './style.js'

const Main = () => {
    const { store, setStore } = useStore()

    useEffect(() => {
        console.log(store.toggleHamburguer)
        console.log('Botao clicado')
    }, [store.toggleHamburguer])

    return (
        <Router>
            <Global />

            {/* <input
                type="checkbox"
                id="check"
                checked={store.toggleHamburguer}
            ></input> */}

            <Header>
                <LeftHeader>
                    <i
                        value={store.toggleHamburguer}
                        onClick={() => {
                            var newStore = { ...store }
                            newStore.toggleHamburguer = !store.toggleHamburguer
                            console.log('Botao clicado')
                            console.log(store.toggleHamburguer)
                            setStore(newStore)
                        }}
                        className="fas fa-bars"
                    ></i>

                    <Spacer />

                    <Link to="/" className="logo_home">
                        <h3>
                            App <span>Logo</span>
                        </h3>
                    </Link>

                    {/* <label htmlFor="check">
                    
                </label> */}
                </LeftHeader>

                <RightHeader>
                    <Spacer />
                    <LinkHeader to="/register">
                        <div>Register</div>
                    </LinkHeader>
                    <LinkHeader to="/login">
                        <div>Login</div>
                    </LinkHeader>
                </RightHeader>
            </Header>

            <Sidebar>
                <div>
                    <img src={profile} className="profile_image" alt="" />
                    <h4>Jessica</h4>
                </div>

                <a href="#">
                    <i className="fas fa-desktop"></i>
                    <span>Dashboard</span>
                </a>
                <a href="#">
                    <i className="fas fa-cogs"></i>
                    <span>Components</span>
                </a>
                <a href="#">
                    <i className="fas fa-table"></i>
                    <span>Tables</span>
                </a>
                <a href="#">
                    <i className="fas fa-th"></i>
                    <span>Forms</span>
                </a>
                <a href="#">
                    <i className="fas fa-info-circle"></i>
                    <span>About</span>
                </a>
                <a href="#">
                    <i className="fas fa-sliders-h"></i>
                    <span>Settings</span>
                </a>
            </Sidebar>

            <Content>
                <div className="content-container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                    </Switch>
                </div>
            </Content>
        </Router>
    )
}

export default Main
