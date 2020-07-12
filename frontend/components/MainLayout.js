import React from 'react';

const MainLayout = ({ children }) => (
  <div className="main-container">
    <div className="content-wrapper">{children}</div>
  </div>
);

export default MainLayout;
