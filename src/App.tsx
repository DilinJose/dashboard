import { Route, Routes } from 'react-router'
import './App.css'
import Login from './pages/login/login'
import Quote from './pages/quote/quote'
import { createContext, useState } from 'react'


export const SearchContext = createContext("")

function App() {
const [searchValue,setSeaechValue] = useState("")
  return (
    <SearchContext.Provider value={{searchValue,setSeaechValue}}>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/quote' element={<Quote />} />
    </Routes>

    </SearchContext.Provider>
  )
}

export default App
