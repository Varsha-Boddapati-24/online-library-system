import { Link } from "react-router-dom";
import "./CategoryCard.css";

// CategoryCard component takes a category object as a prop
function CategoryCard  ({ category }) {
  return (
      // Link navigates to the category page, URL uses lowercase category name
    <Link to={`/books/${category.name?.toLowerCase()}`} className="category-card-link">
      <div className="category-card">
           {/* Category image with fallback placeholder */}
        <img
          src={category.image||"https://images.unsplash.com/photo-1517770413964-df8ca61194a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"}
          alt={category.name}
          className="category-card-img"
        />
          {/* Category name title */}
        <h3 className="category-card-title">{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
