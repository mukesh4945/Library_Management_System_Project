import { useState } from "react";
import "./MyIssuedBooks.css";

const MyIssuedBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const books = [
    { id: 1, title: "Clean Code", author: "Robert Martin", issueDate: "01 Jan 2026", returnDate: "15 Feb 2026", status: "Issued", isLate: false, fine: 0 },
    { id: 2, title: "React Design Patterns", author: "Vince Thompson", issueDate: "10 Jan 2026", returnDate: "24 Jan 2026", status: "Overdue", isLate: true, fine: 50 },
    { id: 3, title: "Eloquent JavaScript", author: "Marijn Haverbeke", issueDate: "05 Feb 2026", returnDate: "20 Feb 2026", status: "Issued", isLate: false, fine: 0 }
  ];

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="issued-container">
      {/* ===== 1. STATS SECTION ===== */}
      <div className="dashboard-stats">
        <div className="glass-stat">
          <div className="stat-icon">📚</div>
          <div className="stat-info">
            <p>Total Issued</p>
            <h3>{books.length}</h3>
          </div>
        </div>
        <div className="glass-stat warning">
          <div className="stat-icon">⚠️</div>
          <div className="stat-info">
            <p>Overdue</p>
            <h3>{books.filter(b => b.isLate).length}</h3>
          </div>
        </div>
        <div className="glass-stat danger">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <p>Fines</p>
            <h3>₹{books.reduce((acc, b) => acc + b.fine, 0)}</h3>
          </div>
        </div>
      </div>

      {/* ===== 2. HEADER SECTION ===== */}
      <div className="content-header">
        <div className="title-group">
          <h1>My Issued Books</h1>
          <p>Track and manage your current library borrowings</p>
        </div>
        <div className="search-wrapper">
          <input 
            type="text" 
            placeholder="Search by book name..." 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-btn">🔍</span>
        </div>
      </div>

      {/* ===== 3. TABLE SECTION ===== */}
      <div className="glass-table-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Book Details</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Fine</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book, index) => (
              <tr key={book.id} style={{ "--i": index }}>
                <td>
                  <div className="book-cell">
                    <span className="b-title">{book.title}</span>
                    <span className="b-author">{book.author}</span>
                  </div>
                </td>
                <td>{book.issueDate}</td>
                <td className={book.isLate ? "text-late" : ""}>
                  {book.returnDate} {book.isLate && "⚠️"}
                </td>
                <td className="fine-cell">₹{book.fine}</td>
                <td>
                  <span className={`badge ${book.status.toLowerCase()}`}>
                    {book.status}
                  </span>
                </td>
                <td>
                  <div className="action-btns">
                    <button className="renew-btn">Renew</button>
                    <button className="doc-btn">📄</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredBooks.length === 0 && <div className="empty-msg">No books found...</div>}
      </div>
    </div>
  );
};

export default MyIssuedBooks;