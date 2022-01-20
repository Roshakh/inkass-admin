import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  Analytics,
  Equalizer,
  MonetizationOn,
  DriveEta,
  PersonOutline,
  CompareArrows,
  Report,
  Email,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Базовый
            </li>
            </Link>
            <Link to="/newReview">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Что о нас говорят?
            </li>
            </Link>
            <Link to="/Vakansi"  className="link">
              <li className="sidebarListItem">
              <MonetizationOn className="sidebarIcon" />
                Вакансии 
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <DriveEta className="sidebarIcon" />
                Водители 
              </li>
            </Link>
            <Link to="clients" className="link">
              <li className="sidebarListItem">
                <PersonOutline className="sidebarIcon" />
                Клиент
              </li>
            </Link>
            <Link to="ManagementList">
            <li className="sidebarListItem">
              <CompareArrows className="sidebarIcon" />
              Руководство
            </li>
            </Link>
            <Link to="Asnoviy" className="link">
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" />
              Асновый
            </li>
            </Link>
            <Link to="Table" className="link">
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" />
              Таблица 
            </li>
            </Link>
            <Link to="services" className="link">
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" />
              Services
            </li>
            </Link>
            <Link to="region" className="link">
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" />
              Region
            </li>
            </Link>
            <Link to="Kalkulyator" className="link">
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" />
              Kalkulyator
            </li>
            </Link>
            <Link to="Vaprosi" className="link">
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" />
             Вопросы
            </li>
            </Link>
            <Link to="Portfoli" className="link">
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" />
              Портфолио
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Уведомления </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email className="sidebarIcon" />
              Почта 
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Обратная связь
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Сообщения
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Штат сотрудников</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Базовый 
            </li>
            <li className="sidebarListItem">
              <Equalizer className="sidebarIcon" />
              Анализ
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Отчет
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
