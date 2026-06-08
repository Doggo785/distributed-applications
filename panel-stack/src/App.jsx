import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ComicGrid from './components/ComicGrid'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ComicGrid />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
