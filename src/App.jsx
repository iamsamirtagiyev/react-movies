import { useRoutes } from "react-router-dom"
import routes from "./routes"
import {Context} from './context'
import { useState } from "react"

function App() {

  const [open, setOpen] = useState(false)

  const data = {
    open,
    setOpen
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
