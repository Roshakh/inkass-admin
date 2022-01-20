import React from 'react'
import "./NewRegion.css"
import tel from "../../../../assets/images/phone-solid-36.png"
import email from "../../../../assets/images/email.png"

function NewRegion() {
    return (
        <div className='newRegion'>
            <div className='newRegionBorder'>
                <div className='newRegionBox'>
                   <div className='newRegionRow'>
                       <div className='newRegionLabel'>
                       <label>Филиал</label>
                       <input type="text" />
                       <label>redxs</label>
                       <input type="text" />
                       </div>
                       <div className='newRegionInput'>
                           <span><img src={tel} alt="" /></span>
                           <input type="text" />
                       </div>
                       <div className='newRegionLabel'>
                       <label>Заявка на инкассацию</label>
                       <input type="text" />
                       </div>
                       <div className='newRegionInput'>
                           <span><img className='RegionEmailImage' src={email} alt="" /></span>
                           <input type="text" />
                       </div>
                       <div className='newRegionLabel'>
                       <label>Приёмная</label>
                       <input type="text" />
                       </div>
                   </div>
                   <div className='newRegionRow'>
                       <div className='newRegionLabel'>
                         <label>Филиал</label>
                         <input type="text" />
                         <label>redxs</label>
                         <input type="text" />
                       </div>
                       <div className='newRegionInput'>
                           <span><img src={tel} alt="" /></span>
                           <input type="text" />
                       </div>
                       <div className='newRegionLabel'>
                       <label>Заявка на инкассацию</label>
                       <input type="text" />
                       </div>
                       <div className='newRegionInput'>
                           <span><img className='RegionEmailImage' src={email} alt="" /></span>
                           <input type="text" />
                       </div>
                       <div className='newRegionLabel'>
                       <label>Приёмная</label>
                       <input type="text" />
                       </div>
                   </div>
                   <div className='newRegionRow'>
                       <div className='newRegionLabel'>
                         <label>Филиал</label>
                         <input type="text" />
                         <label>redxs</label>
                         <input type="text" />
                       </div>
                       <div className='newRegionInput'>
                           <span><img src={tel} alt="" /></span>
                           <input type="text" />
                       </div>
                       <div className='newRegionLabel'>
                       <label>Заявка на инкассацию</label>
                       <input type="text" />
                       </div>
                       <div className='newRegionInput'>
                           <span><img className='RegionEmailImage' src={email} alt="" /></span>
                           <input type="text" />
                       </div>
                       <div className='newRegionLabel'>
                       <label>Приёмная</label>
                       <input type="text" />
                       </div>
                   </div>
                </div>
                <div><button className='newSaveButton' type='button'>Save</button></div>
            </div>
        </div>
    )
}

export default NewRegion
