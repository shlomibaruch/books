import React, { useState } from 'react'
import { BookItem } from './BookItem';
import './books.css'
export const BookList = ({ books = [] }) => {
    const [collection, setCollection] = useState([]);
    
    return (
        <div data-hook="all-books" className="book-list-container">
            {
                books?.length > 0 ?
                    books.map((book, index) => (
                        <BookItem 
                        key={index}
                        dataHook={`book-${index}`}
                        book={book}
                        books={books}
                        bookKey={book.key}
                        />
                    ))
                    :
                    "no results"
            }

        </div>
    )
}
