import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Book } from '../types/bookTypes';
import { toggleSelectBook, deleteBook } from '../actions/bookActions';
import Button from './reusable/Button';

interface BookItemProps {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteBook(book.id));
    const handleCheckboxChange = () => dispatch(toggleSelectBook(book.id));

    return (
        <tr className="book-item">
            <td><input type="checkbox" checked={book.selected} onChange={handleCheckboxChange} /></td>
            <td>{book.name}</td>
            <td>{book.price}</td>
            <td>{book.category}</td>
            <td><Link className='custom-button' to={`/books/${book.id}`}>Details</Link></td>
            <td><Button className='delete-button' onClick={handleDelete}>Delete</Button></td>
        </tr>
    );
};

export default BookItem;
