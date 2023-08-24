import Book from '../../components/Book/Book'
import { useClippings } from "../../hooks/myClippings";

import Quote from '../../components/Quote/Quote'
import React, { useState, useCallback  } from "react";
import './Book.css';
import './Clippings.css'

function Clippings() {
    const { clippings, book } = useClippings();
    const [bookTitle, setBookTitle] = useState('Selecione um livro para ver seus recortes')

    return (
        <div className="b-container" >
            <section className="b-wrapper">
                <div id='Books'>
                {
                    Object.entries(clippings).map((info, key) => {
                        return (
                            <div id="book" key={key}>
                                <div id="cover" className={info[0]} style={{backgroundColor: info[1].backgroundColor}} onClick={(e)=> setBookTitle(e.currentTarget.className)}>
                                    <h3>{info[1].title}</h3>
                                    <p>{info[1].author}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </section>
            <section className="b-wrapper">
                <div>
                    <div className='quotes'>
                        { clippings[bookTitle] !== undefined &&
                            Object.entries(clippings[bookTitle].quotes).map((info, key) => {
                                return (
                                    <Quote key={key} quote={info[1].content} author={clippings[bookTitle].title + ", " + clippings[bookTitle].author}></Quote>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clippings;