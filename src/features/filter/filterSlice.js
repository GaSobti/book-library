const initialState = "ALL";

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "filter/setFilter":
      return action.payload;

    default:
      return state;
  }
}

export const setFilter = (payload) => ({
  type: "filter/setFilter",
  payload,
});

export default filterReducer;
