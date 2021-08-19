import React, { useState } from 'react';
import { FaChevronDown, FaEdit, FaChevronUp, FaRegCheckSquare, FaExchangeAlt } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import './collection.css';
import { AddToast } from '../Toast';
import { CoverImg } from '../../booksAPI/CoverImg';
export const CollectionsItems = ({ collections, collection, setCollections }) => {
    const [editedCollection, setEditedCollection] = useState(collection);
    const [showCollectionData, setShowCollectionData] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [ischangeMode, setIsChangeMode] = useState(false);
    const [bookKey, setBookKey] = useState('')

    const deleteCollection = (id) => {
        const collectionsAfterFilter = collections.filter((c) => c.id !== id);
        setCollections(collectionsAfterFilter);
    };
    const updateCollection = () => {
        if (editedCollection.name === '')
            return AddToast(false, 'The value is empty. You need to insert a collection name')

        const isCollectionExist = collections.some(
            (collection) => collection.name === editedCollection.name,
        );

        if (isCollectionExist)
            return AddToast(false, 'This name already exists. Try to choose another name')

        const newCollections = collections.map((c) =>
            c.id === collection.id ? editedCollection : c,
        );

        setCollections(newCollections);
        setIsEditMode(false);
        AddToast(true, 'Collection is Updated');
    };
    const moveBooksFromCollection = (e, bookKey) => {
        const selectedValue = e.target.value;

        if (collections?.length < 0)
            return AddToast(false, 'Create Collection First ');

        const collectionToAdd = collections.find((c) => c.id === selectedValue);
        const isBookAlreadyInCollection = collectionToAdd.books.some(
            (b) => b.key === bookKey,
        );
        
        if (isBookAlreadyInCollection)
            return AddToast(false, 'Book Already Exist In Collection ');

        const cuurentBookToMove = collection.books.find((b) => b.key === bookKey);
        if (!cuurentBookToMove) return AddToast(false, 'Book Not Found :(');
        
        const books = collection.books.filter((b) => b.key !== bookKey);
        collectionToAdd.books.push(cuurentBookToMove);
        const updateCollection = {
            ...editedCollection,
            books,
        };
        const newCollections = collections.map((c) => {
            if (c.id === collection.id) return updateCollection;
            return c;
        });
        setEditedCollection(updateCollection)
        setCollections(newCollections)
        setIsChangeMode(!ischangeMode)
    }
    const handleOnChange = (e) => {
        setEditedCollection({
            ...editedCollection,
            [e.target.name]: e.target.value,
        });
    };
    const deleteBookFromCollection = (bookKey) => {
        const books = collection.books.filter((b) => b.key !== bookKey);
        const newEditedCollection = {
            ...editedCollection,
            books,
        };
        const newCollections = collections.map((c) =>
            c.id === collection.id ? newEditedCollection : c,
        );
        setEditedCollection(newEditedCollection);
        setCollections(newCollections);
    };

    return (
        <div className="collections-list-container">
            <div className="collection-item-container">
                {!isEditMode ? <span style={{ fontWeight: 'bold' }}>{collection.name}</span> :
                    <div className="collection-item-edit">
                        <input
                            name="name"
                            value={editedCollection.name}
                            onChange={(e) => handleOnChange(e)}
                            data-hook="edit-name-input"
                        />
                        <FaRegCheckSquare style={{ cursor: "pointer" }} onClick={() => updateCollection()} />
                    </div>
                }
                <div className="collection-item-icon">
                    <FaEdit
                        style={{ cursor: "pointer" }}
                        data-hook="edit-icon"
                        onClick={() => { setIsEditMode(!isEditMode) }}
                    />
                    <AiFillDelete
                        style={{ cursor: "pointer" }}
                        data-hook="delete-icon"
                        onClick={() => deleteCollection(collection.id)}
                    />
                    {!showCollectionData ?
                        <FaChevronDown onClick={() => setShowCollectionData(!showCollectionData)} style={{ cursor: "pointer" }} />
                        :
                        <FaChevronUp onClick={() => setShowCollectionData(!showCollectionData)} style={{ cursor: "pointer" }} />
                    }
                </div>
            </div>
            {showCollectionData ?
                <div>
                    {collection.books.length === 0 ? (
                        <div>No book Add</div>
                    ) :
                        !ischangeMode ?
                            <>
                                {collection.books?.map((book, index) => (
                                    <div key={index} className="collection-book-data-container">
                                        <CoverImg olid={book.cover_edition_key} />
                                        <option
                                            onChange={moveBooksFromCollection}
                                            className="collection-books-data"
                                            value={book.title}
                                        >
                                            {book.title}
                                        </option>
                                        <FaExchangeAlt
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                                setIsChangeMode(!ischangeMode)
                                                setBookKey(book.key)
                                            }}
                                        />
                                        <AiFillDelete
                                            style={{ cursor: "pointer" }}
                                            data-hook="delete-icon"
                                            onClick={() => deleteBookFromCollection(book.key)}
                                        />
                                    </div>
                                ))}
                            </>
                            :
                            <select onChange={(e) => moveBooksFromCollection(e, bookKey)}  >
                                <option value={'select collection'}>select collection</option>
                                {collections.map((coll, idx) => (
                                    <option key={idx} value={coll.id}>
                                        {coll.name}
                                    </option>

                                ))}
                            </select>
                    }
                </div> :

                null}
        </div>
    )
}
// {!ischangeMode ?
//     <select onChange={moveBooksFromCollection}>
//             <option>
//                 {book.title}
//             </option>
//         ))}
//     </select>
//     :
//     <FaExchangeAlt
//         style={{ cursor: "pointer" }}
//         onClick={() => setIsChangeMode(!ischangeMode)}

//     />
// }