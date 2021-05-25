/*
https://github.com/briancodex/react-sidebar-v1 - This shows how to create own sidebar nav 

*/
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useQuery } from '@apollo/client';
import { GET_APP_STATE } from '../../operations/queries/getAppState';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const { data: { appState: { org } } } = useQuery(GET_APP_STATE);

    const showSidebar = () => setSidebar(!sidebar);

    const filteredSidebarData = SidebarData.filter(elm => {
        if (org === 'nhs' && elm.id === 2) {
            return true;
        }
        if (org !== 'nhs' && elm.id === 2) {
            return false;
        }
        return true;
    });

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className='navbartitle'> Group: {org}</div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {filteredSidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={`${item.path}?group=${org}`}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
