import './Book.css'

interface BookProps {
    open : () => void;
}

const Book : React.FC<BookProps>  = ({open}) => {

    const toggleReader = (e : React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        open();
    }

    return (
        <div className='flex justify-center items-start'>
            <a className="book-container"
                href="../assets/journal.png"
                rel="noreferrer noopener" onClick={toggleReader}>
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
