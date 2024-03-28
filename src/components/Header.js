import React from 'react'
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-row p-3 bg-red-200 shadow-xl'>
        <div className='flex-1'>
            <img src={LOGO_URL} alt="logo" className='h-10 w-10'/>
        </div>
        <div className='flex-1'>
            <ul className='flex flex-row justify-around'>
                <li><Link to="/">Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header