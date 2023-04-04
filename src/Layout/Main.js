import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <div className='flex items-center '>
            <img className='w-8 mt-3' src="logo.png" alt="" /> 
            <p className='  text-red-400 mt-2 ml-1 text-xl font-bold'>mytask</p>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;