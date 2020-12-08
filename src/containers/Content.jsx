import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import { useViewport } from '../store/ViewportContext'
import contentBackground from '../images/background.jpg'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'

const Content = () => {
    const { layout, toggle } = useViewport()

    const hideSidebar = () => {
        if (layout === 'mobile' && toggle === true) return false
        if (layout === 'mobile' && toggle === false) return true
        if (layout === 'desktop' && toggle === true) return false
        if (layout === 'desktop' && toggle === false) return true
    }

    return (
        <ContentContainer mobile={hideSidebar()}>
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
    transition: 0.25s;
    transition-property: all;
    background-image: url(${contentBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow-y: auto;

    left: ${(props) => props.mobile && '0'};

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
