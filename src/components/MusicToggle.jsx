import { useEffect, useRef, useState } from 'react'

function MusicToggle() {
  const [enabled, setEnabled] = useState(false)
  const [audioReady, setAudioReady] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (enabled) {
      audio
        .play()
        .then(() => setAudioReady(true))
        .catch(() => {
          // Some browsers block media until repeated user interaction.
          setEnabled(false)
          setAudioReady(false)
        })
    } else {
      audio.pause()
    }
  }, [enabled])

  return (
    <div className="music-toggle">
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=gentle-piano-for-love-110864.mp3"
      />
      <button
        type="button"
        className="secondary-btn"
        onClick={() => setEnabled((current) => !current)}
      >
        {enabled ? 'Music: On ♪' : 'Music: Off'}
      </button>
      {!audioReady && (
        <p className="music-note">Tap again if your browser blocks autoplay.</p>
      )}
    </div>
  )
}

export default MusicToggle
