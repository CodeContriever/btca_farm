import React from 'react';


const ParentCont = ({ children, style, ...props }) => {
  const ParentContStyle = {
    ...style,
  };

  return(
  <div 
  className='box-border w-[100%] relative top-0 left-0 right-0 '
  style={ParentContStyle} 
  {...props}
  >
        {children}
    </div>
  );
};

export default ParentCont;
