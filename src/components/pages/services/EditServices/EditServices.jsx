import React from 'react';
import "./EditServices.css";
import { Link } from 'react-router-dom';

function EditServices() {
    return (
        <div className='Editservices'>
            <Link className='EditServicesLink' to='/Services'>
               <div className='EditservicesButton'>
                   <button type='button'>Update</button>
               </div>
            </Link>
            <div className='EditservicesBox'>
                <div className='EditservicesOne'>
                    <div className='EditservicesImage'>
                        <input type="file" />
                    </div>
                </div>
                <div className='EditservicesTwo'>
                    <div className='EditservicesTitle'>
                        <input type="text" placeholder='Перевозка ценностей' />
                    </div>
                    <div className='EditservicesText'>
                         <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                           laboris nisi ut aliquip ex ea commodo consequat.' />
                    </div>
                    <Link className='EditservicesEdit' to="/EditServices">
                          <button type='button'>Save</button>
                    </Link>
                </div>
            </div>
            <div className='EditservicesBox'>
                <div className='EditservicesTwo'>
                    <div className='EditservicesTitle'>
                        <input type="text" placeholder='Перевозка ценностей' />
                    </div>
                    <div className='EditservicesText'>
                         <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                           laboris nisi ut aliquip ex ea commodo consequat.' />
                    </div>
                    <Link className='EditservicesEdit2' to="/EditServices">
                          <button type='button'>Save</button>
                    </Link>
                </div>
                <div className='EditservicesOne'>
                    <div className='EditservicesImage'>
                        <input type="file" />
                    </div>
                </div>
            </div>
            <div className='EditservicesBox'>
                <div className='EditservicesOne'>
                    <div className='EditservicesImage'>
                        <input type="file" />
                    </div>
                </div>
                <div className='EditservicesTwo'>
                    <div className='EditservicesTitle'>
                        <input type="text" placeholder='Перевозка ценностей' />
                    </div>
                    <div className='EditservicesText'>
                         <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                           laboris nisi ut aliquip ex ea commodo consequat.' />
                    </div>
                    <Link className='EditservicesEdit' to="/EditServices">
                          <button type='button'>Save</button>
                    </Link>
                </div>
            </div>
            <div className='EditservicesBox'>
                <div className='EditservicesTwo'>
                    <div className='EditservicesTitle'>
                        <input type="text" placeholder='Перевозка ценностей' />
                    </div>
                    <div className='EditservicesText'>
                         <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                           laboris nisi ut aliquip ex ea commodo consequat.' />
                    </div>
                    <Link className='EditservicesEdit2' to="/EditServices">
                          <button type='button'>Save</button>
                    </Link>
                </div>
                <div className='EditservicesOne'>
                    <div className='EditservicesImage'>
                        <input type="file" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditServices


