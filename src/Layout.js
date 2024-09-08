
// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
// import  { useState, useEffect } from 'react';

const Layout = () => {

  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowHeight(window.innerHeight);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // style={{ height: windowHeight }}
  return (
    <div  className="flex overflow-y-hidden overflow-x-hidden w-screen">
      <div className='w-56 bg-gradient-primary text-gray-400'>
      <Dashboard  />

      </div>
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-grow   bg-[#f2f2f2] py-10 pl-[20px] pr-[40px]">
          <Outlet  />
        </div>
      </div>
    </div>
  );
};

export default Layout;
