import React, { useEffect, useState } from "react";
import "./Services.css";
import { requests } from "../../../../api/requast";
import { Link } from 'react-router-dom';
import axios from "axios"

function Services() {

    const [Services, setServices] = useState([])
    let effect = async () => {
      try {
        let res = await requests.Services.getServices()
        setServices(res.data)
      } catch (error) {
  
      }
    }
    useEffect(() => {
      effect()
    }, [])

    
    return (
        <div className='services'>
            <Link className='ServicesLink' to='/NewServices'>
               <div className='servicesButton'>
                   <button type='button'>Create</button>
               </div>
            </Link>
            <div className='servicesBox'>
                <div className='servicesOne'>
                    {Services.map(e => {
                        
                    <div className='servicesImage'>
                        <input type="file" />
                        <img src={e.image_url} />
                    </div>
                    })}
                </div>
                <div className='servicesTwo'>
                    <div className='servicesTitle'>
                        <input type="text" placeholder='Перевозка ценностей' />
                        <input type="text" placeholder='Стоимость услуги - 5.000.000' />
                    </div>
                    <div className='servicesText'>
                         <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                           ' />
                    </div>
                    <div className='servicesText'>
                         <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          ' />
                    </div>
                    <Link className='servicesEdit' to="/EditServices">
                          <button type='button'>Edit</button>
                    </Link>
                </div>
            </div>
            {/* <div className='servicesBox'>
                <div className='servicesTwo'>
                    <div className='servicesTitle'>
                        <input type="text" placeholder='Перевозка ценностей' />
                    </div>
                    <div className='servicesText'>
                         <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                           laboris nisi ut aliquip ex ea commodo consequat.' />
                    </div>
                    <Link className='servicesEdit2' to="/EditServices">
                          <button type='button'>Edit</button>
                    </Link>
                </div>
                <div className='servicesOne'>
                       {Services.map(e => {
                        <div className='servicesImage'>
                            <input type="file" />
                            <img src={e.image_url} />
                        </div>
                        })}
                </div>
            </div>
            <div className='servicesBox'>
                <div className='servicesOne'>
                    {Services.map(e => {     
                        <div className='servicesImage'>
                            <input type="file" />
                            <img src={e.image_url} />
                        </div>
                        })}
                </div>
                <div className='servicesTwo'>
                    <div className='servicesTitle'>
                        <input type="text" placeholder='Перевозка ценностей' />
                    </div>
                    <div className='servicesText'>
                         <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                           laboris nisi ut aliquip ex ea commodo consequat.' />
                    </div>
                    <Link className='servicesEdit' to="/EditServices">
                          <button type='button'>Edit</button>
                    </Link>
                </div>
            </div>
            <div className='servicesBox'>
                <div className='servicesTwo'>
                    <div className='servicesTitle'>
                        <input type="text" placeholder='Перевозка ценностей' />
                    </div>
                    <div className='servicesText'>
                         <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                           laboris nisi ut aliquip ex ea commodo consequat.' />
                    </div>
                    <Link className='servicesEdit2' to="/EditServices">
                          <button type='button'>Edit</button>
                    </Link>
                </div>
                <div className='servicesOne'>
                      {Services.map(e => {   
                        <div className='servicesImage'>
                            <input type="file" />
                            <img src={e.image_url} />
                        </div>
                        })}
                </div>
            </div> */}
        </div>
    )
}

export default Services
