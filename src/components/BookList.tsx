import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import BookItem from './BookItem';
import BulkDelete from './BulkDelete';

const BookList: React.FC = () => {
    const { filteredBooks } = useSelector((state: RootState) => state.books);

    return (
        <div className="book-list-container">
            <SearchBar />
            <div className="actions">
                <SortDropdown />
                <BulkDelete/>
            </div>
            <div className="table-container">
                {filteredBooks.length === 0 ? (
                    <p style={{textAlign:'center',marginTop:'10px'}}>There are currently no books available in the library.</p>
                ) : (
                    <table className='book-table'>
                        <thead>
                            <tr>
                                <th>Select</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Information</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBooks.map(book => (
                                <BookItem key={book.id} book={book} />
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default BookList;
