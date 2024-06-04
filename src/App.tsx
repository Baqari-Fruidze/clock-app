import styled from "styled-components";
import { Tquote } from "./types.ts/Quote";
import { useEffect } from "react";
import dayMobile from "/assets/mobile/bg-image-daytime.jpg";
import { useState } from "react";
import Head from "./components/Head";

function App() {
  const [quote, setQuote] = useState<Tquote>({
    author: "",
    authorSlug: "",
    content: "",
    dateAdded: "",
    dateModified: "",
    length: 0,
    tags: [],
    id: "",
  });
  return (
    <Parent>
      <Head setQuote={setQuote} quote={quote} />
    </Parent>
  );
}

const Parent = styled.div`
  padding: 3.2rem 2.5rem 4rem 2.6rem;
  background-image: url(${dayMobile});
  background-repeat: no-repeat;
  background-size: cover;
`;
export default App;
