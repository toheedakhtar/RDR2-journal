import { useState } from "react"
import Home from "./components/Home";
import Reader from "./components/Reader"

function App() {

  const [showReader, setReader] = useState<boolean>(false);
  const toggleReader = () => {
    setReader((prev) => !prev);
  }
  return (
    <div className="h-screen w-screen relative">
      <Home toggle={toggleReader} />

      {showReader && (
        <div className="fixed top-0 left-0 h-full w-screen bg-black/50 flex items-center justify-center z-10">
          <Reader />
        </div>
      )}
    </div>

  )
}
export default App
