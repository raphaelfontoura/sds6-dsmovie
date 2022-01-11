import './styles.css';

import { ReactComponent as GithubIcon } from 'assets/img/github.svg';


const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/raphaelfontoura">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/raphaelfontoura</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
