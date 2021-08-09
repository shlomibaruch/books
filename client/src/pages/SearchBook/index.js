import React, { useState } from 'react'
import './searchBook.css';
import { GrSearch } from 'react-icons/gr';
import { searchBooks } from '../../booksAPI/index'
import { BookList } from '../../components/BookList/BookList';
export const SearchBook = () => {
    const [serachInputValue, setSerachInputValue] = useState('');
    const [bookList, setBookList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const onChange = (e) => {
        setSerachInputValue(e.target.value);
    };
    const click = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await getBooks(serachInputValue);
    }

    const getBooks = async (searchValue) => {
        const res = await searchBooks(searchValue);
        if (res?.docs?.length > 0) {
            const books = res.docs;
            setIsLoading(false);
            setBookList(books);
            //   save('books', books);
        } else {
            setIsLoading(false);
            setBookList([]);
            //   setResultNotFound('No Books Found');
        }
        // setFilterMode(false);
    };

    // const handaleKeyDown = (e) => {
    //     if (e.keyCode === 13 || e.type === 'click') {
    //         setIsLoading(true);

    //     }
    // };
    return (
        <section>

            <div className="search-contaitner">

                <div className="search-input-contaitner">
                    <input type="text" className="search-input" onChange={onChange} />
                    <GrSearch className="search-icon" onClick={click} />
                </div>

            </div>

            {
                !isLoading ? (

                    <BookList books={bookList} />

                ) : ("loading ...")
            }
        </section>
    )
}
