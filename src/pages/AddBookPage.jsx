import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/bookSlice";
import "./AddBookPage.css";
import { addCategory } from "../store/categorySlice";

function AddBookPage() {
  // Redux dispatch to send actions
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // State to store form input values
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    image: "",
    category: "",
    price: ""
  });
  // State to store validation error messages
  const [errors, setErrors] = useState({});
  // Validation function to check inputs and return errors object
  const validate = () => {
    const newErrors = {};
    // Title validation: required, min 3 characters
    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }
    // Author validation: required, letters and spaces only
    if (!formData.author.trim()) {
      newErrors.author = "Author is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.author.trim())) {
      newErrors.author = "Author name must contain only letters and spaces.";
    }
    // Description validation: required, length between 10 and 300
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    } else if (formData.description.trim().length < 10 || formData.description.trim().length > 300) {
      newErrors.description = "Description must be between 10 and 300 characters.";
    }
    // Image URL validation: optional, must end with valid image extension if provided
    if (formData.image.trim()) {
      const imageRegex = /\.(jpeg|jpg|gif|png|webp|svg)$/i;
      if (!imageRegex.test(formData.image.trim())) {
        newErrors.image = "Please enter a valid image URL.";
      }
    }
    // Category validation: required, letters and spaces only
    if (!formData.category.trim()) {
      newErrors.category = "Category is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.category.trim())) {
      newErrors.category = "Category must contain only letters and spaces.";
    }
    // Price validation: required, must be a positive number
    if (!formData.price.trim()) {
      newErrors.price = "Price is required.";
    } else if (isNaN(formData.price.trim()) || Number(formData.price) <= 0) {
      newErrors.price = "Price must be a valid positive number.";
    }


    return newErrors;
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Run validation and get errors (if any)
    const validationErrors = validate();
    // If errors exist, set error state and stop submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    //  new book object, assign unique id using timestamp
    const newBook = {
      id: Date.now(),
      ...formData,
      image: formData.image.trim() || "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
    };
    // new category object
    const newCategory = {
      id: Date.now(),
      name: formData.category.trim()

    }
    // Dispatch Redux actions to add the book and category to the store
    dispatch(addBook(newBook));
    dispatch(addCategory(newCategory))
    // Navigate user back to the books listing page after adding
    navigate("/books");
  };

  return (
    <div className="add-book-page">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <input type="text" placeholder="Title" value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        {errors.title && <p className="error">{errors.title}</p>}
        {/* Author Input */}
        <input type="text" placeholder="Author" value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
        {errors.author && <p className="error">{errors.author}</p>}
        {/* Description Textarea */}
        <textarea placeholder="Description" value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        {errors.description && <p className="error">{errors.description}</p>}
        {/* Image URL Input */}
        <input type="text" placeholder="Image URL (optional)"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        {errors.image && <p className="error">{errors.image}</p>}
        {/* Category Input */}
        <input type="text" placeholder="Category" value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
        {errors.category && <p className="error">{errors.category}</p>}
        {/* Price Input */}
        <input type="text" placeholder="Price" value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        {errors.price && <p className="error">{errors.price}</p>}
        {/* Submit Button */}
        <button type="submit" >Add Book</button>
      </form>
    </div>
  );
}

export default AddBookPage;
