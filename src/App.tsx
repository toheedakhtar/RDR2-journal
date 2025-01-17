import { useState } from "react"
import Home from "./components/Home";
import Reader from "./components/Reader"

function App() {

  const [showReader, setReader] = useState<boolean>(false);
  const toggleReader = () => {
    setReader((prev)=>!prev);
  }
  return (
    <div className="h-screen w-screen">
      {showReader ? <Reader/> : <Home toggle={toggleReader} />}
    </div>

  )
}
export default App
