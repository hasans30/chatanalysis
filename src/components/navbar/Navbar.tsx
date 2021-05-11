import React, { memo } from 'react'
import { NavbarType } from './Navbar.types';
import { INavLink, Nav } from '@fluentui/react';

const navigationStyles = {
    root: {
        height: '100vh',
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto',
        paddingTop: '1vh',
    },
};
const links = [
    {
        links: [
            {
                name: 'Monthly Count',
                url: '/monthly',
                key: 'monthlyreport'
            },
            {
                name: 'Daily trend',
                url: '/daily',
                key: 'dailytrend'
            }
        ]
    }];
const NavbarBase: React.FC<NavbarType> = () => {
    const nav2 = <Nav
        groups={links}
        onLinkClick={navbarClickHandler}
        selectedKey={'key3'}
        styles={navigationStyles}
    />;

    return <div> {nav2} </div>;
}
const navbarClickHandler: (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => void =
    (ev, item) => {
        console.log(`item clicked ${item?.key}`)
    }

const Navbar = memo(NavbarBase);
export default Navbar;