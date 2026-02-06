import { useState } from "react";
import "./ManageBooks.css";

const initialBooks = [
  { id: 1, title: "HTML Complete Guide", author: "John Doe", category: "Web", price: "Free", status: "Available", isbn: "HB-102" },
  { id: 2, title: "CSS Mastery", author: "Jane Smith", category: "Web", price: "Free", status: "Available", isbn: "CS-551" },
  { id: 3, title: "JavaScript Deep Dive", author: "Alex Brown", category: "Programming", price: "₹499", status: "Unavailable", isbn: "JS-990" },
];

function ManageBooks() {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((book) =>
        book.id === id
          ? { ...book, status: book.status === "Available" ? "Unavailable" : "Available" }
          : book
      )
    );
  };

  const deleteBook = (id) => {
    if(window.confirm("Are you sure you want to remove this book?")) {
        setBooks(books.filter(b => b.id !== id));
    }
  };

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="manage-books-container">
      {/* --- Page Header --- */}
      <div className="admin-view-header">
        <div className="title-area">
          <h1>📚 Book Inventory</h1>
          <p>Manage your library's digital and physical collection.</p>
        </div>
        <button className="premium-add-btn">
          <span>+</span> Add New Masterpiece
        </button>
      </div>

      {/* --- Filter & Search Bar --- */}
      <div className="inventory-controls">
        <div className="search-box-advance">
          <input
            type="text"
            placeholder="Search by title, author or ISBN..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="search-icon">🔍</i>
        </div>
        <div className="quick-filters">
          <button className="filter-pill active">All</button>
          <button className="filter-pill">Web</button>
          <button className="filter-pill">Programming</button>
        </div>
      </div>

      {/* --- Data Table --- */}
      <div className="glass-inventory-card">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Book Details</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>
                    <div className="book-main-cell">
                      <div className="book-icon">📖</div>
                      <div className="book-meta">
                        <span className="book-title">{book.title}</span>
                        <span className="book-isbn">ID: {book.isbn} • {book.author}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`cat-badge ${book.category.toLowerCase()}`}>
                      {book.category}
                    </span>
                  </td>
                  <td>
                    <span className={book.price === "Free" ? "price-free" : "price-tag"}>
                        {book.price}
                    </span>
                  </td>
                  <td>
                    <div className={`status-pill ${book.status.toLowerCase()}`}>
                      <span className="dot"></span>
                      {book.status}
                    </div>
                  </td>
                  <td>
                    <div className="action-group">
                      <button 
                        className="icon-btn edit" 
                        title="Toggle Visibility"
                        onClick={() => toggleStatus(book.id)}
                      >
                        {book.status === "Available" ? "👁️" : "👁️‍🗨️"}
                      </button>
                      <button 
                        className="icon-btn delete" 
                        title="Remove Book"
                        onClick={() => deleteBook(book.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="empty-inventory">
                  No books found in the collection.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageBooks;