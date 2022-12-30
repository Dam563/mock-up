import React from 'react'
import Navsection from '../../components/Navsection/Navsection';
import './company.css';

const Company = () => {
  return (
    <div className='company'>
        <Navsection />
        <div className="company-list">
            <p>Some of the companies we have worked for</p>
            <ul>
                <li>Meta</li>
                <li>Google</li>
                <li>MicroSoft</li>
                <li>Silicon Valley</li>
                <li>Stack Overflow</li>
                <li>Twitter</li>
            </ul>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quaerat facere non quisquam modi ut
                 veritatis vero ex nemo, in autem, ipsum laborum id reiciendis odio delectus! Quidem, dolorum illo.</p>
                 <p className='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, quo esse. Incidunt dignissimos 
                    soluta nihil unde qui labore voluptate ipsa! Consequuntur, officiis illo! Hic, accusamus sequi 
                    voluptatem adipisci a iste.</p>
        </div>
    </div>
  )
}

export default Company