import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Book } from '../types/bookTypes';
import { toggleSelectBook, deleteBook } from '../actions/bookActions';
import Button from './reusable/Button';
import BookDetailsPopup from './BookDetailsPopup';

interface BookItemProps {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    const dispatch = useDispatch();
    const [isDetailsPopupOpen, setDetailsPopupOpen] = useState(false);
    const handleDelete = () => dispatch(deleteBook(book.id));
    const handleCheckboxChange = () => dispatch(toggleSelectBook(book.id));
    const toggleDetailsPopup = () => setDetailsPopupOpen(!isDetailsPopupOpen);

    return (
        <>
        <tr className="book-item">
            <td><input type="checkbox" checked={book.selected} onChange={handleCheckboxChange} /></td>
            <td onClick={toggleDetailsPopup}>{book.name}</td>
            <td>{book.price}</td>
            <td>{book.category}</td>
            <td><Link className='custom-button' to={`/books/${book.id}`}>Details</Link></td>
            <td><Button className='delete-button' onClick={handleDelete}>Delete</Button></td>
        </tr>
        {isDetailsPopupOpen && <BookDetailsPopup book={book} onClose={toggleDetailsPopup} />}
        </>
    );
};

export default BookItem;
