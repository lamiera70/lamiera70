import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer';

function App({ children, heroes, toggleFavorite }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        {children}

        <main className="container py-4 flex-grow-1">
          {heroes === null ? (
            <div className="alert alert-danger text-center" role="alert">
              ❌ Nessun supereroe disponibile...
            </div>
          ) : heroes.length === 0 ? (
            <div className="alert alert-warning text-center" role="alert">
              📝 Non hai ancora aggiunto nessun supereroe ai preferiti.
            </div>
          ) : (
            <div className="row">
              {heroes.map(h => (
                <Hero
                  key={h.id}
                  hero={h}
                  toggleFavorite={() => toggleFavorite(h.id)}
                />
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
