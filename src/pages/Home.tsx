import React, { useState } from 'react';
import BookList from '../components/BookList';
import AddBookPopup from '../components/AddBookPopup';


const Home: React.FC = () => {
    const [isAddBookPopupOpen, setAddBookPopupOpen] = useState(false);

    const openAddBookPopup = () => setAddBookPopupOpen(true);
    const closeAddBookPopup = () => setAddBookPopupOpen(false);

    return (
        <div className="app">
            <button className='custom-button add-button' onClick={openAddBookPopup}>Add Book</button>
            <BookList />
            {isAddBookPopupOpen && <AddBookPopup onClose={closeAddBookPopup} />}
        </div>
    );
};

export default Home;
