import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Card from './components/Card'
import useFetchData from './hooks/useFetchData'
import ErrorComponent from './pages/ErrorComponent'
import Faqs from './pages/Faqs'

export default function App () {
  const data = useFetchData()

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop data={data} />}>
            <Route path='/shop/:id' element={<Card data={data} />} />
          </Route>
          <Route path='/faqs' element={<Faqs />} />
        </Route>
        <Route path='*' element={<ErrorComponent />} />
      </Routes>
    </Router>
  )
}
