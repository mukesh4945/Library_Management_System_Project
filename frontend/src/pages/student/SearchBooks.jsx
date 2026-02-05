import { useState } from "react";
import "./SearchBooks.css";

const SearchBooks = () => {
  const [search, setSearch] = useState("");

  const books = [
    { id: 1, title: "Clean Code", author: "Robert Martin" },
    { id: 2, title: "JavaScript Deep Dive", author: "Kyle Simpson" },
    { id: 3, title: "React in Action", author: "Mark Tielens" }
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-page">
      <div className="search-header">
        <h2>🔍 Search Books</h2>
        <p>Find and reserve books from the library</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by book name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="search-icon">🔍</span>
      </div>

      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
              <button className="reserve-btn">Reserve</button>
            </div>
          ))
        ) : (
          <p className="no-result">No books found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBooks;
