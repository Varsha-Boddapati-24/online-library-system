import "./BookCard.css";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="book-card">
       {/* Book image, fallback placeholder if no image URL */}
      <img src={book.image||"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} alt={book.title} className="book-card-image" />
      {/* Book title */}
      <h3 className="book-card-title">{book.title}</h3>
      {/*  View Details link */}
      
        <Link to={`/book/${book.id}`} className="view-details-link">
        View More Details..
        </Link>
    
    </div>
  );
}

export default BookCard;
