import { useRef } from 'react'
import './index.css'
import playIcon from '../../assets/play.svg'

function Video() {
  const videoReference = useRef(null)
  const playButton = useRef(null)

  const handlePlay = () => {
    if (videoReference.current) {
      videoReference.current.play()
    }
  }

  return (
    <section className='video'>
      <h2>want to design your own? <br /> calm, we can do it</h2>
      <div className="video_container">
        <video id='video' ref={videoReference} muted>
          <source src="https://videos.pexels.com/video-files/6765481/6765481-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="link_container">
          <a ref={playButton} onClick={handlePlay}>
            <p>watch the video</p>
            <img src={playIcon} alt="Play button" />
          </a>
        </div>
      </div>
    </section>
  )
}

export { Video }
