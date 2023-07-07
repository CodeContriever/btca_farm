import React from 'react';

const Header = ({ children, style, ...props }) => {
  const HeaderStyle = {
    boxSizing: "border-box",
    ...style,
  };

  return(
  <header
  className='box-border w-[100%] bg-white sticky top-0 left-0 right-0 z-[10001] border-b border-black border-opacity-30 py-2 my-0 shadow-[inset 0 -1px #e9eaea]'
    style={HeaderStyle} {...props}>
    {children}
  </header>
  )
};

export default Header;
