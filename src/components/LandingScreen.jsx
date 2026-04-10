import { motion } from 'framer-motion'

function LandingScreen({ onEnter }) {
  return (
    <motion.section
      className="landing-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="landing-card"
        initial={{ y: 22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="landing-kicker">For you</p>
        <h1>I made something for you...</h1>
        <p className="landing-text">
          I wanted to say this with care, and in a way that feels honest.
        </p>
        <button type="button" className="primary-btn" onClick={onEnter}>
          Open it gently
        </button>
      </motion.div>
    </motion.section>
  )
}

export default LandingScreen
