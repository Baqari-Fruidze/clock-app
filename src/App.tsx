import styled from "styled-components";
import { Tquote } from "./types.ts/Quote";
import { useEffect } from "react";
import dayMobile from "/assets/mobile/bg-image-daytime.jpg";
import nightMobile from "/assets/mobile/bg-image-nighttime.jpg";
import sunIcon from "/assets/desktop/icon-sun.svg";
import { useState } from "react";
import Head from "./components/Head";
import { TtimeData } from "./types.ts/Time";
import Btn from "./components/Btn";

function App() {
  const [day, setDay] = useState<boolean>(false);
  const [data, setData] = useState<TtimeData>({
    abbreviation: "",
    client_ip: "",
    datetime: "",
    day_of_week: 0,
    day_of_year: 0,
    dst: false,
    dst_from: null,
    dst_offset: 0,
    dst_until: null,
    raw_offset: 0,
    timezone: "",
    unixtime: 0,
    utc_datetime: "",
    utc_offset: "",
    week_number: 0,
  });
  useEffect(() => {
    TimeFetch();
  }, []);
  async function TimeFetch() {
    const res = await fetch("http://worldtimeapi.org/api/ip");
    const info = await res.json();
    setData(info);
  }

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
  console.log(data);
  const locationCity = data.timezone.split("/")[1];
  const locationContinent = data.timezone.split("/")[0];
  return (
    <Parent>
      <Head setQuote={setQuote} quote={quote} />
      <TimeAndBtnCon>
        <TimeCon>
          <SunCon>
            <img src={sunIcon} alt="" />
            <p>GOOD MORNING</p>
          </SunCon>
          <CurrentTimeCon>
            <span>{data.datetime.slice(11, 16)}</span> <p>BST</p>
          </CurrentTimeCon>
          <LocationCon>
            <span>
              IN {locationCity} , {locationContinent}
            </span>
          </LocationCon>
        </TimeCon>
        <Btn />
      </TimeAndBtnCon>
    </Parent>
  );
}
const LocationCon = styled.div`
  display: flex;
  align-items: center;
  & span {
    color: #fff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 186.667% */
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`;
const CurrentTimeCon = styled.div`
  display: flex;
  & > span {
    color: #fff;
    font-family: Inter;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: 100px; /* 100% */
    letter-spacing: -2.5px;
  }
  & p {
    color: #fff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 28px; /* 186.667% */
    text-transform: uppercase;
    align-self: self-end;
  }
`;
const SunCon = styled.div`
  align-items: center;
  display: flex;
  gap: 1.6rem;
  & > p {
    color: #fff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`;
const TimeCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const TimeAndBtnCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;
const Parent = styled.div`
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  position: relative;
  padding: 3.2rem 2.5rem 4rem 2.6rem;
  background-image: url(${dayMobile});
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    position: absolute;
    content: "";
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;
export default App;
