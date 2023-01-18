import "./App.css"
import ReactGA from "react-ga"
import { useEffect } from "react"

function App() {
  const TRACKING_ID = "UA - 254531361 - 1"
  console.log(TRACKING_ID)
  ReactGA.initialize()

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='hero'>
          <h2 className='sitio'>Sitio en construcción</h2>
          <h1> Inmo - Puebla</h1>
          {/* <h3 className="naming">
            compra, renta , administracion de propiedades
          </h3> */}
        </div>
      </header>
    </div>
  )
}

export default App
