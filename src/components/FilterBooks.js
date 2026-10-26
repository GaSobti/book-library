import { useDispatch } from "react-redux";
import { setFilter } from "../features/filter/filterSlice";

function FilterBooks() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter("ALL"))}>All</button>

      <button onClick={() => dispatch(setFilter("READ"))}>Read</button>

      <button onClick={() => dispatch(setFilter("UNREAD"))}>Unread</button>
    </div>
  );
}

export default FilterBooks;