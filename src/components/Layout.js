import React from 'react';


const Layout = ({ children, style, ...props }) => {
  const layoutStyle = {
    ...style, // Merge provided styles with default styles
  };

  return(
  <div 
  // className='box-border max-w-xl lg:max-w-7xl mx-auto lg:px-4 my-0 py-0 relative top-0 left-0 right-0 overflow-hidden'
  className="flex flex-wrap justify-between items-center container mx-auto overflow-hidden py-4 md:py-8 lg:py-12 px-8 md:px-12 lg:px-20"
  style={layoutStyle} 
  {...props}
  >
        {children}
    </div>
  );
};

export default Layout;
