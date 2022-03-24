import React from 'react';
import styled from "styled-components";

const WidgetLayoutElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  margin: 1rem;
  
  gap: 2rem;
`

const WidgetLayout = ({ children }) => {
    return (
        <WidgetLayoutElement>
            {children}
        </WidgetLayoutElement>
    );
};

export default WidgetLayout;
