import React from 'react'

import { Link } from 'react-router-dom'
import './style.css'
import profile from '../images/profile.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile-container">
                <img src={profile} className="profile_image" alt="" />
                <h4>Jessica</h4>
            </div>

            {/* <Link to="/todolist">
                <i className="fas fa-list-ol"></i>
                <span>Todo List</span>
            </Link> */}
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
        </div>

        // <nav className="sidebar">
        //     {/* <div className="sidebar-header">TODO ALL FEATURES</div> */}
        //     <li>
        //         <Link to="/todolist" className="sidebar-link">
        //             <div>TodoList</div>
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/count" className="sidebar-link">
        //             <div>Count</div>
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/" className="sidebar-link">
        //             <div>Sessões</div>
        //         </Link>
        //     </li>
        // </nav>
    )
}

export default Sidebar
