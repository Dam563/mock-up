import React from 'react';
import avatar from '../../../src/Images/avatar.png';
import Navsection from '../../components/Navsection/Navsection';
import './profile.css';

const Profile = () => {
  return (
    <div className='profiles'>
      <Navsection />
      <img src={avatar} alt="" className='project-img'/>
      <p className='project-texts'>Hi, I am John Doe. A graphics designer at Self Employed.</p>
      <p className='project-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe molestias fuga, nihil aut quod mollitia 
        aliquam voluptatem reiciendis ipsam id harum aliquid vel voluptatum sed dolorum debitis consequatur facere
         sint!</p>
         <p className='project-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel consequatur voluptate minima officiis quo 
          soluta quam, nostrum odit necessitatibus unde nobis corporis dolore officia doloremque inventore nulla nam
           fugiat eligendi.</p>
           <button className='profile-btn'>Hire me</button>
      </div>
  )
}

export default Profile