import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import bookStore from './store/bookStore'

function App() {


  return (
    <>
      {/* Wrapping the application with Redux Provider to provide global state */}
      <Provider store={bookStore}>
         {/* Persistent navigation bar on all pages */}
        <Navbar />
        {/* Renders the component associated with the current route */}
        <Outlet />
      </Provider>

    </>
  )
}

export default App
