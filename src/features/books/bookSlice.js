const initialState = [];

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case "books/addBook":
      return [...state, action.payload];

    case "books/updateBook":
      return state.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );

    case "books/toggleReadStatus":
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, read: !book.read }
          : book
      );

    default:
      return state;
  }
}

export const addBook = (payload) => ({
  type: "books/addBook",
  payload,
});

export const updateBook = (payload) => ({
  type: "books/updateBook",
  payload,
});

export const toggleReadStatus = (payload) => ({
  type: "books/toggleReadStatus",
  payload,
});

export default bookReducer;