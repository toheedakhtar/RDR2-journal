import Book from "./components/Book"

function App() {

  return (
    <div className="h-screen bg-black">
      <div className="p-8">
        <div className="text-6xl text-center text-red-800 drop-shadow-lg font-rd">RED</div>
        <div className="text-6xl text-center text-red-800 drop-shadow-lg font-rd">DEAD</div>
        <div className="text-6xl text-center text-red-800 drop-shadow-lg font-rd">JOURNAL</div>
      </div>
      <Book />
    </div>
  )
}

export default App
