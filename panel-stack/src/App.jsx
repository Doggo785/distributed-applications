import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ComicGrid from './components/ComicGrid'
import ComicReader from './components/ComicReader'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ComicGrid />} />
            <Route path="/comic/:id" element={<ComicReader />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
