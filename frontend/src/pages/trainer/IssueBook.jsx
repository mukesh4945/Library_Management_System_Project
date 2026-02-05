import "./IssueBook.css";

const IssueBook = () => {
  return (
    <div className="issue-container">
      <div className="issue-card">
        <h2 className="issue-title">📚 Issue Book</h2>
        <p className="issue-subtitle">
          Enter student and book details to issue a book
        </p>

        <form className="issue-form">
  <div className="input-group">
    <input type="text" required />
    <label>Student ID</label>
  </div>

  <div className="input-group">
    <input type="text" required />
    <label>Book ID</label>
  </div>

  <button className="issue-btn">Issue Book</button>
</form>

      </div>
    </div>
  );
};

export default IssueBook;
