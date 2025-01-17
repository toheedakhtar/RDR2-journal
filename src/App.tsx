import Book from "./components/Book"

function App() {

  return (
    <div>

      <div className="h-screen bg-[url(https://wallpapers.com/images/hd/best-red-dead-redemption-2-background-6fwqcr362rsg4x71.jpg)]">
        <div className="p-8">
          <div className="text-6xl text-center text-slate-100 drop-shadow-[0_7.2px_0.2px_rgba(-10,4,6,8)] font-rd">RED</div>
          <div className="text-6xl text-center text-slate-100 drop-shadow-[0_7.2px_0.2px_rgba(-10,4,6,8)] font-rd">DEAD</div>
          <div className="text-6xl text-center text-red-600  drop-shadow-[0_7.2px_0.2px_rgba(-10,4,6,8)] font-rd">JOURNAL</div>
        </div>
        <Book />

        <p className="font-rd text-2xl text-center text-slate-100 px-[20%]">

        Welcome to the Red Dead Journal, a tribute to the legendary Arthur Morgan and his iconic journal from Red Dead Redemption 2. Immerse yourself in the reflections, sketches, and musings of a gunslinger navigating the rugged frontier. This site not only allows you to read Arthur’s journal reliving his journey through the untamed West—but also gives you the space to create your own story. Inspired by the game’s rich themes and design, you can write your own entries, blending your thoughts with the rustic charm of a timeless outlaw’s diary. Begin your adventure and make your mark on these pages, just as Arthur did.

        </p>
      </div>

    </div>
  )
}
export default App
