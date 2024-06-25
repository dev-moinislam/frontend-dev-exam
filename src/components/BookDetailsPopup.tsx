import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Book } from '../types/bookTypes';
import { updateBook, deleteBook } from '../actions/bookActions';
import Button from './reusable/Button';

interface BookDetailsPopupProps {
    book: Book;
    onClose: () => void;
}

const BookDetailsPopup: React.FC<BookDetailsPopupProps> = ({ book, onClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(book.name);
    const [price, setPrice] = useState(book.price);
    const [category, setCategory] = useState(book.category);
    const [description, setDescription] = useState(book.description);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateBook({ ...book, name, price, category, description }));
        onClose();
    };

    const handleDelete = () => {
        dispatch(deleteBook(book.id));
        onClose();
    };

    return (
        <div className="popup">
            <form onSubmit={handleUpdate}>
                <input value={name} onChange={(e) => setName(e.target.value)} required />
                <input value={price} onChange={(e) => setPrice(e.target.value)} required />
                <input value={category} onChange={(e) => setCategory(e.target.value)} required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                <Button type="submit" className='add-button'>Update Book</Button>
                <Button type="button" onClick={handleDelete} className='delete-button'>Delete</Button>
                <Button type="button" onClick={onClose} className='cancel-button'>Cancel</Button>
            </form>
        </div>
    );
};

export default BookDetailsPopup;
