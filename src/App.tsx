import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import MainPages from './pages/mainPage'
import CardDetail from './pages/CatCardDetail'

function App() {
  
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<MainPages />}/>
          <Route path='/cat' element={<MainPages />}/>
          <Route path='/card/:id' element={<CardDetail />}/>
        </Routes>
    </Router>

    </>
  )
}

export default App
