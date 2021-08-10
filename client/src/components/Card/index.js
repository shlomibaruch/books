import React from 'react';
import './card.css';

export const BookCard = ({ title, img, year, dataHook, bookKey }) => {

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
                <div className="btn">
                    <button>
                        View More
                    </button>
                </div>
            </div>
        </div>
    )
}
