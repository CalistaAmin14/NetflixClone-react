import { useState } from 'react'

/**
 * FAQ Component
 * Feature 4 — Show/Hide section using conditional rendering (state-driven)
 * Props: faqData (array of { id, question, answer })
 */
function FAQ({ faqData }) {
  const [openId, setOpenId] = useState(null)

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="faq-section py-5" id="faq-section">
      <div className="container">
        <h2 className="text-center text-white mb-4">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqData.map((item) => (
            <div className="faq-item" key={item.id}>
              <button
                className="faq-question"
                aria-expanded={openId === item.id}
                onClick={() => toggleFaq(item.id)}
              >
                {item.question}
                <span className="faq-icon">{openId === item.id ? '\u2212' : '+'}</span>
              </button>
              <div className={`faq-answer ${openId === item.id ? 'faq-open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
