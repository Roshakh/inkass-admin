import React from "react";
import "./newManagement.css";

export default function NewManagement() {
  return (
    <div className="newManagement">
      <div className="newManagementTitle">
        <div className="containerone">
          <div className="box"></div>
          <div>
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
        </div>
        <from className="newManagementForm">
          <div className="newManagementItem">
            <h1>Биография</h1>
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
          <div className="newManagementItem">
            <label>Год рождения</label>
            <input type="text" placeholder="02.08.1975" />
          </div>
          <div className="newManagementItem">
            <label>Нацианальность</label>
            <input type="text" placeholder="Узбек" />
          </div>
          <div className="newManagementItem">
            <label>Специальность</label>
            <input type="text" placeholder="Экономист" />
          </div>
          <div className="newManagementItem">
            <label>Телефон</label>
            <input type="text" placeholder="+9989 89 899 99 99" />
          </div>
        </from>
        <button className="newManagementButton">Create</button>
      </div>
    </div>
  );
}
