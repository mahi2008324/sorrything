import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import ApologySection from './components/ApologySection'
import FinalSection from './components/FinalSection'
import LandingScreen from './components/LandingScreen'
import WhyYouMatterSection from './components/WhyYouMatterSection'
import './styles/app.css'

const apologyText =
  "I'm really sorry for hurting you. I know an apology only matters when actions follow, so I want you to know I'm listening, learning, and trying to do better as your friend.I know  sorry is too small for this, but I hope it can be a starting point for healing and rebuilding our friendship. I care about you and value our connection.It is wrong what i did i didn't texted you for a long time then i know how important you are in my life as a friend.You are the one person i come to you when i feel lonely so that's why i want to say sorry for not being there for you and not texting you for a long time. I know that i should have protected our friendship better and i should have been there for you more. I hope you can forgive me and we can move forward together as friends."
  

const reasons = [
  'You have always shown up for me with honesty and kindness.',
  'Your support has been a constant source of comfort and strength.',
  'You are the one who understands me best.',
  'When I feels lonely, you are the one who makes me feel seen and cared for.',
  'You make hard days easier just by being yourself.',
  'Your advice comes from care, and I genuinely value it.',
  'Your friendship means a lot to me, and I should have protected it better.',
]

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [decision, setDecision] = useState('')

  const apologyRef = useRef(null)
  const reasonsRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <div className="app-shell">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <LandingScreen key="landing" onEnter={() => setIsOpen(true)} />
        ) : (
          <motion.main
            key="main"
            className="main-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="simple-intro">
              <p className="simple-label">A sincere note</p>
              <h1>I care about our friendship, and I&apos;m sorry.</h1>
            </div>

            <section ref={apologyRef} id="apology">
              <ApologySection text={apologyText} />
            </section>

            <section ref={reasonsRef} id="reasons">
              <WhyYouMatterSection reasons={reasons} />
            </section>

            <section ref={finalRef} id="final">
              <FinalSection decision={decision} onDecision={setDecision} />
            </section>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
