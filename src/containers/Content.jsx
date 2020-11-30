import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'

import './style.css'

const Content = () => {
    return (
        <main className="content">
            <div className="content_container">
                <Switch>
                    <Route path="/" exact>
                        <Home></Home>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                </Switch>
            </div>
        </main>
    )
}

export default Content
