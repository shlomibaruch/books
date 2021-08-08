import React from 'react'

export const BookList = ({ books = [] }) => {
    console.log('books list', books);
    return (
        <div>
            {
                books.length > 0 ? "Hello from book list" : null
            }
            
        </div>
    )
}
