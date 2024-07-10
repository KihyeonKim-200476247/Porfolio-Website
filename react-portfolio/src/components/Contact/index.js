import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'C',
                'o',
                'n',
                't',
                'a',
                'c',
                't',
                ' ',
                't',
                'o',
                ' ',
                'm',
                'e',
              ]}
              idx={15}
            />
          </h1>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input placeholder="Subject" type="text" required />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Kim Kihyeon,
          <br />
          Canada,
          <br />
          182 Rose St L4M 2T9
          <br />
          Barrie, ON <br />
          <span> gihyonkimu@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.392992, -79.681029]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[44.392992, -79.681029]}>
              <Popup>
                Kim lives here, come over for a cup of coffee. <br /> Easily
                customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
