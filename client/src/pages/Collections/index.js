import React, { useEffect, useState } from 'react'
import { AddCollections } from '../../components/Collections'
import { CollectionsItems } from '../../components/Collections/CollectionsItems';
import { getItem, setItem } from '../../localstorage/localstorage'
export const Collections = () => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const collectionFromStorge = getItem('collections');
        if (collectionFromStorge.length === 0) return;
        setCollections(collectionFromStorge || []);
    }, [])

    useEffect(() => {
        console.log("useeffect collections", collections);
        setItem('collections', collections);
    }, [collections]);

    return (
        <div>
            <AddCollections
                setCollections={setCollections}
                collections={collections}
            />
            <div>
                {collections.map((collection, index) => (
                    <CollectionsItems
                        key={index}
                        collection={collection}
                        collections={collections}
                        setCollections={setCollections}
                    />
                ))}
            </div>
        </div>
    )
}
