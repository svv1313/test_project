import React, { Fragment } from "react";
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

  if (!loading) {
    if (newArray.length > 9) newArray.pop();
    newArray.unshift(data.betAdded);
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Fragment>
      {!loading && (
        <table className="table">
          <thead>
            <tr>
              <th>TIME</th>
              <th>BET</th>
              <th>MULTIPLIER</th>
              <th>PROFIT</th>
            </tr>
          </thead>
          <tbody>
            {newArray.map((element, index) => (
              <tr className={`id-${index}`} key={element.id}>
                <td>{moment(element.time).format("DD.MM.YY h:mm:ss")}</td>
                <td>
                  <img
                    className="icon"
                    src="https://img.icons8.com/windows/32/000000/bitcoin.png"
                    alt="bit_coin"
                  />
                  <span className="bet">{element.bet / 1000}</span>
                </td>
                <td>x{element.payout / 4}</td>
                <td>
                  <img
                    className="icon"
                    src="https://img.icons8.com/windows/32/000000/bitcoin.png"
                    alt="bit_coin"
                  />
                  <span
                    className={`profit ${element.profit > 0 ? "green" : "red"}`}
                  >
                    {element.profit / 1000}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  );
}
