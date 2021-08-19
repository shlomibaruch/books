import React, { useEffect, useState } from 'react'
import { AddCollections } from '../../components/Collections'
import { CollectionsItems } from '../../components/Collections/CollectionsItems';
import { getItem, setItem } from '../../localstorage/localstorage';
import { FaList } from 'react-icons/fa';
import { CgDisplayGrid } from 'react-icons/cg';
import '../../components/Collections/collection.css'
import { CollectionsGridItems } from '../../components/Collections/CollectionsGridItems';
export const Collections = () => {
    const collectionFromStorge = getItem('collections');
    const [displayCollections, setDisplayCollections] = useState(false);
    const [collections, setCollections] = useState(collectionFromStorge);

    useEffect(() => {
        if (collectionFromStorge.length === 0) return;
        setCollections(collectionFromStorge || []);
        
    },[])

    useEffect(() => {
        setItem('collections', collections);
    }, [collections]);

    return (
        <div className="f1-collection-container">
            <AddCollections
                setCollections={setCollections}
                collections={collections}
            />
            <div className="collections-display-data-container">
                <FaList onClick={() => setDisplayCollections(!displayCollections)} />
                <CgDisplayGrid onClick={() => setDisplayCollections(!displayCollections)} id="collection-display-grid-icon" />
            </div>
            {!displayCollections ?
                <div>
                    {collections.map((collection, index) => (
                        <CollectionsItems
                            key={index}
                            collection={collection}
                            collections={collections}
                            setCollections={setCollections}
                            isListMode={displayCollections}
                        />
                    ))}
                </div> 
                :
                <CollectionsGridItems />
            }
        </div>
    )
}
