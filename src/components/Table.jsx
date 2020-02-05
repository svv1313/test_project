import React, { Fragment, useEffect } from "react";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import moment from "moment";
import "../styles/table.css";

const GET_INFO = gql`
  subscription onBetAdded {
    betAdded {
      id
      time
      bet
      payout
      profit
    }
  }
`;
const newArray = [];
export default function Table() {
  const { data, loading } = useSubscription(GET_INFO);
  useEffect(() => {
    try {
      const elements = document.querySelectorAll(".bets-table .td");
      elements.forEach(e=>{
        e.animate(
          [
            { transform: `translateY(${-32}px)` },
            { transform: `translateY(${0}px)` }
          ],
          {
            duration: 500,
            iterations: 1,
            easing: "ease-in-out"
          }
        );
        e.style.transform = `translateY(${0}px)`;
      })
    } catch (error) {
      console.log(error);
    }
  });

  if (!loading) {
    if (newArray.length > 10) newArray.pop();
    newArray.unshift(
      <Fragment key={data.betAdded.id}>
        <div className="td">{moment(data.betAdded.time).format("DD.MM.YY h:mm:ss")}</div>
        <div className="td">
          <img
            className="icon"
            src="https://img.icons8.com/windows/32/000000/bitcoin.png"
            alt="bit_coin"
          />
          <span className="bet">{data.betAdded.bet / 1000}</span>
        </div>
        <div className="td">x{data.betAdded.payout / 4}</div>
        <div className="td">
          <img
            className="icon"
            src="https://img.icons8.com/windows/32/000000/bitcoin.png"
            alt="bit_coin"
          />
          <span
            className={`profit ${data.betAdded.profit > 0 ? "green" : "red"}`}
          >
            {data.betAdded.profit / 1000}
          </span>
        </div>
      </Fragment>
    );
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Fragment>
      {!loading && (
        <div className="bets-table">
          <div className="thead">
              <div className="th">TIME</div>
              <div className="th">BET</div>
              <div className="th">MULTIPLIER</div>
              <div className="th">PROFIT</div>
          </div>
          <div  className="tbody">{newArray.map((element, index) => element)}</div>
        </div>
      )}
    </Fragment>
  );
}
