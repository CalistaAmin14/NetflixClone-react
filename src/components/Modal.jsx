import { useState, useEffect } from 'react'

/**
 * Custom Modal Component
 * Feature 1 — Button Click Interaction (state-driven show/hide)
 * Props: show, title, message, onClose
 */
function Modal({ show, title, message, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (show) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [show, onClose])

  if (!show) return null

  return (
    <div
      className="custom-modal-backdrop modal-visible"
      role="dialog"
      aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="custom-modal-box">
        <button className="modal-close-btn" aria-label="Close" onClick={onClose}>
          &times;
        </button>
        <h3 className="modal-title">{title}</h3>
        <p className="modal-message">{message}</p>
        <button className="btn btn-danger mt-3" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  )
}

export default Modal
