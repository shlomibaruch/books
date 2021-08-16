import React, { useState } from 'react'
import { getBookCoverByOLID } from '../../booksAPI';
import { setItem } from '../../localstorage/localstorage';
import { BookCard } from '../Card';
import { AddToast } from '../Toast';
import './books.css'

export const BookItem = ({ book, books, bookKey, dataHook, collections }) => {
    const img = getBookCoverByOLID(book.cover_edition_key);
    const [collectionSelected, setCollectionSelected] = useState('');

    const addBookToCollection = (e, bookKey) => {
        const selectedValue = e.target.value;
        setCollectionSelected(selectedValue);
        if (collections.length < 0)
            return AddToast(false, 'Create Collection First ');

        const collectionToAdd = collections.find((c) => c.name === selectedValue);

        const bookToAdd = books.find((b) => b.key === bookKey);
        if (!bookToAdd) return alert(false, 'Book Not Found :(');

        const isBookAlreadyInCollection = collectionToAdd.books.some(
            (b) => b.key === bookKey,
        );

        if (isBookAlreadyInCollection)
            return AddToast(false, 'Book Already Exist In Collection ');

        collectionToAdd.books.push(bookToAdd);
        setItem('collections', collections);
        // showSelectList(false);
        AddToast(
            true,
            `the book added successfuly to ${collectionToAdd.name} collection`,
        );
    };

    return (
        <div className="books-item-container">
            {books.length > 0 ? <BookCard
                title={book.title}
                img={img} year={book.first_publish_year}
                dataHook={dataHook}
                bookKey={bookKey}
                addBookToCollection={addBookToCollection}
                collections={collections}
                collectionSelected={collectionSelected}
            /> :
                null}

        </div>
    )
}
