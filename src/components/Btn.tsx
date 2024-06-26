import React from "react";
import styled from "styled-components";
import arrowDown from "/assets/desktop/icon-arrow-down.svg";

export default function Btn({
  showMore,
  setShowMore,
}: {
  showMore: boolean;
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Con onClick={() => setShowMore(!showMore)} showMore={showMore}>
      <span>{showMore ? "LESS" : "MORE"} </span>
      <Circle showMore={showMore}>
        <img src={arrowDown} alt="" />
      </Circle>
    </Con>
  );
}

const Circle = styled.div<{ showMore: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(48, 48, 48, 1);
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  @media (min-width: 90rem) {
    width: 4rem;
    height: 4rem;
  }
  & img {
    transform: ${(props) => (props.showMore ? null : "rotate(180deg)")};
  }
`;
const Con = styled.div<{ showMore: boolean }>`
  margin-bottom: ${(props) => (props.showMore ? "4rem " : null)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.4rem 0.4rem 1.7rem;
  width: 11.5rem;
  border-radius: 28px;
  background: #fff;
  @media (min-width: 90rem) {
    padding: 0.8rem 0.9rem 0.8rem 2.1rem;
    width: 14.6rem;
    align-self: self-end;
  }
  & span {
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 3.75px;
    text-transform: uppercase;
    opacity: 0.5;
    @media (min-width: 90rem) {
      color: #000;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px; /* 175% */
      letter-spacing: 5px;
      text-transform: uppercase;
    }
  }
`;
