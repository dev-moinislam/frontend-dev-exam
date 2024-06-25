import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/bookActions';
import Button from './reusable/Button';

interface AddBookPopupProps {
    onClose: () => void;
}

const AddBookPopup: React.FC<AddBookPopupProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addBook({ id: Date.now(), name, price, category, description, selected: false }));
        onClose();
    };

    return (
        <div className="popup">
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
                <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
                <Button type="submit" className='add-button'>Add Book to Shop</Button>
                <Button type="button" className='cancel-button' onClick={onClose}>Cancel</Button>
            </form>
        </div>
    );
};

export default AddBookPopup;
