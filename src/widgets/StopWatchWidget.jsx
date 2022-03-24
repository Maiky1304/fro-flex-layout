import React, {useEffect, useState} from 'react';
import Widget from "../components/Widget";
import WidgetHeader from "../components/WidgetHeader";
import styled from "styled-components";
import calculateTime from "../util/timeCalculator";

const StopWatchWidget = () => {
    const [totalTime, setTotalTime] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
       let intervalId = -1;

       if (active) {
           intervalId = setInterval(() => {
               setTotalTime(time => time + 10);
           }, 10);
       } else {
           if (intervalId !== -1) {
               clearInterval(intervalId);
           }
       }

       return () => clearInterval(intervalId);
    }, [active]);

    return (
        <Widget>
            <WidgetHeader>Stopwatch</WidgetHeader>
            <StopWatchDisplay time={totalTime} />
            <StopWatchButtonContainer>
                <StopWatchButton onClick={() => setActive(!active)}>Start/Stop</StopWatchButton>
                <StopWatchButton onClick={() => {
                    setActive(false);
                    setTotalTime(0);
                }}>Reset</StopWatchButton>
            </StopWatchButtonContainer>
        </Widget>
    );
};

const StopWatchButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const StopWatchButton = styled.button`
  background: #0092CA;
  color: #eee;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
`

const StopWatchTime = styled.span`
  font-size: 2rem;
`

const StopWatchUnit = styled.span`
  font-size: 1rem;
`

const StopWatchMilliseconds = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;
`

const StopWatchDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StopWatchDisplay = ({ time }) => {
    const data = calculateTime(time);

    return (
        <StopWatchDataContainer>
            {data.hours !== 0 && (
                <div>
                    <StopWatchTime>{data.hours}</StopWatchTime>
                    <StopWatchUnit>h</StopWatchUnit>
                </div>
            )}
            {data.minutes !== 0 && (
                <div>
                    <StopWatchTime>{data.minutes}</StopWatchTime>
                    <StopWatchUnit>m</StopWatchUnit>
                </div>
            )}
            <div>
                <StopWatchTime>{data.seconds}</StopWatchTime>
                <StopWatchUnit>s</StopWatchUnit>
                <StopWatchMilliseconds>{data.milliseconds.toString().substr(0, 2)}</StopWatchMilliseconds>
            </div>
        </StopWatchDataContainer>
    )
}

export default StopWatchWidget;
