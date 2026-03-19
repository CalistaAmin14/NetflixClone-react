import { useState, useRef } from 'react'
import { sceneSeeds } from '../data/data'

/**
 * CineSketch Component — Scene Seed Generator
 * Uses state to track the current scene seed index and display text
 */
function CineSketch() {
  const [prompt, setPrompt] = useState('Press "Get a Scene Seed" to begin.')
  const [promptColor, setPromptColor] = useState('#ffffff')
  const indexRef = useRef(-1)

  const handleGenerate = () => {
    indexRef.current = (indexRef.current + 1) % sceneSeeds.length
    setPrompt(`"${sceneSeeds[indexRef.current]}"`)
    setPromptColor('#e5e5e5')
  }

  const handleSurprise = () => {
    let idx
    do {
      idx = Math.floor(Math.random() * sceneSeeds.length)
    } while (idx === indexRef.current && sceneSeeds.length > 1)
    indexRef.current = idx
    setPrompt(`"${sceneSeeds[idx]}"`)
    setPromptColor('#ff9f43')
  }

  return (
    <section className="container py-4" id="cinesketch-section">
      <div className="cinesketch-card d-flex flex-column flex-md-row gap-3 align-items-start">
        <div className="flex-grow-1">
          <h3 className="mb-2" style={{ color: '#fff', margin: 0 }}>
            CineSketch &mdash; 60&#8209;Second Scene
          </h3>
          <p className="mb-2 text-white">
            A tiny creative warm&#8209;up: click to receive a one&#8209;line seed for a short scene.
            Perfect for sketching, quick film exercises, or watching with a new eye.
          </p>

          <div className="d-flex gap-2 mb-2">
            <button className="btn btn-outline-light cinesketch-btn" onClick={handleGenerate}>
              Get a Scene Seed
            </button>
            <button className="btn btn-light" onClick={handleSurprise}>
              Surprise Me
            </button>
          </div>

          <p className="cinesketch-prompt mb-0" style={{ color: promptColor, fontStyle: 'italic' }}>
            {prompt}
          </p>
        </div>

        <div style={{ minWidth: 220, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div className="text-white small">Try:</div>
          <ul className="small mb-0" style={{ color: '#ffffff' }}>
            <li>Write a 6&#8209;line exchange between strangers on a bus.</li>
            <li>Describe a silent 10&#8209;second reveal without dialogue.</li>
            <li>Pick an ordinary object and make it the scene's secret.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CineSketch
