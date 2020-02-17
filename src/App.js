import React from 'react';
import './App.scss';

import * as Space from 'react-spaces';
import Menu from './components/HeaderMenu';
import SidebarTools from './components/SidebarTools';
import Workspace from './components/Workspace';
import Footer from './components/Footer';

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  // console.info(t('title'));

  /*const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };*/

  return (
    <Space.ViewPort className="mainViewport">
      <Space.Top size="35px" className="header" order={1}>
        <Menu />
      </Space.Top>
      <Space.Top size="35px" className="tools__bar" order={2}>
        <div className="panel__control upload__control">
          <label htmlFor="data__upload">Upload</label>
          <input type="file" className="data__upload" id="data__upload" accept="*/*" />
        </div>
      </Space.Top>
        <Space.Fill>
          <Space.LeftResizable size="50px" className="sidenav sidenav__tools">
            <SidebarTools />
          </Space.LeftResizable>
          <Space.Fill className="workspace">
            <Workspace />
          </Space.Fill>

          <Space.RightResizable size="20%" className="sidenav sidenav__right">
            <Space.TopResizable size="25%" style={{'backgroundColor': '#111518'}} />
            <Space.Fill style={{'backgroundColor': '#111518'}} />
            <Space.BottomResizable size="25%" style={{'backgroundColor': '#111518'}} />
          </Space.RightResizable>
        </Space.Fill>

      <Space.Bottom size="22px" className="footer">
        <Footer/>
      </Space.Bottom>
    </Space.ViewPort>
  );
}

export default App;
