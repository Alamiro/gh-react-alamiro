import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
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
      <div class="menu-overlay d-none"></div>

      <div class="right-side d-none d-lg-block">
      <div id="date"></div>
      <div class="social-box">
        <div class="follow-label">
          <span>Redes Sociales</span>
        </div>
        <div class="social d-none d-lg-block">
          <br />
          <a href="https://hola.cl">
            <i class="bi bi-youtube"></i>
          </a>
          <a href="javascript:void(0);">
            <i class="bi bi-tiktok"></i>
          </a>
          <a href="javascript:void(0);">
            <i class="bi bi-github"></i>
          </a>
          <a href="javascript:void(0);">
            <i class="bi bi-code-square"></i>
          </a>
          <a href="javascript:void(0);">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="javascript:void(0);">
            <i class="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
      <div class="next-prev-page">
        <button type="button" class="prev-page bg-base-color hstack">
          <i class="bi bi-chevron-compact-up mx-auto"></i>
        </button>
        <button type="button" class="next-page bg-base-color mt-3 hstack">
          <i class="bi bi-chevron-compact-down mx-auto"></i>
        </button>
      </div>
    </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
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
