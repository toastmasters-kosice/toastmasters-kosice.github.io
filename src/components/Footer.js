import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-tmke.png'
import email from '../img/social/email.svg'
import facebook from '../img/social/facebook.svg'
import linkedin from '../img/social/linkedin.svg'
import discord from '../img/social/discord.svg'
import youtube from '../img/social/youtube.svg'
import github from '../img/github-icon.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="TM Košice"
            style={{ width: '14em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Domov
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/o-nas">
                        O nás
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/faq">
                        Časté otázky
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/kalendar">
                        Kalendár
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/pre-clenov">
                        Pre členov
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Najnovšie príspevky
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/kontakt">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                  <a title="email" href="mailto:klub@toastmasterskosice.sk">
                  <img
                    src={email}
                    alt="E-mail"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="discord" href="https://discord.gg/DzxzQ6r3Pm">
                  <img
                    src={discord}
                    alt="Discord"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="facebook" href="https://www.facebook.com/toastmasters.kosice">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/company/toastmasters-ko%C5%A1ice">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCUcc-5LcSzXbgEFkpNsiLXw">
                  <img
                    src={youtube}
                    alt="YouTube"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="github" href="https://github.com/toastmasters-kosice/">
                  <img
                    src={github}
                    alt="GitHub"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
