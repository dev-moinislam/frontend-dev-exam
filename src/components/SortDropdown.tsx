import React from 'react';
import { useDispatch } from 'react-redux';
import { sortBooks } from '../actions/bookActions';

const SortDropdown: React.FC = () => {
    const dispatch = useDispatch();

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(sortBooks(e.target.value));
    };

    return (
        <select onChange={handleSortChange}>
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
        </select>
    );
};

export default SortDropdown;
