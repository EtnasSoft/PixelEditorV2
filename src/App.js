import React from 'react';
import './App.scss';

import * as Space from 'react-spaces';
import Menu from './components/HeaderMenu';
import SidebarTools from './components/SidebarTools';

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  // console.info(t('title'));

  /*const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };*/

  return (
    <Space.ViewPort className="mainViewport">
      <Space.Top size="35px" className="header" order={1} />
      <Space.Top size="35px" className="tools__bar" order={2}>
        <Menu />
      </Space.Top>
        <Space.Fill>
          <Space.LeftResizable size="50px" className="sidenav sidenav__tools">
            <SidebarTools />
          </Space.LeftResizable>
          <Space.Fill className="workspace">
            <h1>{t('title')}</h1>
          </Space.Fill>

          <Space.RightResizable size="20%" className="sidenav sidenav__right">
            <Space.TopResizable size="25%" style={{'backgroundColor': '#111518'}} />
            <Space.Fill style={{'backgroundColor': '#111518'}} />
            <Space.BottomResizable size="25%" style={{'backgroundColor': '#111518'}} />
          </Space.RightResizable>
        </Space.Fill>

      <Space.Bottom size="22px" className="footer" />
    </Space.ViewPort>
  );
}

export default App;
