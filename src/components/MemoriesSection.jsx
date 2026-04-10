import { motion } from 'framer-motion'

function MemoriesSection({ memories }) {
  return (
    <motion.div
      className="panel"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Memories I Hold Close</h2>
      <div className="memory-grid">
        {memories.map((memory, index) => (
          <motion.figure
            className="memory-card"
            key={memory.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <img src={memory.image} alt={memory.title} loading="lazy" />
            <figcaption>
              <h3>{memory.title}</h3>
              <p>{memory.description}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </motion.div>
  )
}

export default MemoriesSection
