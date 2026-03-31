import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './routes/HomeLayout/AppLayout'
import Home from './pages/Home'
import AllProduct from './pages/AllProduct'

function App() {

  const router =  createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/product',
          element: <AllProduct/>
        },
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
