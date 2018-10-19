import React from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import store from "./store/";
import actionCreator from "./actions/";

import "./App.css";

const App = () => {
  const { totalAmount, username } = store.getState();
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
          onClick={dispatchAction}
        >
          WITHDRAW $10,000
        </button>
        <button
          data-action="WITHDRAW"
          data-amount="5000"
          onClick={dispatchAction}
        >
          WITHDRAW $5,000
        </button>
        <button
          data-action="DEPOSITE"
          data-amount="5000"
          onClick={dispatchAction}
        >
          DEPOSITE $5,000
        </button>
      </section>

      <p
        className="App__giveaway"
        data-action="DONATE_ALL"
        onClick={dispatchAction}
      >
        Give away all your cash to charity
      </p>
    </div>
  );
};

const dispatchAction = e => {
  let action_type = e.target.dataset.action;
  let amount = e.target.dataset.amount;
  store.dispatch(actionCreator(action_type, amount));
};

export default App;
