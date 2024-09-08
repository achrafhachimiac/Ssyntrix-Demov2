

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons'; // Regular icons
import { MdMailOutline } from "react-icons/md";






const Header = () => {
    return (
        <header className="flex justify-between items-center h-16 w-full  bg-white">
            <h1 style={{
                color: '#444',
                lineHeight: '28px',
                paddingLeft: '10px',
                fontSize: '14px',

            }}>Welcome! Syntrix fights fraud, keeping your business unflawed</h1>
            <div className="flex items-center">
                <div className='flex relative pr-[30px]'>
                    <FontAwesomeIcon icon={faBell} style={{ fontSize: '22px' }} />
                <span style={{position: 'absolute', top: '-7px', right: '19px'}} className='bg-[#1836B2] rounded-full h-[19px] w-[19px] flex items-center justify-center text-white text-xs font-bold'>0</span>

                </div> 

                {/* <div style={{ position: 'relative', paddingRight: '15px' }}>
                    <FontAwesomeIcon icon={faBell} style={{ fontSize: '22px' }} />
                    <span style={{ backgroundColor: '#1836B2', borderRadius: '50%', height: '19px', width: '19px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px', fontWeight: 'bold', position: 'absolute', top: '0', right: '0' }}>2</span>
                </div> */}

                <div className='flex relative pr-[30px]'>
                    <MdMailOutline style={{ fontSize: '22px' }} />
                    <span style={{position: 'absolute', top: '-7px', right: '19px'}} className='bg-[#1836B2] rounded-full h-[19px] w-[19px] flex items-center justify-center text-white text-xs font-bold'>0</span>
                </div>
                <div style={{
                    width: '0',
                    borderRight: '1px solid #e3e6f0',
                    height: 'calc(4.375rem - 2rem)',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    display: 'block !important'
                }}>

                </div>
                <div style={{
                    height: '4.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 0.75rem'
                }} className='flex items-center'>
                    <span style={{
                        color: '#858796',
                        fontSize: '80%',
                        fontWeight: '300',
                        marginRight: '0.5rem',
                        display: 'inline',

                    }} className='mr-2 d-none d-lg-inline text-gray small'>Client Demo</span>
                    <img className='h-8 w-8 rounded-full' src="/build.jpeg" alt='Client'></img>
                </div>

            </div>
        </header >
    );
};

export default Header;
