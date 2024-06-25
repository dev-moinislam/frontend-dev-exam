import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const BookDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const bookId = Number(id);
    const book = useSelector((state: RootState) => 
        state.books.filteredBooks.find(book => book.id === bookId)
    );

    if (!book) {
        return <div className='container'><div className='book-details'>Book not found</div></div>;
    }

    return (
        <div className='container'>
            <div className='book-details'>
                <h2>{book.name}</h2>
                <p className='price'><strong>Price:</strong> ${book.price}</p>
                <p><strong>Category:</strong> {book.category}</p>
                <p><strong>Description:</strong> {book.description}</p>
            </div>
        </div>
    );
};

export default BookDetails;
