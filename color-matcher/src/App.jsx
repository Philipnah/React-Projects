//import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Random from './pages/Random.jsx'
import Fill from './pages/Fill.jsx'

function App() {

  return (
    <Router>
      <Navbar />
	  <Routes>
		<Route exact path="/" Component={Random} />
		<Route path="/fill" Component={Fill} />
	  </Routes>
	  <Footer />
    </Router>
  )
}

export default App;
