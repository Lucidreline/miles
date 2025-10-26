import Challenges from './pages/Challenges/Challenges.component'
import LandMarks from './pages/LandMarks/LandMarks.component'
import NavBar from './components/navBar/NavBar.component'
import Dashboard from './pages/Dashboard/Dashboard.page'
import { Routes, Route } from 'react-router-dom'
import Logs from './pages/Logs/Logs.page'
import './App.scss'

function App() {
  return (
    <div className="app">
      <div id="margin-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/land-marks" element={<LandMarks />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
