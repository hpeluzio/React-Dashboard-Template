import React, { useEffect } from 'react'
import './style.css'

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useStore } from '../store/StoreContext'
import { Link } from 'react-router-dom'

const Header = () => {
    const { store, setStore } = useStore()

    useEffect(() => {
        console.log(store.toggleHamburguer)
        console.log('Botao clicado')
    }, [store.toggleHamburguer])

    const divrender = () => {
        if (store.toggleHamburguer) return <div>OLA</div>
    }

    return (
        <header>
            <div className="left_area">
                <Link to="/" className="logo_home">
                    <h3>
                        Template <span>Logo</span>
                    </h3>
                </Link>
                {divrender()}
                <button
                    value={store.toggleHamburguer}
                    onClick={() => {
                        var newStore = { ...store }
                        newStore.toggleHamburguer = !store.toggleHamburguer
                        console.log('Botao clicado')
                        console.log(store.toggleHamburguer)
                        setStore(newStore)
                    }}
                >
                    Botao
                </button>
                {/* <label htmlFor="check">
                    
                </label> */}
            </div>

            <div className="right_area">
                <Link to="/register" className="header-link">
                    <div>Register</div>
                </Link>
                <Link to="/login" className="header-link">
                    <div>Login</div>
                </Link>
            </div>
        </header>
    )
}

export default Header
