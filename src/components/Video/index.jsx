import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.video-title',
        { opacity: 0, y: -300, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: '.video',
            start: 'top center',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true
          }
        }
      );

      gsap.fromTo(
        '.link_container',
        { opacity: 0, y: 300, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          delay: 0.3,
          ease: 'bounce.out',
          scrollTrigger: {
            trigger: '.video',
            start: 'top center',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true
          }
        }
      );

      gsap.fromTo(
        '#video',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          delay: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.video',
            start: 'top center',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true
          }
        }
      );
    });

    return () => ctx.revert()
  }, []);

  return (
    <section className='video'>
      <h2 className='video-title'>Want to design your own? <br /> Calm, we can do it</h2>
      <div className="video_container">
        <video id='video' ref={videoReference} muted>
          <source src="https://videos.pexels.com/video-files/6765481/6765481-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="link_container">
          <a ref={playButton} onClick={handlePlay}>
            <p>Watch the video</p>
            <img src={playIcon} alt="Play button" />
          </a>
        </div>
      </div>
    </section>
  )
}

export { Video }
