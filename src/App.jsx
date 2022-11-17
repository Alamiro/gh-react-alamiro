import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/css/bootstrap.css'
import './assets/css/bootstrap-icons.css'
import './assets/css/jquery.mCustomScrollbar.css'
import './assets/css/animate.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/style.css'
import './assets/colors/golden.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <div className="menu-overlay d-none"></div>

      <div className="right-side d-none d-lg-block">
      <div id="date"></div>
        <div className="social-box">
          <div className="follow-label">
            <span>Redes Sociales</span>
          </div>
          <div className="social d-none d-lg-block">
            <br />
            <a href="javascript:void(0);">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="javascript:void(0);">
              <i className="bi bi-tiktok"></i>
            </a>
            <a href="javascript:void(0);">
              <i className="bi bi-github"></i>
            </a>
            <a href="javascript:void(0);">
              <i className="bi bi-code-square"></i>
            </a>
            <a href="javascript:void(0);">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="javascript:void(0);">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="next-prev-page">
          <button type="button" className="prev-page bg-base-color hstack">
            <i className="bi bi-chevron-compact-up mx-auto"></i>
          </button>
          <button type="button" className="next-page bg-base-color mt-3 hstack">
            <i className="bi bi-chevron-compact-down mx-auto"></i>
          </button>
        </div>
      </div>
      <div className="left-side  nav-close">
        <div className="menu-content-align">
          <div className="left-side-image">
            <img src={'../assets/img/webdesigner/alamiro_2019.jpg'} alt={''} />
          </div>
          <h1 className="mt-1">Alamiro Vera</h1>
          <a className="download-cv primary-button d-none d-lg-inline-block" href="javascript:void(0);">Download CV</a>
          <div className="container d-lg-none d-inline-block">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-muted mb-0">Ingeniero en Informatica</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-align">
          <ul className="list-group menu text-center " id="menu">
            <li className="list-group-item">
              <a href="#hero">
                <i className="bi bi-house"></i>
                <span>home</span>
              </a>
            </li>
            <li className="list-group-item">
            <a href="#about" className="custom-btn">
              <i className="bi bi-person"></i>
              <span>about</span>
              </a>
            </li>
            <li className="list-group-item">
            <a href="#resume">
              <i className="bi bi-clipboard-check"></i>
              <span>resume</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#portfolio">
              <i className="bi bi-collection"></i>
              <span>works</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#blog">
              <i className="bi bi-book"></i>
              <span>blog</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#contact">
              <i className="bi bi-geo-alt"></i>
              <span>contact</span>
            </a>
          </li>

          </ul>
        </div>
        
      </div>

    

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" classNameName="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
    
  )
}

export default App
