import "./MyIssuedBooks.css";

const MyIssuedBooks = () => {
  const books = [
    {
      id: 1,
      title: "Clean Code",
      issueDate: "01 Jan 2026",
      returnDate: "15 Jan 2026",
      status: "Issued"
    }
  ];

  return (
    <div className="issued-page">
      <div className="issued-header">
        <h2>📚 My Issued Books</h2>
        <p>Books currently issued to you</p>
      </div>

      <div className="table-card">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Book</th>
                <th>Issue Date</th>
                <th>Return Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>
                    <strong>{book.title}</strong>
                  </td>
                  <td>{book.issueDate}</td>
                  <td>{book.returnDate}</td>
                  <td>
                    <span className="status issued">
                      {book.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyIssuedBooks;
