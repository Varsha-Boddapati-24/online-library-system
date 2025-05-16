
import CategoryCard from "../components/CategoryCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { books } from "../data/books"
import BookCard from "../components/BookCard";
import "./HomePage.css"


function HomePage() {
// State to toggle showing all categories or just a subset
  const [showAll, setShowAll] = useState(false);
// Function to toggle showAll state when "See More"/"See Less" is clicked
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Get top 6 popular books sorted by rating descending from books data
  const popularBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

//Get categories from Redux store state
const categories=useSelector((store)=>store.category.categories)
 // Decide categories to display based on showAll toggle (all or first 7)
 const displayedCategories = showAll ? categories : categories.slice(0, 7);
  return (
    <div className="home-container">
      <h1>Welcome to Our Book Store!</h1>
   {/* Categories section header with toggle link */}
      <div className="categories-header">
        <h2>Categories</h2>
        <span className="see-more-link" onClick={toggleShowAll}>
          {showAll ? "See Less" : "See More"}
        </span>
      </div>
   {/* Render category cards for displayed categories */}
      <div className="category-grid">
        {displayedCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
       {/* Popular books section header */}
       <div className="popular-books-header">
    <h2>Popular Books</h2>
  </div>
   {/* Render book cards for popular books */}
      <div className="book-grid">
        {popularBooks.map(book => (
      <BookCard key={book.id} book={book} />
    
    
        ))}
      </div>
    </div>
  );
};

export default HomePage;
