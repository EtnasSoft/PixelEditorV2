import React from 'react';
import './App.scss';

import * as Space from 'react-spaces';

function App() {
  return (
    <Space.ViewPort className="mainViewport">
      <Space.Top size="48px" className="header" />
      <Space.Fill>
        <Space.LeftResizable size="20%" className="sidenavLeft" />
        <Space.Fill className="mainContent" />
        <Space.RightResizable size="20%" className="sidenavRight">
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
