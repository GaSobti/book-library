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
        title,
        author,
      })
    );

    setEdit(false);
  };

  return (
    <div>
      {edit ? (
        <>
          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            value={author}
            onChange={(e) =>
              setAuthor(e.target.value)
            }
          />

          <button onClick={saveChanges}>
            Save
          </button>
        </>
      ) : (
        <>
          <h4>{book.title}</h4>
          <p>{book.author}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default BookDetails;