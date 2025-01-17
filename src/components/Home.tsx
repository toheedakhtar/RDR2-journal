import { useEffect, useState } from "react";
import Book from "./Book";

interface HomeProps {
    toggle: () => void;
}

const Home: React.FC<HomeProps> = ({ toggle }) => {

    const [loading, setLoading] = useState<boolean>(false);
    const bgImage = "/homeCover.jpg"

    useEffect(()=>{
        const img = new Image();
        img.src = bgImage;

        img.onload = () => {setLoading(false)};
        img.onerror = () => {setLoading(false)};
    }, [bgImage])

    return (
        <div className="h-screen w-screen">
            {
                loading ? (<div> bg is loading</div>) : (
                    <div className="h-screen bg-[url(/homeCover.jpg)] bg-cover flex flex-col items-center justify-between">
                        <div className="py-5 flex flex-col justify-center">
                            <div className="text-6xl text-center text-slate-100 drop-shadow-[0_7.2px_0.2px_rgba(-10,4,6,8)] font-rd">RED</div>
                            <div className="text-6xl text-center text-slate-100 drop-shadow-[0_7.2px_0.2px_rgba(-10,4,6,8)] font-rd">DEAD</div>
                            <div className="text-6xl text-center text-red-600  drop-shadow-[0_7.2px_0.2px_rgba(-10,4,6,8)] font-rd">JOURNAL</div>
                            <button className="font-rd text-slate-50 pt-6" onClick={toggle}>Read the journal</button>
                        </div>

                        <div >
                            <Book open={toggle} />
                        </div>

                        <div className="px-[20%]">

                        <p className="font-rd text-2xl text-center text-slate-100 mb-5">

                            Welcome to the Red Dead Journal, a tribute to the legendary Arthur Morgan and his iconic journal from Red Dead Redemption 2. Immerse yourself in the reflections, sketches, and musings of a gunslinger navigating the rugged frontier. This site not only allows you to read Arthur’s journal reliving his journey through the untamed West—but also gives you the space to create your own story. Inspired by the game’s rich themes and design, you can write your own entries, blending your thoughts with the rustic charm of a timeless outlaw’s diary. Begin your adventure and make your mark on these pages, just as Arthur did.

                        </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Home;





