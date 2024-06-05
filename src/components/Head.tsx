import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Tquote } from "../types.ts/Quote";
import refreshIcon from "/assets/desktop/icon-refresh.svg";

export default function Head({
  setQuote,
  quote,
  showMore,
}: {
  setQuote: React.Dispatch<React.SetStateAction<Tquote>>;
  quote: Tquote;
  showMore: boolean;
}) {
  async function quotesFetch() {
    const res = await fetch("https://api.quotable.io/random");
    const info = await res.json();
    setQuote(info);
  }
  useEffect(() => {
    quotesFetch();
  }, []);
  return (
    <Container>
      <QuoteCon>
        <p>{quote.content}</p>
        <img src={refreshIcon} alt="" onClick={() => quotesFetch()} />
      </QuoteCon>
      <Para>{quote.author}</Para>
    </Container>
  );
}

const Para = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  @media (min-width: 48rem) {
    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
  }
`;
const QuoteCon = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  & > p {
    width: 45ch;
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    @media (min-width: 48rem) {
      width: 70ch;
      color: #fff;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 155.556% */
    }
  }
  & img {
    align-self: self-start;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (min-width: 48rem) {
    gap: 1.3rem;
  }
`;
