import { Route, Routes } from 'react-router'
import './App.css'
import Login from './pages/login/login'
import Quote from './pages/quote/quote'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/quote' element={<Quote />} />
    </Routes>
  )
}

export default App
