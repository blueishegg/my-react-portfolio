import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index.js'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Recent graduate from the School of Code looking for a role to further
          elevate my newfound passion for programming. Currently working on a
          side project with a collective of developers to build a clinical
          management system for a small psychology practice.
        </p>
        <p>
          Logical and computational thinking, these are the reasons I decided to
          dive into the industry of technology and enjoying every minute.
        </p>
        <p>I define myself as confident and pragmatic.</p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faNodeJs} color="#3E863D" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06259" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
