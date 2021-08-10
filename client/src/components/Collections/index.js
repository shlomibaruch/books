import React, { useState } from 'react'
import './collection.css';
import { v4 as uuidv4 } from 'uuid';
import { GrFormAdd } from 'react-icons/gr';
export const AddCollections = ({ setCollections, collections }) => {
    const [collectionInput, setCollectionInput] = useState('');

    const handleOnChange = (e) => {
        setCollectionInput(e.target.value);
    };

    const addCollection = () => {

        const isCollectionExist = collections.some(
            (collection) => collection.name === collectionInput,
        );
        if (!collectionInput)
            return alert("no value")
        if (isCollectionExist)
            return alert("exist")
        const collection = {
            id: uuidv4(),
            name: collectionInput,
            books: [],
        };
        setCollections([...collections, collection]);
        setCollectionInput('');
        return
    }
    return (
        <div>
            <h1 style={{ "textAlign": "center" }}>Add collection</h1>
            <div className="add-collection-input">
                <input
                    type="text"
                    value={collectionInput}
                    placeholder="Add New Collection"
                    onChange={handleOnChange}
                    data-hook="add-collection-input"
                />

                <GrFormAdd
                    className="add-icon"
                    onClick={() => addCollection()}
                />
            </div>
        </div>
    )
}
