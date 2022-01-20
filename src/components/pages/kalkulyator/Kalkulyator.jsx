import React from 'react'
import "./Kalkulyator.css"

function Kalkulyator() {
    return (
        <div className='kalkulyator'>
            <div className='kalkulatorBox'>
                <h1>Онлайн калькулятор</h1>
                <span>эту страницу также в своем стиле, не нравится что-то</span>
            </div>
            <div className='kalkulatorContent'>
                <label>Размер инкассируемой наличной денежной выручки в течении месяца</label>
                <input type="text" placeholder='От 1 сума  - до 999 999.99 млн. сум' />
                <button type='button'>Расчитать</button>
            </div>
            <div className='kalkulatorBannerBox'>
                <div className='kalkulatorBanner'>
                     <div className='kalkulatorOne'>
                          <label>Тариф “фиксированная цена” **</label>
                          <label>(абонентская плата  за месяц)</label>
                          <input type="text"  placeholder='60 000' />
                          <label className='kalkulatorLabel'>Тариф “фиксированная цена” **</label>
                          <label>(абонентская плата  за месяц)</label>
                          <input type="text"  placeholder='60 000' />
                          <button>Скачать таблицу</button>
                     </div>
                </div>
                <div className='kalkulatorBanner'>
                     <div className='kalkulatorTwo'>   
                          <label>Тариф “фиксированная цена” **</label>
                          <label>(абонентская плата  за месяц)</label>
                          <input type="text"  placeholder='60 000'/>
                          <label>Тариф “фиксированная цена” **</label>
                          <label>(абонентская плата  за месяц)</label>
                          <input type="text"  placeholder='60 000' />
                          <button>Варианты расчета</button>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Kalkulyator
