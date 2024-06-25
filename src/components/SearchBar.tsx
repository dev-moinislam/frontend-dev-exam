import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_BOOKS, searchBooks } from '../actions/bookActions';
import { RootState } from '../store/store';
import Button from './reusable/Button';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();
    const { books } = useSelector((state: RootState) => state.books);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
    const handleSearch = () => {
        dispatch(searchBooks(searchQuery));
    };

    useEffect(() => {
        dispatch({ type: SEARCH_BOOKS, payload: '' });
    }, [books, dispatch]);

    return (
        <div className="search-container">
        <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={handleSearchInputChange}
        />
        <Button className='custom-button' onClick={handleSearch}>Search</Button>
    </div>
    );
};

export default SearchBar;
