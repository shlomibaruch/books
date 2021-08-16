import React, { useState, useEffect } from 'react'
import { getItem } from '../../localstorage/localstorage';
import { BookItem } from './BookItem';
import './books.css'
export const BookList = ({ books = [] }) => {
    const [collections, setCollections] = useState([]);

    const setCollectionsFormStorage = () => {
        const collectionStorage = getItem('collections');
        if (collectionStorage?.length === 0) return;
        else setCollections(collectionStorage);
    };

    useEffect(() => {
        setCollectionsFormStorage();
    }, []);

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
                                collections={collections}
                                setCollections={setCollections}
                            />
                        ))
                        :
                        "no results"
                }
        </div>
    )
}
