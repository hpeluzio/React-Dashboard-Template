import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useViewport } from '../store/ViewportContext'

const Header = () => {
    const { layout, toggle, setToggle } = useViewport()

    const mobile = () => (layout === 'mobile' ? true : false)

    return (
        <HeaderBar>
            <LeftHeader>
                {!toggle && (
                    <i
                        value={toggle}
                        onClick={() => {
                            setToggle(!toggle)
                        }}
                        className="fas fa-bars"
                    ></i>
                )}

                {toggle && (
                    <i
                        value={toggle}
                        onClick={() => {
                            setToggle(!toggle)
                        }}
                        className="fas fa-times"
                    ></i>
                )}

                <Spacer />

                <Link to="/" className="logo_home">
                    <h3>
                        App <span>Logo</span>
                    </h3>
                </Link>
            </LeftHeader>

            <RightHeader>
                <Spacer />

                <LinkHeader to="/register">
                    {!mobile() && <div>Register</div>}
                </LinkHeader>
                <LinkHeader to="/login">
                    {!mobile() && <div>Login</div>}
                </LinkHeader>
            </RightHeader>
        </HeaderBar>
    )
}

// HEADER
const HeaderBar = styled.div`
    z-index: 5;
    position: fixed;
    width: 100%;
    height: var(--header-height);
    background: #22242a;
    display: flex;
    align-items: center;
`

const LeftHeader = styled.div`
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    width: var(--sidebar-width);

    i {
        display: fixed;
        font-size: 25px;
        margin-left: 15px;
        margin-right: 10px;
        transition-duration: 0.1s;
        color: #fff;
        opacity: 1;
        cursor: pointer;

        :hover {
            color: #19b3d3;
        }

        // @media screen and (min-width: 1024) { //Desktop
        // @media screen and (min-width: 768px) and (max-width: 1023px) { //Tablet
        /* @media screen and (min-width: 767px) {
            opacity: 0.5;
            transition-property: all;
            transition-duration: 0.5s;
        } */
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

const RightHeader = styled.div`
    width: 100%;
    height: 100%;

    margin: 0;
    display: flex;
    align-items: center;

    /* justify-self: flex-end; */
`

const LinkHeader = styled(Link)`
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

const Spacer = styled.div`
    flex-grow: 1;
`

export default Header