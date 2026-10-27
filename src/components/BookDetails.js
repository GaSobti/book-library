import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../features/books/bookSlice";

function BookDetails({ book }) {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const saveChanges = () => {
    dispatch(
      updateBook({
        ...book,
        title: title.trim() || book.title,
        author: author.trim() || book.author,
      })
    );

    setEdit(false);
  };

  return (
    <div>
      {edit ? (
        <div className="edit-form">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <div className="book-actions">
            <button onClick={saveChanges}>Save</button>
            <button className="secondary-button" onClick={() => setEdit(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h4>{book.title}</h4>
          <p>{book.author}</p>
          <div className="book-actions">
            <button className="secondary-button" onClick={() => setEdit(true)}>
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default BookDetails;