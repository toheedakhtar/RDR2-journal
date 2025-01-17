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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jouyB4kvXAoiJCEvo0r92B7HseIszF0vHQ&s"/>
                </div>
            </a>
        </div>
    )
}

export default Book
