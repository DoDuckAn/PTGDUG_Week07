import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Teams from './components/Teams';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path='teams' element={<Teams/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
