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

                        Here's Arthur Morgan's journal - all of it. No need to pause the game or search through YouTube videos anymore. Just scroll through and read at your own pace.
                        We all know how special this journal is - it's not just a collection of mission notes or a gameplay log. It's where Arthur truly comes alive, where every sketch and scribbled thought shows us who he really is beyond the missions and shootouts. From his earliest days with Dutch's gang to his final entries, this journal tells the real story.
                        Reading it in-game means juggling menus and controls, and hunting for specific moments on YouTube is a pain. So here it is - the whole journal, ready to read whenever you want to revisit Arthur's journey or just take in his thoughts about the changing world around him.

                        </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Home;





