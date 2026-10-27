import { useSelector } from "react-redux";
import "./App.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import FilterBooks from "./components/FilterBooks";

function App() {
  const books = useSelector((state) => state.books);
  const totalBooks = books.length;

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-wrap">
          <div className="brand-icon">📚</div>
          <div>
            <p className="eyebrow">Personal library</p>
            <h1>Book Library</h1>
          </div>
        </div>

        <div className="header-badge">
          <span>{totalBooks}</span>
          <small>books</small>
        </div>
      </header>

      <main className="app-main">
        <section className="panel add-panel">
          <AddBook />
        </section>

        <section className="panel library-panel">
          <div className="panel-header">
            <h2>My collection</h2>
            <FilterBooks />
          </div>

          <BookList />
        </section>
      </main>

      <footer className="app-footer">
        <p>Curated for your next great read.</p>
      </footer>
    </div>
  );
}

export default App;