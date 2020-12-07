import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'

import 'fontsource-roboto'

import { useViewport } from '../store/ViewportContext'
import profile from '../images/profile.png'

const Sidebar = () => {
    const { layout, toggle, setToggle } = useViewport()

    // const styleHidden = {
    //     opacity: 0,
    //     width: 0,
    //     pointer-events: 'none'
    // }

    console.log('toggle', toggle)
    console.log('Layout: ', layout)

    const mobile = () => (layout === 'mobile' ? true : false)

    if (mobile() === true && toggle === true)
        return (
            // <>
            //     <Backwrap
            //         onClick={() => {
            //             setToggle(!toggle)
            //         }}
            //     ></Backwrap>
            <SidebarContainer>
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
            </SidebarContainer>
            // </>
        )
    else if (mobile() === true && toggle === false) {
        return (
            <SidebarContainer
                style={{ width: 0, pointerEvents: 'none' }}
            ></SidebarContainer>
        )
    } else if (mobile() === false && toggle === false) {
        return (
            <SidebarContainer
                style={{ width: 0, pointerEvents: 'none' }}
            ></SidebarContainer>
        )
    } else
        return (
            <SidebarContainer>
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
            </SidebarContainer>
        )
}

const SidebarContainer = styled.div`
    z-index: 3;
    position: fixed;
    left: 0;
    top: var(--header-height);
    width: var(--sidebar-width);
    height: 100%;
    background: #2f323a;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    transition-property: all;
    overflow-y: auto;

    div {
        height: 22rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 1;
        transition: 0.5s;
        transition-property: all;
    }

    img {
        margin-top: 5rem;
        width: 10rem;
        height: 10rem;
        border-radius: 10rem;
        margin-bottom: 1rem;
    }

    h4 {
        color: #ccc;
        margin-top: 1rem;
        margin-bottom: 20px;
    }

    a {
        display: flex;
        align-items: center;
        height: 6rem;
        font-size: 20px;
        color: #fff;
        padding: 2rem;
        transition: 0.5s;
        transition-property: background, font-weight;
    }

    a:hover {
        background: #19b3d3;
        font-weight: bold;
    }

    i {
        padding-right: 10px;
    }
`

export default Sidebar
