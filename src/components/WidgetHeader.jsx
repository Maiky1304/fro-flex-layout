import React from 'react';
import styled from "styled-components";

const WidgetHeaderElement = styled.h2`
  font-weight: 700;
  font-size: 120%;

  position: relative;
  
  :after {
    content: " ";

    position: absolute;
    bottom: -5px;
    left: 0;
    
    height: 0.25rem;
    width: 3rem;
    
    background: #0092CA;
    border-radius: 25px;
  }
`

const WidgetHeader = ({children}) => {
    return (
        <WidgetHeaderElement>
            {children}
        </WidgetHeaderElement>
    );
};

export default WidgetHeader;
