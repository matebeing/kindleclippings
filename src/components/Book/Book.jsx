import './Book.css';
import { useClippings } from "../../hooks/myClippings";

function Book(params) {
    const { handleSetBook } = useClippings();

    // Generator from StackOverFlow
    const getColor = () => {
        return "hsl(" + 360 * Math.random() + ',' +
                   (25 + 70 * Math.random()) + '%,' + 
                   (85 + 10 * Math.random()) + '%)'
    }

    return (
        <div id="book">
            <div id="cover" className={params.title} style={{backgroundColor: getColor()}} onClick={(e)=>{handleSetBook(e.currentTarget.className)}}>
                <h3>{params.title}</h3>
                <p>{params.author}</p>
            </div>
        </div>
    )
}

export default Book;