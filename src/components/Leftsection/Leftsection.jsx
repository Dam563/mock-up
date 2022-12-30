import React from 'react';
import './leftsection.css';
import avatar from '../../../src/Images/avatar.png';
import more from '../../../src/Images/more.png';
import logo from '../../../src/Images/logo.png';

const Leftsection = () => {
  return (
    <div className='left-section'>
        <div className="first-section">
            <div className='img-div'><img src={avatar} alt="" className="img"/></div>
            <div className='first-section-contents'>
            <p><strong>John Doe</strong></p>
            <p>Graphics Designer at Self Employed</p> <br /> 
            </div>
            <div className='first-section-content'>
            <p>Following</p>
            <p>34</p> <br />
            </div>
            <div className='first-section-content'>
            <p>Followers</p>
            <p>155</p> <br />
            </div>
            <a href="/profile" className='profile-link'>View Profile</a>
        </div>
        {/* Second Section */}
        <div className="second-section">
            <div className='second-section-heading'>
            <h3>Suggestions</h3>
            <div><img src={more} alt="" className='moreimages'/></div>
            </div>
            <div className="second-section-content">
                <div className='div-one'>
                    <div className="div-two">
                    <img src={avatar} alt="" />
                    <div>
                    <h4>Jessica Williams</h4>
                    <p>Graphic Designer</p>
                    </div>
                    </div>
                    <input type="checkbox" name="" id="" />
                </div>
                <div className='div-one'>
                    <div className="div-two">
                    <img src={avatar} alt="" />
                    <div>
                    <h4>John Doe</h4>
                    <p>PHP Developer</p>
                    </div>
                    </div>
                    <input type="checkbox" name="" id="" />
                </div>
                <div className='div-one'>
                    <div className="div-two">
                    <img src={avatar} alt="" />
                    <div>
                    <h4>Poonam</h4>
                    <p>Wordpress Developer</p>
                    </div>
                    </div>
                    <input type="checkbox" name="" id="" />
                </div>
                <div className='div-one'>
                    <div className="div-two">
                    <img src={avatar} alt="" />
                    <div>
                    <h4>Bill Gates</h4>
                    <p>C & C++ Developer</p>
                    </div>
                    </div>
                    <input type="checkbox" name="" id="" />
                </div>
                <div className='div-one'>
                    <div className="div-two">
                    <img src={avatar} alt="" />
                    <div>
                    <h4>Jessica Williams</h4>
                    <p>Graphic Designer</p>
                    </div>
                    </div>
                    <input type="checkbox" name="" id="" />
                </div>
                <div className='div-one'>
                    <div className="div-two">
                    <img src={avatar} alt="" />
                    <div>
                    <h4>John Doe</h4>
                    <p>PHP Developer</p>
                    </div>
                    </div>
                    <input type="checkbox" name="" id="" />
                </div>
                <a href="#" className='fourth-section-link'>View More</a>
            </div>
        </div>
                    <div className="thirdsection">
                        <p>Help Center  | About | Privacy Policy</p> <br />
                        <p>Community Guidelines | Cookies Policy</p> <br />
                        <p>Career | Language | Copyright Policy</p> <br />
                        <div className='third-sec-b'>
                        <img src={logo} alt="" className='left-section-logo'/>
                        <p   className='logo-text'>Workwise</p>
                        <p> &copy; Copyright 2017</p>
                        </div>
                    </div>
    </div>
  );
}

export default Leftsection