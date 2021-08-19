import React, { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa';
import './card.css'
export const BooksCard = ({ title, img, year, dataHook, bookKey, addBookToCollection, collections, collectionSelected }) => {
    const [addToCollection, setAddToCollection] = useState(false)

    return (
        <div style={{ backgroundImage: `url(${img})` }} className="book-card-container" data-hook={dataHook}>
            <div className="book-card-content">
                <h3 className="book-card-title">{title}</h3>
                <h4 className="book-card-year">{year}</h4>

                {!addToCollection ?
                    (<FaPlusSquare className="add-collection-icon" title="add" onClick={() => setAddToCollection(!addToCollection)} />)
                    :
                    (<select
                        className="books-card-select"
                        onChange={(e) => addBookToCollection(e, bookKey)}
                        title="select collection"
                        data-hook={`select-${dataHook}`}
                        value={collectionSelected}
                    >
                        <option value={'select collection'}>select collection</option>
                        {collections.map((collection, index) => (<option
                            data-hook={`option-${index}-${dataHook}`}
                            key={collection.id}
                            value={collection.name}
                        >{collection.name}</option>))

                        }
                    </select>
                    )}

            </div>

        </div>
    )
}
