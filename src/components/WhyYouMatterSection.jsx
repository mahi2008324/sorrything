import { motion } from 'framer-motion'

function WhyYouMatterSection({ reasons }) {
  return (
    <motion.div
      className="panel"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Why You Matter To Me</h2>
      <div className="reason-grid">
        {reasons.map((reason, index) => (
          <motion.article
            className="reason-card"
            key={reason}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
          >
            <p>{reason}</p>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}

export default WhyYouMatterSection
