import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import BrowseBooksPage from './pages/BrowseBooksPage.jsx'
import HomePage from './pages/HomePage.jsx'
import BookDetailsPage from './pages/BookDetailsPage.jsx'
import AddBookPage from './pages/AddBookPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './index.css'

import App from './App.jsx'
// router configuration
// This defines all route paths and which component should render for each
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // Main layout component with <Outlet />
    children: [          // Nested routes rendered inside App layout
      {
        index: true, // This will render for the root "/" path
        element: <HomePage />
      },
      {
        path: "books",
        element: <BrowseBooksPage />
      }, {
        path: "book/:id", // Dynamic route for viewing a single book's details
        element: <BookDetailsPage />,
      },
      {
        path: "books/:category",
        element: <BrowseBooksPage />
      },
      
      {
        path: "add-book",  
        element: <AddBookPage />
      },
       {
        path: "*", // Wildcard route for handling 404 - Page Not Found
        element: <NotFoundPage />
      }
    ]
  }
])

// RouterProvider connects the router to app
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={appRouter}/>
  </StrictMode>,
)
