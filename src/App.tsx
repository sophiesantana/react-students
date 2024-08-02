import './global.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './pages/Register/register'
import Students from './pages/Students/students';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />}/>
        <Route path='/students' element={<Students />}/>
      </Routes>
    </Router>
  )
}

export default App
