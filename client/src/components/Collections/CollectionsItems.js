import React, { useState } from 'react';
import { FaChevronDown, FaEdit, FaChevronUp, FaRegCheckSquare } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import './collection.css';
export const CollectionsItems = ({ collections, collection, setCollections }) => {
    const [editedCollection, setEditedCollection] = useState(collection);
    const [showCollectionData, setShowCollectionData] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const deleteCollection = (id) => {
        console.log(id);
        const collectionsAfterFilter = collections.filter((c) => c.id !== id);
        setCollections(collectionsAfterFilter);
    };
    const updateCollection = () => {
        if (editedCollection.name === '')
            return alert("value empty")

        const isCollectionExist = collections.some(
            (collection) => collection.name === editedCollection.name,
        );

        if (isCollectionExist)
            return alert('This Collection Name is Exist, Try another name',
                'top-center')

        const newCollections = collections.map((c) =>
            c.id === collection.id ? editedCollection : c,
        );

        setCollections(newCollections);
        setIsEditMode(false);
        // AddToast(true, 'Collection is Updated');
    };
    const handleOnChange = (e) => {
        setEditedCollection({
            ...editedCollection,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="collections-list-container">
            <div className="collection-item-container">

                {!isEditMode ? collection.name :
                    <div className="collection-item-edit">
                        <input
                            name="name"
                            value={editedCollection.name}
                            onChange={(e) => handleOnChange(e)}
                            data-hook="edit-name-input"
                        />
                        <FaRegCheckSquare onClick={() => updateCollection()} />
                    </div>
                }
                <div className="collection-item-icon">
                    <FaEdit 
                    data-hook="edit-icon"
                    onClick={() => { setIsEditMode(!isEditMode) }}
                     />

                    <AiFillDelete 
                    data-hook="delete-icon"
                    onClick={() => deleteCollection(collection.id)} 
                    />
                    {!showCollectionData ?
                        <FaChevronDown onClick={() => setShowCollectionData(!showCollectionData)} /> :
                        <FaChevronUp onClick={() => setShowCollectionData(!showCollectionData)} />

                    }

                </div>
            </div>
            {showCollectionData ?
                <div>
                    hello books
                </div> :
                null}
        </div>
    )
}
