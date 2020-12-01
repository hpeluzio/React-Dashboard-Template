import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

import contentBackground from '../images/background.jpg'

export const Spacer = styled.div`
    flex-grow: 1;
`

// HEADER
export const Header = styled.div`
    position: fixed;
    width: 100vmax;
    height: var(--header-height);
    background: #22242a;
    /* padding: 20px; */
    display: flex;
    align-items: baseline;
    /* justify-content: space-between; */
`

const animationHamburguerToggle = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const LeftHeader = styled.div`
    display: flex;
    align-items: baseline;
    width: var(--sidebar-width);

    i {
        font-size: 25px;
        height: 5px;
        width: 5px;
        margin: 0.6rem auto;
        transition-duration: 0.1s;
        color: #fff;
        padding-left: 1.5rem;
        opacity: 1;
        /* padding-bottom: 1.5rem; */
        cursor: pointer;

        :hover {
            color: #19b3d3;
        }

        :active {
            animation: ${animationHamburguerToggle} 1.5s 0s infinite;
        }

        // @media screen and (min-width: 1024) { //Desktop
        // @media screen and (min-width: 768px) and (max-width: 1023px) { //Tablet
        @media screen and (min-width: 767px) {
            display: none;
            /* opacity: 0; */
            transition-property: all;
            transition-duration: 0.5s;
        }
    }

    .spacer {
        flex-grow: 1;
    }

    h3 {
        display: flex;
        color: #fff;
        text-transform: uppercase;
        font-size: 22px;
        font-weight: 900;
    }

    span {
        margin-left: 5px;
        color: #19b3d3;
    }
`

export const RightHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: baseline;

    /* justify-self: flex-end; */
`

export const LinkHeader = styled(Link)`
    padding: 2.5rem;
    /* background: tomato; */
    font-size: 1.6rem;
    color: #fff;
    transition-duration: 0.5s;
    transition-property: all;

    :hover {
        font-weight: bold;
        background: #19b3d3;
    }

    a {
        color: white;
    }
`
// Header

// Sidebar
export const Sidebar = styled.div`
    position: fixed;
    left: 0;
    top: var(--header-height);
    width: var(--sidebar-width);
    height: 100%;
    background: #2f323a;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    transition: 0.5s;
    transition-property: all;
    overflow-y: auto;

    @media (max-width: 768px) {
        /* display: none; */
        transition-duration: 0.5s;
        margin-left: calc(var(--sidebar-width) * -1);
    }

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
        /* opacity: 1; */
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

export const Content = styled.div`
    position: fixed;
    /* margin-left: 250px; */
    top: var(--header-height);
    left: var(--sidebar-width);
    right: 0;
    /* background: url(background.png) no-repeat; */
    /* background-position: center; */
    /* background-size: cover; */
    height: 100vh;
    transition: 0.5s;
    background-image: url(${contentBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow-y: auto;

    @media (max-width: 768px) {
        /* display: none; */
        margin-left: calc(var(--sidebar-width) * -1);
        transition: 0.2s;
    }

    .content-container {
        background-color: #fff;
        margin: 10px;
        width: auto;
        height: auto;
        padding: 1rem;
        border: 2px solid rgba(0, 0, 0, 0.1);
    }
`
