import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSelectedBooks } from '../actions/bookActions';
import Button from './reusable/Button';

const BulkDelete: React.FC = () => {
    const dispatch = useDispatch();

    const handleBulkDelete = () => {
        dispatch(deleteSelectedBooks());
    };

    return (
        <Button onClick={handleBulkDelete} className='delete-button'>Delete Selected</Button>
    );
};

export default BulkDelete;
