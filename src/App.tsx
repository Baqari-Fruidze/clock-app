import styled from "styled-components";
import { Tquote } from "./types.ts/Quote";
import { useEffect } from "react";
import dayMobile from "/assets/mobile/bg-image-daytime.jpg";
import nightMobile from "/assets/mobile/bg-image-nighttime.jpg";
import dayTablet from "/assets/tablet/bg-image-daytime.jpg";
import nightTablet from "/assets/tablet/bg-image-nighttime.jpg";
import sunIcon from "/assets/desktop/icon-sun.svg";
import moonIcon from "/assets/desktop/icon-moon.svg";
import { useState } from "react";
import Head from "./components/Head";
import { TtimeData } from "./types.ts/Time";
import Btn from "./components/Btn";
import Foot from "./components/Foot";
import { useMediaQuery } from "@uidotdev/usehooks";
import nightDesktop from "/assets/desktop/bg-image-nighttime.jpg";
import dayDesktop from "/assets/desktop/bg-image-daytime.jpg";

function App() {
  const textToShow = useMediaQuery("only screen and (min-width : 768px)");
  const [showMore, setShowMore] = useState<boolean>(false);
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
  const locationCity = data.timezone.split("/")[1];
  const locationContinent = data.timezone.split("/")[0];
  return (
    <Parent day={day} showMore={showMore}>
      {showMore ? null : (
        <Head setQuote={setQuote} quote={quote} showMore={showMore} />
      )}
      <TimeAndBtnCon>
        <TimeCon>
          <SunCon onClick={() => setDay(!day)}>
            {day ? <img src={moonIcon} alt="" /> : <img src={sunIcon} alt="" />}
            {day ? (
              <p>GOOD EVENING {textToShow ? ", IT’S CURRENTLY " : null} </p>
            ) : (
              <p>GOOD MORNING {textToShow ? ", IT’S CURRENTLY " : null}</p>
            )}
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
        <Btn showMore={showMore} setShowMore={setShowMore} />
      </TimeAndBtnCon>
      {showMore ? <Foot data={data} day={day} /> : null}
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
    @media (min-width: 48rem) {
      color: #fff;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px; /* 155.556% */
      letter-spacing: 3.6px;
      text-transform: uppercase;
    }
    @media (min-width: 90rem) {
      color: #fff;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px; /* 116.667% */
      letter-spacing: 4.8px;
      text-transform: uppercase;
    }
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
    @media (min-width: 48rem) {
      color: #fff;
      font-family: Inter;
      font-size: 175px;
      font-style: normal;
      font-weight: 700;
      line-height: 175px; /* 100% */
      letter-spacing: -4.375px;
    }
    @media (min-width: 90rem) {
      color: #fff;
      font-family: Inter;
      font-size: 200px;
      font-style: normal;
      font-weight: 700;
      line-height: 200px; /* 100% */
      letter-spacing: -5px;
    }
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
    @media (min-width: 48rem) {
      color: #fff;
      font-family: Inter;
      font-size: 32px;
      font-style: normal;
      font-weight: 300;
      line-height: 28px; /* 87.5% */
      text-transform: uppercase;
    }
    @media (min-width: 90rem) {
      color: #fff;
      font-family: Inter;
      font-size: 40px;
      font-style: normal;
      font-weight: 300;
      line-height: 28px; /* 70% */
      text-transform: uppercase;
    }
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
    @media (min-width: 48rem) {
      color: #fff;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 155.556% */
      letter-spacing: 3.6px;
      text-transform: uppercase;
    }
    @media (min-width: 90rem) {
      color: #fff;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 140% */
      letter-spacing: 4px;
      text-transform: uppercase;
    }
  }
`;
const TimeCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  @media (min-width: 48rem) {
    gap: 0;
  }
`;
const TimeAndBtnCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  @media (min-width: 48rem) {
    gap: 8rem;
  }
  @media (min-width: 90rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Parent = styled.div<{ day: boolean; showMore: boolean }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.showMore ? null : "space-between")};
  z-index: 2;
  position: relative;
  padding: ${(props) =>
    props.showMore ? " 10rem 2.5rem 4rem 2.6rem" : "3.2rem 2.5rem 4rem 2.6rem"};
  background-image: ${(props) =>
    props.day ? ` url(${nightMobile})` : `url(${dayMobile})`};
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    position: absolute;
    content: "";
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  @media (min-width: 48rem) {
    padding: ${(props) =>
      props.showMore ? "15.3rem 2rem 2rem 6.4rem" : "8rem 13rem 6.4rem 6.4rem"};
    background-image: ${(props) =>
      props.day ? ` url(${nightTablet})` : `url(${dayTablet})`};
  }
  @media (min-width: 90rem) {
    background-image: ${(props) =>
      props.day ? ` url(${nightDesktop})` : `url(${dayDesktop})`};
    padding: 5.6rem 16.5rem 9.6rem 16.5rem;
  }
`;
export default App;
