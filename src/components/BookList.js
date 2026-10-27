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
    <div className="books-section">
      <h3>{filteredBooks.length} books</h3>

      {filteredBooks.length === 0 ? (
        <p>No books in this category yet.</p>
      ) : (
        filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <BookDetails book={book} />

            <div className="book-meta">
              <span className={`status-pill ${book.read ? "read" : "unread"}`}>
                {book.read ? "Read" : "Unread"}
              </span>

              <div className="book-actions">
                <button onClick={() => dispatch(toggleReadStatus(book.id))}>
                  Mark {book.read ? "Unread" : "Read"}
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;