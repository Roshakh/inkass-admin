import React from 'react'
import "./AsnoviyStyle.css"
import { Publish } from "@mui/icons-material";
import phone from "../../../assets/images/phone-solid-36.png"
import ok from "../../../assets/images/ok-ru-logo-36.png"
import facebook from "../../../assets/images/facebook-logo-36.png"
import w from "../../../assets/images/vk-logo-36.png"
import telegram from "../../../assets/images/telegram-logo-36.png"
import email from "../../../assets/images/email.png"
import location from "../../../assets/images/location-plus-regular-36.png"
import 'boxicons';

function Asnoviy() {
    return (
        <div className='Asnoviy'>
            <div className='AsnoviyBox'>
                <div className='AsnoviyHeader'>
                <div className="AsnoviyNumber">
                        <label className='AsnoviyLabelLeft'>Телефон горячей линии:</label>
                     <div className='AsnoviyLabel'>
                        <span><img className="AsnoviyPhone" src={phone} alt="" /></span>
                        <input className="AsnoviyInput" type="text" placeholder="+99871 244 39 27" />
                     </div>
                </div>
                <div className="AsnoviyNumber">
                        <label className='AsnoviyLabelLeft'>Отдел по работе с клиентами:</label>
                     <div className='AsnoviyLabel'>
                        <span><img className="AsnoviyPhone" src={phone} alt="" /></span>
                        <input className="AsnoviyInput" type="text" placeholder="+99871 244 39 27" />
                     </div>
                </div>
                </div>
                <div className='AsnoviyContent'>
                    <div className='AsnoviyTitle'>
                        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                        <textarea className='AsnoviyTitleInput' type="text" placeholder='Мы вас обслуживаем по всей Республике' />
                    </div>
                    <div className='AsnoviyTitle'>
                        <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
                        <textarea className='AsnoviyTitleInput' type="text" placeholder='Мы объединяем лучшие подходы банков-акционеров и мировые тренды в области наличного денежного обращения.' />
                    </div>
                </div>
                <div className='AsnoviyBannerBox'>
                    <div className='AsnoviyBanner'>
                        <div className='AsnoviyBannerImage'>
                           <label htmlFor="file"><Publish className="ReviewUpdateIcon"/></label>
                           <input type="file" id="file" style={{display:"none"}}/>
                         </div>
                         <div className='AsnoviyBannerColumn'>
                             <label>Ўзбекистон Республикаси</label>
                             <input type="text" />
                             <label> Президенти</label>
                             <input type="text" />
                         </div>
                    </div>
                    <div className='AsnoviyBanner'>
                         <div className='AsnoviyBannerImage'>
                           <label htmlFor="file"><Publish className="ReviewUpdateIcon"/></label>
                           <input type="file" id="file" style={{display:"none"}}/>
                         </div>
                         <div className='AsnoviyBannerColumn'>
                             <label>Ўзбекистон Республикаси</label>
                             <input type="text" />
                             <label> Президенти</label>
                             <input type="text" />
                         </div>
                    </div>
                </div>
                <div className='AsnoviyFooter'>
                    <div className='AsnoviyFooterContent'>
                        <div className='AFooterIBox'>
                            <label><img className='AfooterImageJPG' src={location} alt="" /></label>
                            <input className='AFooterInput' type="text" placeholder='Республика Узбекистан, Ташкен' />
                        </div>
                        <div className='AFooterIBox'>
                            <label><img className='AfooterImageJPG' src={phone} alt="" /></label>
                            <input className='AFooterInput' type="text" placeholder='+99871 244 39 27' />
                        </div>
                        <div className='AFooterIBox'>
                            <label><img className='FooterEmailJpg' src={email} alt="" /></label>
                            <input className='AFooterInput' type="text" placeholder='info@uzinkass.uz' />
                        </div>
                        <div className='AFooterIBox'>
                            <label><img className='AfooterImageJPG' src={ok} alt="" /></label>
                            <input className='AFooterInput' type="text" placeholder='url' />
                        </div>
                        <div className='AFooterIBox'>
                            <label><img className='AfooterImageJPG' src={facebook} alt="" /></label>
                            <input className='AFooterInput' type="text" placeholder='url' />
                        </div>
                    </div>
                    <div className='AsnoviyFooterContentTwo'>
                        <div className='AFooterITwo'>
                            <label className='AFooterLabelTwo'>Сейчас на сайте:</label>
                            <input className='AFooterInputTwo' type="text" placeholder='Пользователи: 0' />
                        </div>
                        <div className='AFooterITwo'>
                            <label className='AFooterLabelTwo'>Последнее обновление:</label>
                            <input className='AFooterInputTwo' type="text" placeholder='23 сентября 2021-12:54' />
                        </div>
                        <div className='AFooterIBox'>
                            <label><img className='AfooterImageJPG' src={w} alt="" /></label>
                            <input className='AFooterInput' type="text" placeholder='url' />
                        </div>
                        <div className='AFooterIBox'>
                            <label><img className='AfooterImageJPG' src={telegram} alt="" /></label>
                            <input className='AFooterInput' type="text" placeholder='url' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asnoviy
