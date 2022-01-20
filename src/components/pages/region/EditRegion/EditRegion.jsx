import React from 'react'
import "./EditRegion.css"
import tel from "../../../../assets/images/phone-solid-36.png"
import email from "../../../../assets/images/email.png"

function EditRegion() {
    return (
        <div className='EditRegion'>
            <div className='EditContainer'>
        <div className='EditRegionBox'>
            <div className='accordionTitleFilial'>
             <h2>Филиал1</h2>
           </div>
            <div>
          <div className='EditTitleFilial'>
            <span>ул. Либаво – Роменская,</span>
            <span>Выходной: суб-вс</span>  
          </div>
          <div className="Editcontent">
            <label><img src={tel} alt="" /></label>
            <span>+998 93 555 55 55</span>
          </div>
          <div className='EditTitleFilial'>
            <span>Заявка на инкассацию</span>
          </div>
          <div className="Editcontent">
             <label><img className='EditEmailImg' src={email} alt="" /></label>
             <span>example@gmail.com</span>
          </div> 
            <h3 className='EditTitleFilial'>приёмная</h3>
        </div>
         </div> 
         <div className='EditRegionBox'>
            <div className='EditRegionLabel'>
                 <label>Филиал</label>
                 <input type="text" />
                 <label>redxs</label>
                 <input type="text" />
              </div>
                <div className='EditRegionInput'>
                   <span><img src={tel} alt="" /></span>
                   <input type="text" />
                   </div>
                   <div className='EditRegionLabel'>
                   <label>Заявка на инкассацию</label>
                   <input type="text" />
                </div>
                <div className='EditRegionInput'>
                      <span><img className='EditEmailImage' src={email} alt="" /></span>
                      <input type="text" />
                  </div>
                  <div className='EditRegionLabel'>
                       <label>Приёмная</label>
                       <input type="text" />
                  </div>
              </div>
              <div className='EditUpdateButton'>
                  <button className='Updatebutton' type='button'>Update</button>
              </div>
         </div>  
        </div>
    )
}

export default EditRegion
