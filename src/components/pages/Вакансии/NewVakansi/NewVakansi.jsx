import React, { useState } from "react";
import "./NewVakansiStyle.css";
import location from "../../../../assets/images/location-plus-regular-36.png"
import time from "../../../../assets/images/time-five-solid-36.png"
import notepad from "../../../../assets/images/notepad-solid-36.png"

export default function NewVakansi() {
  
    const [previewing, setPreviewing] = useState(false);

  return (
    <div className="newVakansi">
        <div className="newVakansiBox">
      <div className="newVakansiTitle">
        <h1>Стажировка по направлению Прикладная математика и информатика</h1> 
      </div>
        <from className="newVakansiForm">
         <div className="newVakansiItemRow">
          <div className="newVakansiItem1">
            <label><img className="newVakansiImage" src={location} alt="" /></label>
            <input className="newVakansiInput" type="text" placeholder="Ташкент" />
          </div>
          <div className="newVakansiItem1">
            <label><img className="newVakansiImage" src={time} alt="" /></label>
            <select className="newVakansiSelect" name="active" id="active">
              <option value="Полный день">Полный день</option>
              <option value="Через день">Через день</option>
            </select>
          </div>
          <div className="newVakansiItem1">
            <label><img className="newVakansiImage" src={notepad} alt="" /></label>
            <input  className="newVakansiInput" type="text" placeholder="10 July 2019" />
          </div>
          </div>
          <div className="newVakansiItemRow">
          <div className="newVakansiItem">
            <label>Требования</label>
             <input className="newVakansiInput1"  type="text" placeholder="Разработка форм в BI системах; 
                Работа с ИТ реестрами" />
            <div className="vakansiPlus">        
            <input className="newVakansiInput1" type="text" placeholder="Разработка форм в BI системах; 
                Работа с ИТ реестрами" />
                <button className="vakansiPlusButton" onClick={() => setPreviewing(!previewing)}>+</button></div>
                {previewing ? (
                    <input className="newVakansiInput1" type='text' placeholder="" />
                ) : null}
          </div>
          <div className="newVakansiItem">
            <label>Важные требования</label>
            <label>Студент старших курсов бакалавриата или магистратуры по направлению прикладная математика или информатика:</label>
            <input type="text" placeholder="Разработка форм в BI системах; 
                Работа с ИТ реестрами" />
          </div>
          </div>
          <button className="newVakansiButton">Create</button>
        </from>
        </div>
    </div>
  );
}

