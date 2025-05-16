import { useParams, Link} from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";
import "./BrowseBooksPage.css";

function BrowseBooksPage ()  {
  // Get category param from URL to filter books
  const { category } = useParams();
 // Get books and categories from Redux store
const books=useSelector((store)=>store.book.books)
const categories=useSelector((store)=>store.category.categories)
 // State to keep track of search input value
  const [searchQuery, setSearchQuery] = useState("");

 // Filter books based on category param and search query (title or author)
  const filteredBooks = books.filter(book => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-page">
       {/* Sidebar with category links */}
      <aside className="sidebar">
        <h3>Categories</h3>
        <ul>
            {/* Link for all books, highlighted if no category selected */}
             <Link to="/books"><li  className={!category ? "active-category" : ""}>
            All Books
          </li></Link>
           {/* List categories as links; highlight if selected */}
          {categories.map(cat => (
            <Link to={`/books/${cat.name}`}  key={cat.id}> 
            <li key={cat.id} className={category === cat.name ? "active-category" : ""} >
            {cat.name}</li>
            </Link>
          ))}
          
        </ul>
      </aside>

      {/* Main content area: search bar and filtered books grid */}
      <div className="main-content">
         {/* Search input to filter books by title or author */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
 {/* Display filtered books or message if none found */}
        <div className="book-grid">
          {filteredBooks.length > 0 ? (
            filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))
          ) : (
            <p>No books found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseBooksPage;
