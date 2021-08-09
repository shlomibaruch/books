import React from 'react'
import { getBookCoverByOLID } from '../../booksAPI';
import { BookCard } from '../Card';
import './books.css'
export const BookItem = ({ book, books, index,dataHook }) => {
    const img = getBookCoverByOLID(book.cover_edition_key);
    
    return (
        <div className="books-item-container">
            <BookCard title={book.title} img={img} year={book.first_publish_year} dataHook={dataHook} />
        </div>
    )
}
