import React from 'react'
import { BookItem } from './BookItem';
import './books.css'
export const BookList = ({ books = [] }) => {
    return (
        <div data-hook="all-books" className="book-list-container">
            {
                books?.length > 0 ?
                    books.map((book, index) => (
                        <BookItem 
                        key={index}
                        dataHook={`book-${index}`}
                        index={index}
                        book={book}
                        books={books}
                        />
                    ))
                    :
                    "no results"
            }

        </div>
    )
}
