
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <div className="App">
        <Header />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default App
