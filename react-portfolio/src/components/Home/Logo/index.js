import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'
import Loader from 'react-loaders'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    const bgElement = bgRef.current
    const solidLogoElement = solidLogoRef.current

    // Fade in background
    bgElement.style.transition = 'opacity 1s'
    bgElement.style.opacity = 1

    // Fade in solid logo after a delay
    setTimeout(() => {
      solidLogoElement.style.transition = 'opacity 4s'
      solidLogoElement.style.opacity = 1
    }, 4000)
  }, [])

  return (
    <>
      <div className="logo-container" ref={bgRef}>
        <img
          className="solid-logo"
          ref={solidLogoRef}
          src={LogoS}
          alt="JavaScript, Developer"
        />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Logo
