import React from 'react'
import { getBookCoverByOLID } from '../../booksAPI';
import { BookCard } from '../Card';
import './books.css'
export const BookItem = ({ book, books, bookKey, dataHook }) => {
    const img = getBookCoverByOLID(book.cover_edition_key);

    // const addBookToCollection = (e, bookKey) => {
    //     const selectedValue = e.target.value;
    //     console.log({selectedValue, bookKey})
        // setCollectionSelected(selectedValue);
        // if (collections.length < 0)
        //   return AddToast(false, 'Create Collection First ');
    
        // const collectionToAdd = collections.find((c) => c.name === selectedValue);
    
        // const bookToAdd = books.find((b) => b.key === bookKey);
        // if (!bookToAdd) return AddToast(false, 'Book Not Found :(');
    
        // const isBookAlreadyInCollection = collectionToAdd.books.some(
        //   (b) => b.key === bookKey,
        // );
    
        // if (isBookAlreadyInCollection)
        //   return AddToast(false, 'Book Already Exist In Collection ');
    
        // collectionToAdd.books.push(bookToAdd);
        // save('collections', collections);
        // showSelectList(false);
        // AddToast(
        //   true,
        //   `the book added successfuly to ${collectionToAdd.name} collection`,
        // );
    //   };
    
    return (
        <div className="books-item-container">
            <BookCard
                title={book.title}
                img={img} year={book.first_publish_year}
                dataHook={dataHook}
                bookKey={bookKey}
            />
        </div>
    )
}
