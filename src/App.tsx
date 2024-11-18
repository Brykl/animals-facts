import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import MainPages from './pages/mainPage'
import CardDetail from './pages/CatCardDetail'
import DogPage from './pages/dogPage'
import HorsePage from './pages/horsePage'
function App() {
  
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<MainPages />}/>
          <Route path='/cat' element={<MainPages />}/>
          <Route path='/card/:id' element={<CardDetail />}/>
          <Route path='/dog' element={<DogPage />}/>
          <Route path='/horse' element={<HorsePage />}/>
        </Routes>
    </Router>

    </>
  )
}

export default App
