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
    if (newArray.length > 10) newArray.pop();
    newArray.unshift(
      <tr className="new" key={data.betAdded.id}>
        <td>{moment(data.betAdded.time).format("DD.MM.YY h:mm:ss")}</td>
        <td>
          <img
            className="icon"
            src="https://img.icons8.com/windows/32/000000/bitcoin.png"
            alt="bit_coin"
          />
          <span className="bet">{data.betAdded.bet / 1000}</span>
        </td>
        <td>x{data.betAdded.payout / 4}</td>
        <td>
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
        </td>
      </tr>
    );

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
          <tbody>{newArray.map((element, index) => element)}</tbody>
        </table>
      )}
    </Fragment>
  );
}
