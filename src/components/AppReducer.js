const AppReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          cart: [action.payload, ...state.cart],
        };
      default:
        return state;
    }
  };

  export default AppReducer