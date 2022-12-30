import React from 'react';
import './middlesection.css';
import { useState } from 'react';
import avatar from '../../../src/Images/avatar.png';
import more from '../../../src/Images/more.png';


const Middlesection = () => {

    const [active, setActive] = useState('false');
        const handleClick = () => {
            setActive(!active);
        };
        const [activeBtn, setActiveBtn] = useState('false');
        const handleClickOne = () => {
            setActiveBtn(!activeBtn);
        };
        const [activeBtnTwo, setActiveBtnTwo] = useState('false');
        const handleClickTwo = () => {
            setActiveBtnTwo(!activeBtnTwo);
        };
        const handleClickIcon = () => {
           alert("I am clicked");
        };



  return (
    <div className='middle-section'>
        <div className="first-sect">
            <div><img src={avatar} alt="" /></div>
            <button className='button-one'>Post a Project</button>
            <button className="button-two">Post  a Job</button>
         </div>

         {/* John Doe Section */}
            <div className="second-sect">
                <div className='second-sect-b'>
                <div className='second-sub-sect'>
                <img src={avatar} alt=""  />
                <div>
                <h4>John Doe</h4>
                <p>3 min ago</p>
                </div>
                </div> 
                <img src={more} alt="" className='second-image-b' onClick={handleClickIcon}/>
                </div> <br />
                <div className='third-sub-sect'>
                <p>Epic Coder</p>
                <p>India</p>
                </div> <br />
                <h3>Senior Wordpress Developer</h3> <br />
                <div className='fourth-sub-sect'>
                <button className='button-three'>Full Time</button>
                <p>$30/ hr</p>
                </div> <br /> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam necessitatibus nemo reprehenderit eius at exercitationem tenetur error molestiae saepe...<a href="">view more</a></p> <br />
                <button className='btn'>HTML</button>
                <button className='btn'>PHP</button>
                <button className='btn'>CSS</button>
                <button className='btn'>JavaScript</button>
                <button className='btn'>Wordpress</button> <br /> <br />
                <div className='fifth-sub-sect'>
                    <p>Like</p>
                    <p>Comments 15</p>
                    <p>Views 50</p>
                </div>
            </div>

            {/* Top Profiles Section */}
            <div className='second-sect-b'>
            <h3>Top Profiles</h3>
            <img src={more} alt="" className='second-image-b'/>
            </div>
            <div className="third-sect">
                <div className="card">
                    <img src={avatar} alt="" className='cardimage'/>
                    <h4>John Doe</h4>
                    <p>Graphic Designer</p> <br />
                    <button onClick={handleClickOne} className='follow-btn'>{activeBtn ? "Follow" : "Following"}</button>
                    <button className='mail-btn'>Mail</button>
                    <button className='hire-btn'>Hire</button>
                    <h4 className='card-h4'>View Profile</h4>
                </div>
                <div className="card">
                <img src={avatar} alt="" className='cardimage'/>
                    <h4>Jassica</h4> 
                    <p>PHP Developer</p> <br />
                    <button onClick={handleClickTwo} className='follow-btn'>{activeBtnTwo ? "Follow" : "Following"}</button>
                    <button className='mail-btn'>Mail</button>
                    <button className='hire-btn'>Hire</button> 
                    <h4 className='card-h4'>View Profile</h4>
                </div>
                <div className="card">
                <img src={avatar} alt="" className='cardimage'/>
                    <h4>John Doe</h4>
                    <p>Graphic Designer</p> <br />
                    <button onClick={handleClick} className='follow-btn'>{active ? "Follow" : "Following"}</button>
                    <button className='mail-btn'>Mail</button>
                    <button className='hire-btn'>Hire</button>
                    <h4 className='card-h4-2'>View Profile</h4>
                </div>
            </div>

            {/* Another John Doe section */}
            <div className="second-sect">
                <div className='second-sect-b'>
                <div className='second-sub-sect'>
                <img src={avatar} alt=""  />
                <div>
                <h4>John Doe</h4>
                <p>3 min ago</p>
                </div>
                </div> 
                <img src={more} alt="" className='second-image-b' onClick={handleClickIcon}/>
                </div> <br />
                <div className='third-sub-sect'>
                <p>Epic Coder</p>
                <p>India</p>
                </div> <br />
                <h3>Senior Wordpress Developer</h3> <br />
                <div className='fourth-sub-sect'>
                <button className='button-three'>Full Time</button>
                <p>$30/ hr</p>
                </div> <br /> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam necessitatibus nemo reprehenderit eius at exercitationem tenetur error molestiae saepe...<a href="">view more</a></p> <br />
                <button className='btn'>HTML</button>
                <button className='btn'>PHP</button>
                <button className='btn'>CSS</button>
                <button className='btn'>JavaScript</button>
                <button className='btn'>Wordpress</button> <br /> <br />
                <div className='fifth-sub-sect'>
                    <p>Like</p>
                    <p>Comments 15</p>
                    <p>Views 50</p>
                </div>
            </div>


            {/* Last Section */}
            <div className="second-sect">
                <div className='second-sect-b'>
                <div className='second-sub-sect'>
                <img src={avatar} alt=""  />
                <div>
                <h4>John Doe</h4>
                <p>3 min ago</p>
                </div>
                </div> 
                <img src={more} alt="" className='second-image-b' onClick={handleClickIcon}/>
                </div> <br />
                <div className='third-sub-sect'>
                <p>Epic Coder</p>
                <p>India</p>
                </div> <br />
                <h3>Senior Wordpress Developer</h3> <br />
                <div className='fourth-sub-sect'>
                <button className='button-three'>Full Time</button>
                <p>$30/ hr</p>
                </div> <br /> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam necessitatibus nemo reprehenderit eius at exercitationem tenetur error molestiae saepe...<a href="">view more</a></p> <br />
                <button className='btn'>HTML</button>
                <button className='btn'>PHP</button>
                <button className='btn'>CSS</button>
                <button className='btn'>JavaScript</button>
                <button className='btn'>Wordpress</button> <br /> <br />
                <div className='fifth-sub-sect'>
                    <p>Like</p>
                    <p>Comments 15</p>
                    <p>Views 50</p>
                </div>
            </div>

    </div>
  )
}

export default Middlesection








