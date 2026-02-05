import { useState } from "react";
import "./ManageBooks.css";

const initialBooks = [
  {
    id: 1,
    title: "HTML Complete Guide",
    author: "John Doe",
    category: "Web",
    price: "Free",
    status: "Available",
  },
  {
    id: 2,
    title: "CSS Mastery",
    author: "Jane Smith",
    category: "Web",
    price: "Free",
    status: "Available",
  },
  {
    id: 3,
    title: "JavaScript Deep Dive",
    author: "Alex Brown",
    category: "Programming",
    price: "Paid",
    status: "Unavailable",
  },
];

function ManageBooks() {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              status:
                book.status === "Available"
                  ? "Unavailable"
                  : "Available",
            }
          : book
      )
    );
  };

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="manage-books-page">
      {/* Header */}
      <div className="manage-header">
        <h1>📚 Manage Books</h1>
        <p>View, enable or disable books in the system</p>
      </div>

      {/* Actions */}
      <div className="books-actions">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="add-btn">+ Add Book</button>
      </div>

      {/* Table Card */}
      <div className="table-card">
        <div className="table-wrapper">
          <table className="books-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <tr key={book.id}>
                    <td data-label="Title">
                      <strong>{book.title}</strong>
                    </td>
                    <td data-label="Author">{book.author}</td>
                    <td data-label="Category">{book.category}</td>
                    <td data-label="Price">{book.price}</td>
                    <td data-label="Status">
                      <span
                        className={`status ${
                          book.status === "Available"
                            ? "available"
                            : "unavailable"
                        }`}
                      >
                        {book.status}
                      </span>
                    </td>
                    <td data-label="Action">
                      <button
                        className="action-btn"
                        onClick={() => toggleStatus(book.id)}
                      >
                        {book.status === "Available"
                          ? "Disable"
                          : "Enable"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-data">
                    No books found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageBooks;
