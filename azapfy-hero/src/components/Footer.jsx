import React from 'react'
import { GrGithub, GrLinkedin } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import './footer.css'

export default function Footer() {
  return (
    <footer className="d-flex justify-content-between mx-5 border-top align-items-center">
      <div className="col-md-4 d-flex align-items-center">
        <span className="text-muted footer-name">Gustavo Braga</span>
      </div>
      <ul className="col-md-4 nav justify-content-end list-unstyled d-flex footer-icons">
        <IconContext.Provider value={{size: 25, color: 'white'}}>
          <li className="ms-3">
            <a
              data-testid="github-link"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/k4nl">
                <GrGithub />
            </a>
          </li>
          <li className="ms-3">
            <a
              data-testid="linkedin-link"
              rel="noreferrer"
              href="https://www.linkedin.com/in/gustavo-luis-de-moura-braga-3a524159/" target="_blank">
                <GrLinkedin />
            </a>
          </li>
        </IconContext.Provider>
      </ul>

      
  </footer>
  )
}
