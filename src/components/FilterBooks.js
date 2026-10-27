import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/filter/filterSlice";

function FilterBooks() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.filter);

  const filters = ["ALL", "READ", "UNREAD"];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          className={activeFilter === filter ? "active" : ""}
          onClick={() => dispatch(setFilter(filter))}
        >
          {filter === "ALL" ? "All" : filter === "READ" ? "Read" : "Unread"}
        </button>
      ))}
    </div>
  );
}

export default FilterBooks;