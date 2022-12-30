import React from 'react';
import './rightsection.css';
import avatar from '../../../src/Images/avatar.png';
import more from '../../../src/Images/more.png';
import logo from '../../../src/Images/logo.png';



const Rightsection = () => {
  return (
    <div className='right-section'>
        <div className="first-sections">
           <div><img src={logo} alt="" className='logo-img'/></div>
           <div className='first-section-text'>
            <h3>Track Time on Workwise</h3>
            <p>Pay only for the Hours worked</p> 
            </div>
            <h3>Sign up</h3>
            <a href="" className='learnmore-link'>Learn More</a>
        </div>
          <div className="second-sections">
            <div className="head-sect">
             <div><h3 className='second-sections-heading'>Top Jobs</h3></div>
             <div><img src={more} alt="" className='more-image'/></div>
             </div>
             
             <div className="roles">
                <div className='role'>
                    <div className='first-role'>
                        <h4>Senior Product Designer</h4>
                        <p>Lorem ipsum dolor sit amet, consecteteur adip
                            sing elit.
                        </p>
                    </div>
                        <div className='first-role'><h4>$25/ hr</h4></div>
                </div> <br /> <br />
                <div className='role'>
                    <div>
                        <h4>Senior UI/ UX Designer</h4>
                        <p>Lorem ipsum dolor sit amet, consecteteur adip
                            sing elit.
                        </p>
                    </div>
                        <div><h4>$25/ hr</h4></div>
                </div> <br /> <br />
                <div className='role'>
                    <div>
                        <h4>Junior Seo Designer</h4>
                        <p>Lorem ipsum dolor sit amet, consecteteur adip
                            sing elit.
                        </p>
                    </div>
                        <div><h4>$25/ hr</h4></div>
                </div> <br /> <br />
                <div className='role'>
                    <div>
                        <h4>Senior PHP Designer</h4>
                        <p>Lorem ipsum dolor sit amet, consecteteur adip
                            sing elit.
                        </p>
                    </div>
                        <div><h4>$25/ hr</h4></div>
                </div> <br /> <br />
                <div className='role'>
                    <div>
                        <h4>Senior Developer Designer</h4>
                        <p>Lorem ipsum dolor sit amet, consecteteur adip
                            sing elit.
                        </p>
                    </div>
                        <div><h4>$25/ hr</h4></div>
                </div>
             </div>
          </div>

          <div className="third-sections">
            <div className='third-sections-head'>
             <h3 className='third-section-heading'>Most Viewed This Week</h3>
             <div><img src={more} alt="" className='more-images'/></div>
             </div>
             <div className="roles">
                <div className='role'>
                    <div className='first-role'>
                        <h4>Senior Product Designer</h4>
                        <p>Lorem ipsum dolor sit amet, consecteteur adip
                            sing elit.
                        </p>
                    </div>
                        <div className='first-role'><p>$25/ hr</p></div>
                </div> <br /> <br />
                <div className='role'>
                    <div>
                        <h4>Senior UI/ UX Designer</h4>
                        <p>Lorem ipsum dolor sit amet, consecteteur adip
                            sing elit.
                        </p>
                    </div>
                        <div><p>$25/ hr</p></div>
                </div> <br /> <br />
                <div className='role'>
                    <div>
                        <h4>Junior Seo Designer</h4>
                        <p>Lorem ipsum dolor sit amet, consecteteur adip
                            sing elit.
                        </p>
                    </div>
                        <div><p>$25/ hr</p></div>
                </div>
                
             </div>
          </div>
        
          <div className="fourth-section">
            <div className='fourth-section-heading'>
            <h3>Most Viewed People</h3>
            <div><img src={more} alt="" className='more-images'/></div>
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
        
        
        
    </div>
  )
}

export default Rightsection