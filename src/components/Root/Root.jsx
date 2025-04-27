import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router';
import Navbar from '../Header/Navbar';

const Root = () => {
    return (
        <div>
        <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;