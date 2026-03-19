import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MovieSlider from './components/MovieSlider'
import TonightsPick from './components/TonightsPick'
import FeaturedCollections from './components/FeaturedCollections'
import CineSketch from './components/CineSketch'
import FilmTimeCapsule from './components/FilmTimeCapsule'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { popularMovies, trendingMovies, collections, faqData } from './data/data'

/**
 * App Component — Root of the Netflix Clone React SPA
 * Reference: https://www.netflix.com/in/
 *
 * Components (9): Navbar, Hero, MovieSlider (x2), TonightsPick,
 *   FeaturedCollections, CineSketch, FilmTimeCapsule, FAQ, Footer, Modal
 *
 * State + Event Features implemented:
 *  1. Button interaction — Join Now / Watch Now opens modal (state-driven)
 *  2. Form validation — Email form + Capsule form validated via state
 *  3. Theme toggle — Light/Dark mode driven by state + localStorage (useEffect)
 *  4. Show/hide section — FAQ accordion via conditional rendering
 *  5. Navigation highlight — Active nav link via state
 *  6. CineSketch generator — State-driven scene seed display
 *  7. (Bonus) localStorage — Theme, visit counter, film capsules with useEffect
 */
function App() {
  // Feature 3 — Theme state + localStorage persistence
  const [theme, setTheme] = useState(() => localStorage.getItem('netflixTheme') || 'dark')

  // Feature 1 — Modal state
  const [modal, setModal] = useState({ show: false, title: '', message: '' })

  // Apply theme class to body
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode')
    } else {
      document.body.classList.remove('light-mode')
    }
    localStorage.setItem('netflixTheme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const openModal = (title, message) => {
    setModal({ show: true, title, message })
  }

  const closeModal = () => {
    setModal({ show: false, title: '', message: '' })
  }

  return (
    <>
      {/* Modal — rendered at top, controlled by state */}
      <Modal
        show={modal.show}
        title={modal.title}
        message={modal.message}
        onClose={closeModal}
      />

      {/* Navbar — receives theme + toggle callback as props */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Hero — passes callback prop for Join Now modal */}
      <Hero
        onJoinNow={() =>
          openModal(
            '\uD83C\uDFAC Welcome to Netflix!',
            'Start your free trial today and enjoy unlimited movies, series, and more. Cancel anytime.'
          )
        }
      />

      {/* MovieSlider — receives movie data via props */}
      <MovieSlider title="Popular on NETFLIX" movies={popularMovies} />
      <MovieSlider title="Trending Now" movies={trendingMovies} />

      {/* Tonight's Pick — passes callback for Watch Now modal */}
      <TonightsPick
        onWatchNow={() =>
          openModal(
            '\u25B6 Now Playing \u2014 Jolly LLB 3',
            'Streaming in 4K Dolby Vision. Enjoy the show! (This is a demo \u2014 no real video plays.)'
          )
        }
      />

      {/* FeaturedCollections — receives collections data via props */}
      <FeaturedCollections collections={collections} />

      {/* CineSketch — self-contained state */}
      <CineSketch />

      {/* FilmTimeCapsule — form validation + localStorage */}
      <FilmTimeCapsule />

      {/* FAQ — receives FAQ data via props, show/hide via state */}
      <FAQ faqData={faqData} />

      {/* Footer — email validation + visit counter */}
      <Footer />
    </>
  )
}

export default App
