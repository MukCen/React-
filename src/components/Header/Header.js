import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, Users, Posts, About } from '../Home/Home';
import css from './Header.module.css'


const Header = () => {
    return (
        <div className={css.Header}> 
            <NavLink to={''}>Home</NavLink> 
            <NavLink to={'users'}>Users</NavLink> 
            <NavLink to={'posts'}>Posts</NavLink> 
            <NavLink to={'about'}>About</NavLink> 
            
        </div>
       
    );
};

export {Header};