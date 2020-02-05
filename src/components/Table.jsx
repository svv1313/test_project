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
      const elements = document.querySelectorAll(".bets-table .cell");
      elements.forEach(e => {
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
      });
    } catch (error) {
      console.log(error);
    }
  });

  if (!loading) {
    if (newArray.length > 10) newArray.pop();
    newArray.unshift(data.betAdded);
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
            <div className="th bet">BET</div>
            <div className="th payout">MULTIPLIER</div>
            <div className="th">PROFIT</div>
          </div>
          <div className="tbody">
            {newArray.map((element, index) => (
              <Fragment key={element.id}>
                <div className="cell">
                  {moment(element.time).format("DD.MM.YY h:mm:ss")}
                </div>
                <div className="cell bet">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/windows/32/000000/bitcoin.png"
                      alt="bit_coin"
                    />
                  </div>

                  <span className="bet-value black">{element.bet / 1000}</span>
                </div>
                <div className="cell black payout">x{element.payout / 4}</div>
                <div className="cell">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/windows/32/000000/bitcoin.png"
                      alt="bit_coin"
                    />
                  </div>
                  <span
                    className={`profit ${
                      element.profit > 0 ? "green" : "red"
                    } black`}
                  >
                    {element.profit / 1000}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
}
