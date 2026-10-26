import { useSelector, useDispatch } from "react-redux";
import { toggleReadStatus } from "../features/books/bookSlice";
import BookDetails from "./BookDetails";

function BookList() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);

  const filteredBooks = books.filter((book) => {
    if (filter === "READ") return book.read;
    if (filter === "UNREAD") return !book.read;
    return true;
  });

  return (
    <div>
      <h3>Books</h3>

      {filteredBooks.map((book) => (
        <div key={book.id} className="card">
          <BookDetails book={book} />

          <p>
            Status:
            {book.read ? " Read" : " Unread"}
          </p>

          <button onClick={() => dispatch(toggleReadStatus(book.id))}>
            Mark {book.read ? "Unread" : "Read"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;