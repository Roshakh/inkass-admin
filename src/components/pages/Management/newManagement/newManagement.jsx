import React from "react";
import "./newManagement.css";
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';

export default function NewManagement() {
  
  const [toggleState, setToggleState] = useState(1);

    const ToggleTab = (index) => {
      setToggleState(index)
    }

  return (
    <div className="newManagement">
      <div className="newManagementTitle">
        <div className="containerone">
          <div className="rowone">
          <div className="box"></div>
            <div className="column">
            <div className="generalManagementFullname">
              <label className="label">Полное имя</label>
              <input
                className="input"
                placeholder="Ройтман Рафаэль Евгеньевич"
                type="text"
              />
            </div>
            <div className="generalManagement">
              <label className="label">Должность</label>
              <input className="input" placeholder="Директор" type="text" />
            </div>
            </div>
            </div>
            <div className="row">
              <div className="generalManagementUploadImg">
                <label>Загрузить изображение</label>
                <input className="input" type="file" />
              </div>
              <div className="generalManagement01">
                <label>Телефон:</label>
                <input placeholder="+9989 89 899 99 99" className="input" type="text" />
              </div>
              <div className="generalManagement01">
                <label>Факс:</label>
                <input placeholder="+9989 89 899 99 99" className="input" type="text" />
              </div>
              <div className="generalManagement01">
                <label>E-mail:</label>
                <input placeholder="info@cbu.uz" className="input" type="text" />
              </div>
            </div>
        </div>
        <from className="newManagementForm">
          <div className="newMenegamentSlider">
            <div className="managementFirst">
            <div 
            className={toggleState === 1 ? "biografia" : "tabs"}
            onClick={() => ToggleTab(1)}>
              <div className="aftor">Биография</div>
            </div>
            </div>
            <div className="managementFirst">
            <div  className={toggleState === 2 ? "biografia" : "tabs"}
            onClick={() => ToggleTab(2)}>
              <div className="aftor">Должостные обязанности</div>
            </div>
            </div>
            <div className="managementFirst">
            <div  className={toggleState === 3 ? "biografia" : "tabs"}
            onClick={() => ToggleTab(3)}>
              <div className="aftor">График приёма граждан</div>
            </div>
            </div>
          </div>
          <div 
          className={toggleState === 1 ? "ManagementTab active-content" : "ManagementTab"}
          >
          <div className="newManagementrow">
          <div className="newManagementItem">
            <label>Место работы, должность</label>
            <input
              type="text"
              placeholder="Заместитель Председателя Центрального банка – член Правления"
            />
          </div>
          <div className="newManagementItem">
            <label>Место рождения</label>
            <input type="text" placeholder="Узбекистан" />
          </div>
          </div>
          <div className="newManagementrow">
          <div className="newManagementItem">
            <label>Образование</label>
            <input
              type="text"
              placeholder="Высшее, в 1977 году поступил на учёбу в Ташкентский институт народного хозяйства, а в 1982 году окончил Ленинградский экономико-финансовый институт"
            />
          </div>
            <div className="newManagementItem">
              <label>Стаж работы взанимаемой должности</label>
              <input type="text" placeholder="19 лет" />
            </div>
          </div>
          <div className="newManagementrow">
            <div className="newManagementItem">
              <label>Год рождения</label>
              <input type="text" placeholder="02.08.1975" />
            </div>
            <div className="newManagementItem">
              <label>Нацианальность</label>
              <input type="text" placeholder="Узбек" />
            </div>
          </div>
          <div className="newManagementrow">
            <div className="newManagementItem">
              <label>Специальность</label>
              <input type="text" placeholder="Экономист" />
            </div>
            <div className="newManagementItem">
              <label>Телефон</label>
              <input type="text" placeholder="+9989 89 899 99 99" />
            </div>
          </div>
          <button className="newManagementButton">Create</button>
          </div>
         
        </from>
        <div className={toggleState === 2 ? "ManagementTab active-content" : "ManagementTab"}>
            <div className="ManagementTextBox">
              <textarea className="ManagementText"></textarea> 
            </div>
        </div>
        <div className={toggleState === 3 ? "ManagementTab active-content" : "ManagementTab"}>
          <div className="GraficPriyomaGrajdan">
            <div className="newGrafic">
              <div className="newgraficinput">ПН</div>
              <input className="newgraficrow" placeholder="09:00-11:00" />
            </div>
            <div className="newGrafic">
              <div className="newgraficinput">ВТ</div>
              <input className="newgraficrow" placeholder="09:00-11:00" />
            </div>
            <div className="newGrafic">
              <div className="newgraficinput">СР</div>
              <input className="newgraficrow" placeholder="09:00-11:00" />
            </div>
            <div className="newGrafic">
              <div className="newgraficinput">ЧТ</div>
              <input className="newgraficrow" placeholder="09:00-11:00" />
            </div>
            <div className="newGrafic">
               <div className="newgraficinput">ПТ</div>
               <input className="newgraficrow" placeholder="09:00-11:00" />
            </div>
            <div className="newGrafic">
               <div className="newgraficinput">СБ</div>
               <input className="newgraficrow" placeholder="09:00-11:00" />
            </div>
            <div className="newGrafic">
               <div className="newgraficinput">ВС</div>
               <input className="newgraficrow" placeholder="09:00-11:00" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
