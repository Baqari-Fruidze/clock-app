import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Tquote } from "../types.ts/Quote";
import refreshIcon from "/assets/desktop/icon-refresh.svg";

export default function Head({
  setQuote,
  quote,
}: {
  setQuote: React.Dispatch<React.SetStateAction<Tquote>>;
  quote: Tquote;
}) {
  async function quotesFetch() {
    const res = await fetch("https://api.quotable.io/random");
    const info = await res.json();
    setQuote(info);
  }
  console.log(quote);
  useEffect(() => {
    quotesFetch();
  }, []);
  return (
    <Container>
      <QuoteCon>
        <p>{quote.content}</p>
        <img src={refreshIcon} alt="" />
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
  line-height: 22px; /* 183.333% */
`;
const QuoteCon = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  & > p {
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;