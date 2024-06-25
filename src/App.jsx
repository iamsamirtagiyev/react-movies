import { useRoutes } from "react-router-dom"
import routes from "./routes"
import {Context} from './context'
import { useState } from "react"

function App() {

  const [open, setOpen] = useState(false)
  const imgBaseUrl = 'https://image.tmdb.org/t/p/original'

  const data = {
    open,
    setOpen,
    imgBaseUrl
  }

  return (
    <Context.Provider value={data}>
      <div>
        { useRoutes(routes) }
      </div>
    </Context.Provider>
  )
}

export default App
