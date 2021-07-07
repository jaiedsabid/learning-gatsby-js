import React from 'react';
import NavBar from './NavBar';
import '../styles/global.css';

export default function Layout({children, title}) {
    return (
        <div className="layout">
            <title>{title}</title>
            <NavBar/>
            <div className="contents">
                {children}
            </div>
            <footer>
                <p>Copyright © 2021</p>
            </footer>
        </div>
    );
}