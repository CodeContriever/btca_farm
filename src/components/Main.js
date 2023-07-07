import React from 'react';

const Main = ({ children, style, ...props }) => {
  const mainStyle = {
    boxSizing: "border-box",
    flex: "1 0 auto",
    flexDirection: "column",
    minHeight: "calc(100vh - 64px)",
    gap: "24px",
    padding: "24px 24px 80px",
    ...style,
  };

  return <div
  className='block mt-[48px] lg:grid grid-rows-auto grid-cols-[264px,minmax(0px,1fr)]'
    style={mainStyle} 
    {...props}
    >
    {children}
  </div>;
};

export default Main;
