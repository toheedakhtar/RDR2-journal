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
                loading ? (<div className="bg-red-700 text-neutral-50 flex justify-center items-center">Loading...</div>) : (
                    <div className="h-screen bg-[url(/homeCover.jpg)] bg-cover flex flex-col items-center justify-between transition ease-in">
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

                        THIS IS ARTHUR MORGAN'S JOURNAL FROM RED DEAD REDEMPTION 2. IT CONTAINS ALL THE ENTERIES OF THE STORY.
                        HUGE SHOUTOUT TO <a href="https://linktr.ee/aicosu" className="text-red-700 underline">SANTA MARIA</a> FOR CREATING <a href="https://www.aicosu-cosplays.com/arthurmorgan" className="text-red-700 underline">photos</a> and pdf OF THE JOURNAL. THIS WOULD BE SO MUCH MORE TIMECONSUMING AND DIFFICULT WITHOUT THESE.
                        THIS IS FULLY FREE AND IS DONE ONLY FOR THE PURPOSE OF GIVING SOMETHING TO RDR2 COMMUNITY AND IT WAS FUN.<br/>
                        @ <a href="https://bit.ly/toheeed" className="text-red-700">TOHEED AKHTAR</a> 
                        

                        </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Home;





