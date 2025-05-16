import { useParams, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./BookDetailsPage.css";

function BookDetailsPage() {
  // Get book id from URL params
  const { id } = useParams();
  // Get all books from Redux store
  const books = useSelector((store) => store.book.books);
  // Find book matching id
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <p>Book not found.</p>;// Show if no matching book
  }

  return (

    <div className="book-details">{/* Container for book details page */}
      <div className="book-details-content">{/* Flex container for image and info */}
        <img src={book.image} alt={book.title} className="book-image" />{/* Book cover image */}

        <div className="book-info">{/* Book details text */}
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>
          {book.rating && (
            <p><strong>Rating:</strong> {book.rating}</p>
          )}
          <p><strong>Price:</strong> ₹ {book.price}</p>
        </div>
      </div>

      <div className="book-details-footer">{/* Footer with back navigation */}
        <Link to="/books" className="back-button"><i className="fa-solid fa-arrow-left"></i> Back to Browse</Link>
      </div>
    </div>
  );
}

export default BookDetailsPage;
