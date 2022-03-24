import React from 'react';
import Widget from "../components/Widget";
import WidgetHeader from "../components/WidgetHeader";

import imageData from "../data/image.json";
import styled from "styled-components";

const catImage = require(`../assets/${imageData.path}`);

const StyledImageContainer = styled.figure`
  max-width: 30rem;
  
  & > img {
    border-radius: 5px;
    height: 100%;
    width: 100%;
  }
  
  & > figcaption {
    text-align: center;
  }
`

const ImageWidget = () => {
    return (
        <Widget>
            <WidgetHeader>Foto vanuit JSON</WidgetHeader>
            <StyledImageContainer>
                <img src={catImage} alt={imageData.text} />
                <figcaption>{imageData.text}</figcaption>
            </StyledImageContainer>
        </Widget>
    );
};

export default ImageWidget;
