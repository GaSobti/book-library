import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/bookSlice";

function AddBook() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) return;

    dispatch(
      addBook({
        id: Date.now(),
        title: title.trim(),
        author: author.trim(),
        read: false,
      })
    );

    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Book</h3>

      <input
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button type="submit">Add to library</button>
    </form>
  );
}

export default AddBook;