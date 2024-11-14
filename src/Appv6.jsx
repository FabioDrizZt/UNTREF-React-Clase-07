import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import useFetchData from './hooks/useFetchData'
import Shop from './pages/Shop'
import Card from './components/Card'
import ErrorComponent from './pages/ErrorComponent'
import Faqs from './pages/Faqs'

export default function App () {
  const data = useFetchData()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorComponent />,
      children: [
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'faqs',
          element: <Faqs />
        },
        {
          path: 'shop',
          element: <Shop data={data} />,
          children: [
            {
              path: ':id',
              element: <Card data={data} />
            }
          ]
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}
