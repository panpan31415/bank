import * as action_types from "../actions/actionList";

const reducer = (state, action) => {
  switch (action.type) {
    case action_types.DEPOSITE: {
      return {
        ...state,
        totalAmount: (parseInt(state.totalAmount,10) + parseInt(action.payload,10))
      };
    }
    case action_types.WITHDRAW: {
      return {
        ...state,
        totalAmount: (parseInt(state.totalAmount,10) - parseInt(action.payload,10))
      };
    }
    case action_types.DONATE_ALL: {
      return { ...state, totalAmount: 0 };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
