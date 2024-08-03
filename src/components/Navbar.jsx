import React from 'react';
// import sslogo from "../assets/SSLogo.png";
import sslogo from "../assets/sslogo.jpg";
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex items-center flex-shrink-0'>
            <img className='mx-2 w-10 ' src={sslogo} alt='logo'/>
        </div>
        <div className='m-8 flex gap-4 items-center justify-center text-2xl text-white'>
          <a href='https://www.linkedin.com/in/summi-sinha-a61a08313/' ><FaLinkedin/></a> 
            <a href="https://github.com/dashboard"><FaGithub/></a>
            <FaInstagram/>
            <FaSquareXTwitter/>
        </div>
    </nav>
  )
}

export default Navbar