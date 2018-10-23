import React from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import actionCreator from "./actions/";
import { connect } from "react-redux";

import "./App.css";

const App = ({ totalAmount, username, actionCreator }) => {
  return (
    <div className="App">
      <img className="App__userpic" src={photographer} alt="user" />
      <p className="App__username">Hello, {username}! </p>
      <div className="App__amount">
        {formatNumber({ prefix: "$" })(totalAmount)}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <button
          data-action="WITHDRAW"
          data-amount="10000"
          onClick={e => {
            actionCreator(e.target.dataset.action, e.target.dataset.amount);
          }}
        >
          WITHDRAW $10,000
        </button>
        <button
          data-action="WITHDRAW"
          data-amount="5000"
          onClick={e => {
            actionCreator(e.target.dataset.action, e.target.dataset.amount);
          }}
        >
          WITHDRAW $5,000
        </button>
        <button
          data-action="DEPOSITE"
          data-amount="5000"
          onClick={e => {
            actionCreator(e.target.dataset.action, e.target.dataset.amount);
          }}
        >
          DEPOSITE $5,000
        </button>
      </section>

      <p
        className="App__giveaway"
        data-action="DONATE_ALL"
        onClick={e => {
          actionCreator(e.target.dataset.action, e.target.dataset.amount);
        }}
      >
        Give away all your cash to charity
      </p>
    </div>
  );
};

const mapStateToProps = ({ totalAmount, username }) => {
  return { totalAmount, username };
};

export default connect(
  mapStateToProps,
  { actionCreator }
)(App);
