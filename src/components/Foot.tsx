import React from "react";
import { TtimeData } from "../types.ts/Time";
import styled from "styled-components";

export default function Foot({ data, day }: { data: TtimeData; day: boolean }) {
  return (
    <Parent day={day}>
      <TimeZoneDay>
        <Mini>
          <Span>CURRENT TIMEZONE</Span>
          <Para>{data.timezone}</Para>
        </Mini>
        <Mini>
          <Span>Day of the year</Span>
          <Para>{data.day_of_year}</Para>
        </Mini>
      </TimeZoneDay>
      <TimeZoneDay>
        <Mini>
          <Span>Day of the week</Span>
          <Para>{data.day_of_week}</Para>
        </Mini>
        <Mini>
          <Span>Week number</Span>
          <Para>{data.week_number}</Para>
        </Mini>
      </TimeZoneDay>
    </Parent>
  );
}
const Para = styled.p`
  color: #fff;
  text-align: right;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 48rem) {
    color: #303030;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-self: self-start;
  }
  @media (min-width: 90rem) {
    color: #303030;
    font-family: Inter;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const Span = styled.span`
  color: #fff;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 280% */
  letter-spacing: 2px;
  text-transform: uppercase;
  @media (min-width: 48rem) {
    color: #303030;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 215.385% */
    letter-spacing: 2.6px;
    text-transform: uppercase;
  }
  @media (min-width: 90rem) {
    color: #303030;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 186.667% */
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`;
const Mini = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 48rem) {
    flex-direction: column;
    justify-content: center;
  }
`;
const TimeZoneDay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Parent = styled.div<{ day: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(20.387113571166992px);
  width: 100%;
  background: ${(props) =>
    props.day ? "rgba(0, 0, 0, 0.75)" : "rgba(255, 255, 255, 0.75)"};
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 4.8rem 2.6rem;
  @media (min-width: 48rem) {
    padding: 12rem 16.8rem 12rem 6.4rem;
    gap: 4.9rem;
  }
  @media (min-width: 90rem) {
    padding: 7.4rem 43rem 7.4rem 16.5rem;
    gap: 4.2rem;
  }
`;
