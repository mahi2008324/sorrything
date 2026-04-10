import { motion } from 'framer-motion'

function FinalSection({ decision, onDecision }) {
  return (
    <motion.div
      className="panel final-panel"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Can you forgive me?</h2>
      <p className="final-copy">
        No pressure, no expectations. Your feelings are valid, and I will respect
        your pace.
      </p>
      <div className="decision-wrap">
        <button
          type="button"
          className="primary-btn"
          onClick={() => onDecision('yes')}
        >
          Yes 🤝
        </button>
        <button
          type="button"
          className="secondary-btn"
          onClick={() => onDecision('time')}
        >
          Need time 💭
        </button>
      </div>
      {decision === 'yes' && (
        <p className="response-text">
          Thank you. I&apos;ll keep proving this friendship matters through my
          actions.
        </p>
      )}
      {decision === 'time' && (
        <p className="response-text">
          Take all the time you need. I&apos;ll be patient and respectful.
        </p>
      )}
    </motion.div>
  )
}

export default FinalSection
