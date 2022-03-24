import React from 'react';
import styled from "styled-components";

const WidgetElement = styled.div`
  position: relative;
  
  padding: 0.5rem 1rem;
  background: #31363d;
  
  border-radius: 5px;
  
  & * {
    color: #eeeeee;
    font-size: 1rem;
    font-weight: 400;
  }
  
  & > * {
    margin: 1rem 0;
  }
`

const Widget = ({ children }) => {
    return (
        <WidgetElement>
            {children}
        </WidgetElement>
    );
};

export default Widget;