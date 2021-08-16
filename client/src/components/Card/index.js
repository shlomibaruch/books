import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';

import './card.css';

export const BookCard = ({ title, img, year, dataHook, bookKey, addBookToCollection, collections, collectionSelected }) => {

    const [addToCollection, setAddToCollection] = useState(false)
    return (
        <div className="card-container" data-hook={dataHook} >
            <div className="img-container">
                <img src={img} alt="book card" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h6>{title}</h6>
                </div>
                <div className="card-year">
                    <h6>{year}</h6>
                </div>
                {!addToCollection ?
                    (<FaPlusSquare onClick={() => setAddToCollection(!addToCollection)} />)
                    :
                    (<div id="select-collection">
                        <select
                             
                            onChange={(e) => addBookToCollection(e, bookKey)}
                            title="select collection"
                            data-hook={`select-${dataHook}`}
                            value={collectionSelected}
                        >
                            <option value={'select collection'}>select collection</option>
                            {collections.map((collection, index) => (<option
                            onChange={() => setAddToCollection(!addToCollection)}
                                data-hook={`option-${index}-${dataHook}`}
                                key={collection.id}
                                value={collection.name}
                            >{collection.name}</option>))

                            }
                        </select>
                    </div>)}


            </div>
        </div>
    )
}
