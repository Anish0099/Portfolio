import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { HiOutlineMail } from 'react-icons/hi'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav);
  return (

    <div name='home' className='bg-[#0a192f] w-full h-screen '>


      {/* {container} */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Anish Kumar</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend developer specializing in building and designing web apps. Currently I'm focused on building responsive frontend web applications</p>
        <div>
          <div className='flex gap-2'>
            <Link to='work' smooth={true} duration={500}>
              <button className='text-white border-2 group text-[14px] sm:text-lg sm:px-6 px-3 py-2 sm:py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
            <Link to='socialicon' smooth={true} duration={500}>
              <button onClick={handleClick} className='sm:hidden  text-white border-2 text-[14px] sm:text-lg  group px-6 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Socialize
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
          
          <ul
            className={
              !nav
                ? 'hidden'
                : 'fixed top-0 left-2 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }
          >
            <div onClick={handleClick} className='absolute top-3 right-3'>
            {!nav ? <FaBars color='white'/> : <FaTimes color='white'/>}
          </div>

            <li className='w-[200px] ml-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/anish-kumar-119a761bb/'>Linkedin <FaLinkedin size={30} /></a>
            </li>
            <li className='w-[200px] ml-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Anish0099?tab=repositories'>Github <FaGithub size={30} /></a>
            </li>
            <li className='w-[200px] ml-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a className='flex justify-between items-center w-full text-gray-300' href='mailto:kanish92729@example.com'>Email <HiOutlineMail size={30} /></a>
            </li>
            <li className='w-[200px] ml-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300' href='/'>Resume <BsFillPersonLinesFill size={30} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home