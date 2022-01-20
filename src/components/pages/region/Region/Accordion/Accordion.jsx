import React, { useState } from 'react';
import "./Accordion.css";
import { Link } from "react-router-dom"
import tel from "../../../../../assets/images/phone-solid-36.png"
import email from "../../../../../assets/images/email.png"
import down from '../../../../../assets/images/chevron-down-solid-24.png'
import up from '../../../../../assets/images/chevron-up-regular-24.png'

const Accordion = ({ title,}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className='accordionBox'>
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className='accordionTitle'>{title}</div>
          <div className='accordionOpenBtn'>{isActive ? <img src={up} /> : <img src={down} /> }</div>
        </div>
        <div className='accordionFilialBox'>
        <div className='accordionFilial'>
          {isActive &&
           <div className='accordionTitleFilial'>
             <h2>Филиал1</h2>
           </div>
          }
        <div>
          {isActive &&
          <div className='accordionTitleFilial'>
            <span>ул. Либаво – Роменская,</span>
            <span>Выходной: суб-вс</span>  
          </div>}
          {isActive && 
          <div className="accordion-content">
            <label><img src={tel} alt="" /></label>
            <span>+998 93 555 55 55</span>
          </div>}
          {isActive &&
          <div className='accordionTitleFilial'>
            <span>Заявка на инкассацию</span>
          </div>}
          {isActive && 
          <div className="accordion-content"> 
             <label><img className='accordionEmailImg' src={email} alt="" /></label>
             <span>example@gmail.com</span>
          </div>}
          {isActive && 
            <h3 className='accordionTitleFilial'>приёмная</h3>}
        </div>
        </div>
        <div className='accordionFilial'>
        {isActive &&
           <div className='accordionTitleFilial'>
             <h2>Филиал2</h2>
           </div>
          }
           {isActive &&
          <div className='accordionTitleFilial'>
            <span>ул. Либаво – Роменская,</span>
            <span>Выходной: суб-вс</span>  
          </div>}
        <div>
          {isActive && 
          <div className="accordion-content">
            <label><img src={tel} alt="" /></label>
            <span>+998 93 555 55 55</span>
          </div>}
          {isActive &&
          <div className='accordionTitleFilial'>
            <span>Заявка на инкассацию</span>
          </div>}
          {isActive &&
          <div className="accordion-content">
             <label><img className='accordionEmailImg' src={email} alt="" /></label>
             <span>example@gmail.com</span>
          </div>}
          {isActive && 
            <h3 className='accordionTitleFilial'>приёмная</h3>}
        </div>
        </div>
        <div className='accordionFilial'>
        {isActive &&
           <div className='accordionTitleFilial'>
             <h2>Филиал3</h2>
           </div>
          }
        <div>
        {isActive &&
          <div className='accordionTitleFilial'>
            <span>ул. Либаво – Роменская,</span>
            <span>Выходной: суб-вс</span>  
          </div>}
          {isActive && 
          <div className="accordion-content">
            <label><img src={tel} alt="" /></label>
            <span>+998 93 555 55 55</span>
          </div>}
          {isActive &&
          <div className='accordionTitleFilial'>
            <span>Заявка на инкассацию</span>
          </div>}
          {isActive &&
          <div className="accordion-content">
             <label><img className='accordionEmailImg' src={email} alt="" /></label>
             <span>example@gmail.com</span>
          </div>}
          {isActive && 
            <h3 className='accordionTitleFilial'>приёмная</h3>}
        </div>
        </div>
        </div>
        {isActive &&
        <Link className='AccordionCreateLink' to='/EditRegion'>
        <div className='AccordionCreateBox'>
        <button className='accordionCreateButton'>Edit</button>
        </div></Link>}
        {isActive &&
        <Link className='AccordionCreateLink' to='/NewRegion'>
        <div className='AccordionCreateBox'>
        <button className='accordionCreateButton'>Create</button>
        </div></Link>}
      </div>
    </div>
  );
};

export default Accordion;