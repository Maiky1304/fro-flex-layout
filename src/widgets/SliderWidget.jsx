import React from 'react';
import Widget from "../components/Widget";
import WidgetHeader from "../components/WidgetHeader";
import styled from "styled-components";
import {useFont} from "../context/FontContext";

const SliderDataContainer = styled.div`
  margin-top: 2rem;
  padding: 0 5rem 0 0;
`

const SliderRangeInput = styled.input`
  ::-webkit-slider-runnable-track {
    background: #0092CA;
  }  
`

const SliderWidget = () => {
    const [fontSize, setFontSize] = useFont();

    return (
        <Widget>
            <WidgetHeader>Slider Widget</WidgetHeader>
            <SliderDataContainer>
                <h3>Font size: {fontSize}rem</h3>
                <SliderRangeInput type="range" min={1} max={2} step="1" value={fontSize} onChange={({ target }) =>
                    setFontSize(Number.parseInt(target.value))} />
            </SliderDataContainer>
        </Widget>
    );
};

export default SliderWidget;
