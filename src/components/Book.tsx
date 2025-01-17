import './Book.css'

const Book = () => {
    return (
        <div className='flex justify-center items-start m-14'>
            <a className="book-container"
                href="../assets/journal.png"
                target="_blank"
                rel="noreferrer noopener">
                <div className="book">
                    <img
                        alt=""
                        src="https://i.postimg.cc/KcBdSdCg/Untitled-design.png"/>
                </div>
            </a>
        </div>
    )
}

export default Book
