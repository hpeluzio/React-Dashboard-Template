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
            <ContentContainerMobile>
                <div className="content-container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                    </Switch>
                </div>
            </ContentContainerMobile>
        )
}

const ContentContainer = styled.div`
    position: fixed;
    z-index: 0;
    top: var(--header-height);
    width: 100%;
    left: var(--sidebar-width);
    right: 0;
    height: 100vh;
    transition: 0.5s;
    background-image: url(${contentBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow-y: auto;

    /* display: none; */

    /* @media (min-width: 768px) {
        margin-left: calc(var(--sidebar-width) * 1);
        transition: 0.2s;
    } */

    .content-container {
        background-color: #fff;
        margin: 10px;
        width: auto;
        height: auto;
        padding: 1rem;
        border: 2px solid rgba(0, 0, 0, 0.1);
    }
`
const ContentContainerMobile = styled(ContentContainer)`
    margin-left: calc(var(--sidebar-width) * -1);
    /* background: blue; */
`

export default Content
