import React, { Fragment,useEffect } from "react";
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
      const elements = document.querySelectorAll("tbody tr");
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
  })
  
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
              <th className="bet">BET</th>
              <th className="payout">MULTIPLIER</th>
              <th>PROFIT</th>
            </tr>
          </thead>
          <tbody>
            {newArray.map((element, index) => (
              <tr key={element.id}>
                <td>{moment(element.time).format("DD.MM.YY h:mm:ss")}</td>
                <td className="bet black">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/windows/32/000000/bitcoin.png"
                      alt="bit_coin"
                    />
                  </div>
                  <span className="bet-value">{element.bet / 1000}</span>
                </td>
                <td className="payout black">x{element.payout / 4}</td>
                <td className="black">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/windows/32/000000/bitcoin.png"
                      alt="bit_coin"
                    />
                  </div>
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
