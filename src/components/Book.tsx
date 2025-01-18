import './Book.css'

interface BookProps {
    open : () => void;
}

const Book : React.FC<BookProps>  = ({open}) => {

    const toggleReader = (e : React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        open();
    }

    return (
        <div className='flex justify-center items-start'>
            <div className="book-container"
                rel="noreferrer noopener" onClick={toggleReader}>
                <div className="book">
                    <img
                        alt=""
                        src="image.png"/>
                </div>
            </div>
        </div>
    )
}

export default Book
