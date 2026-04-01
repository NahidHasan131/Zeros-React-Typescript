import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './routes/HomeLayout/AppLayout'
import Home from './pages/Home'
import CategoriesPage from './pages/CategoriesPage'
import ProductPage from './pages/ProductPage'

function App() {

  const router =  createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        { path: '/', element: <Home/> },
        { path: '/product', element: <ProductPage/> },
        { path: '/categories', element: <CategoriesPage/> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App
