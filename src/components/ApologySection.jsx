import { motion } from 'framer-motion'
import TypewriterText from './TypewriterText'

function ApologySection({ text }) {
  return (
    <motion.div
      className="panel"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8 }}
    >
      <h2>My Apology</h2>
      <TypewriterText text={text} className="apology-typing" />
    </motion.div>
  )
}

export default ApologySection
