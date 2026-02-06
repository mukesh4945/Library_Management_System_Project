import { useState } from "react";
import "./SearchBooks.css";

const SearchBooks = () => {
  const [search, setSearch] = useState("");

  const books = [
    { id: 1, title: "Clean Code", author: "Robert Martin", category: "Programming", status: "Available" },
    { id: 2, title: "JavaScript Deep Dive", author: "Kyle Simpson", category: "Development", status: "Reserved" },
    { id: 3, title: "React in Action", author: "Mark Tielens", category: "Frontend", status: "Available" },
    { id: 4, title: "Design Patterns", author: "Erich Gamma", category: "Software", status: "Available" }
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-container">
      <div className="search-header-section">
        <h1>🔍 Global Library Search</h1>
        <p>Find and reserve books from our extensive digital collection</p>
      </div>

      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="search-icon-inside">🔍</span>
      </div>

      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div key={book.id} className="book-card-item" style={{ "--i": index }}>
              <div className="card-top-info">
                <span className={`availability-dot ${book.status.toLowerCase()}`}>
                  ● {book.status}
                </span>
                <span className="category-tag">{book.category}</span>
              </div>
              
              <div className="card-mid-info">
                <h3 className="book-name">{book.title}</h3>
                <p className="book-writer">By <span>{book.author}</span></p>
              </div>
              
              <button 
                className={`action-btn ${book.status === 'Available' ? 'btn-available' : 'btn-reserved'}`}
                disabled={book.status !== 'Available'}
              >
                {book.status === 'Available' ? 'Reserve Now' : 'Join Waitlist'}
              </button>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📂</div>
            <h3>No results found</h3>
            <p>Try searching with a different keyword for "{search}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBooks;