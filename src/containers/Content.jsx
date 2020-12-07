import React, { useState } from 'react'

import { Switch, Route } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'

import 'fontsource-roboto'

import { useViewport } from '../store/ViewportContext'

import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'

import contentBackground from '../images/background.jpg'
import styled from 'styled-components'

const Content = () => {
    const { width, layout, toggle, setToggle } = useViewport()

    const mobile = () => (layout === 'mobile' ? true : false)

    if (!mobile() && toggle === true)
        return (
            <ContentContainer>
                <div className="content-container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                    </Switch>
                </div>
            </ContentContainer>
        )
    else
        return (
            <ContentContainer style={{ left: 0 }}>
                <div className="content-container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                    </Switch>
                </div>
            </ContentContainer>
        )
}

const ContentContainer = styled.div`
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 93%;
    right: 0;
    top: var(--header-height);
    left: var(--sidebar-width);
    transition: 0.5s;
    transition-property: all;
    background-image: url(${contentBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow-y: auto;

    .content-container {
        background-color: #fff;
        margin: 10px;
        width: auto;
        height: auto;
        padding: 1rem;
        border: 2px solid rgba(0, 0, 0, 0.1);
    }
`

export default Content
