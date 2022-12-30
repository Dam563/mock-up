import React from 'react';
import './navsection.css';
import logo from '../../../src/Images/logo.png';
import home from '../../../src/Images/home.png';
import  company from '../../../src/Images/company.png';
import project from '../../../src/Images/project.png';
import profile from '../../../src/Images/profile.png';
import job from '../../../src/Images/job.png';
import message from '../../../src/Images/message.png';
import notification from '../../../src/Images/notification.png';
import avatar from '../../../src/Images/avatar.png';
import arrow from '../../../src/Images/arrow.png';
import search from '../../../src/Images/search.png';
import { NavLink } from 'react-router-dom';


const Navsection = () => {
  return (
    <div className='navsection'>
        <div>
        <img src={logo} alt="" className='nav-logo' />
        <input type="text" placeholder='Search...' className='nav-sec-one' />
        <img src={search} alt="" className='search-btn'/>
        </div>
        <div className='nav-links'>
            <div className='navs'>
                <img src={home} alt="" className='home-icon'/> <br />
                <NavLink to='/' className='link-nav'>Home</NavLink>
            </div>
            <div className='navs'>
                <img src={company} alt="" className='home-icon'/> <br />
                <NavLink to='/company' className='link-nav'>Company</NavLink>
            </div>
            <div className='navs'>
                <img src={project} alt="" className='home-icon'/> <br />
                <NavLink to='/project' className='link-nav'>Project</NavLink>
            </div>
            <div className='navs'>
                <img src={profile} alt="" className='home-icon'/> <br />
                <NavLink to='/profile' className='link-nav'>Profile</NavLink>
            </div>
            <div className='navs'>
                <img src={job} alt="" className='home-icon'/> <br />
                <NavLink to='/jobs' className='link-nav'>Jobs</NavLink>
            </div>
            <div className='navs'>
                <img src={message} alt="" className='home-icon'/> <br />
                <NavLink to='/messages' className='link-nav'>Messages</NavLink>
            </div>
            <div className='navs'>
                <img src={notification} alt="" className='home-icon'/> <br />
                <NavLink to='/notifications' className='link-nav'>Notifications</NavLink>
            </div>
            <div className="smalllogo">
                <img src={avatar} alt="" className='nav-avatar'/>
                <p>John</p>
                <img src={arrow} alt="" className='home-icon' />
            </div>
        </div>
    </div>
  )
}

export default Navsection