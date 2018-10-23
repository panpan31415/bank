import * as action_types from "./actionList";

const actionCreator = (action_type, amount) => {
  switch (action_type) {
    case action_types.WITHDRAW: {
      return {
        type: action_types.WITHDRAW,
        payload: amount
      };
    }
    case action_types.DEPOSITE: {
      return {
        type: action_types.DEPOSITE,
        payload: amount
      };
    }
    case action_types.DONATE_ALL: {
      return {
        type: action_types.DONATE_ALL,
        payload: 0
      };
    }
    default: {
      return {
        type: null,
        payload: null
      };
    }
  }
};

export default actionCreator;
