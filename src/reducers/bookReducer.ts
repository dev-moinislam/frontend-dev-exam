// reducers/bookReducer.ts

import { ADD_BOOK, UPDATE_BOOK, DELETE_BOOK, TOGGLE_SELECT_BOOK, DELETE_SELECTED_BOOKS, SORT_BOOKS, SEARCH_BOOKS } from '../actions/bookActions';
import { Book } from '../types/bookTypes';

export interface BookState {
    books: Book[];
    filteredBooks: Book[];
}

// Load state from local storage
function loadStateFromLocalStorage(): BookState {
    try {
        const serializedState = localStorage.getItem('books');
        if (serializedState === null) {
            return { books: [], filteredBooks: [] };
        }
        const books = JSON.parse(serializedState);
        return { books, filteredBooks: books };
    } catch (err) {
        console.error('Error loading state from localStorage:', err);
        return { books: [], filteredBooks: [] };
    }
}

// Save state to local storage
function saveStateToLocalStorage(state: Book[]) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('books', serializedState);
    } catch (err) {
        console.error('Error saving state to localStorage:', err);
    }
}

const initialState: BookState = loadStateFromLocalStorage();

const bookReducer = (state = initialState, action: any): BookState => {
    switch (action.type) {
        case ADD_BOOK:
            const updatedBooksAdd = [...state.books, action.payload];
            saveStateToLocalStorage(updatedBooksAdd);
            return { ...state, books: updatedBooksAdd, filteredBooks: updatedBooksAdd };

        case UPDATE_BOOK:
            const updatedBooksUpdate = state.books.map(book =>
                book.id === action.payload.id ? action.payload : book
            );
            saveStateToLocalStorage(updatedBooksUpdate);
            return { ...state, books: updatedBooksUpdate, filteredBooks: updatedBooksUpdate };

        case DELETE_BOOK:
            const remainingBooks = state.books.filter(book => book.id !== action.payload);
            saveStateToLocalStorage(remainingBooks);
            return { ...state, books: remainingBooks, filteredBooks: remainingBooks };

        case TOGGLE_SELECT_BOOK:
            const toggledBooks = state.books.map(book =>
                book.id === action.payload ? { ...book, selected: !book.selected } : book
            );
            saveStateToLocalStorage(toggledBooks);
            return { ...state, books: toggledBooks, filteredBooks: toggledBooks };

        case DELETE_SELECTED_BOOKS:
            const unselectedBooks = state.books.filter(book => !book.selected);
            saveStateToLocalStorage(unselectedBooks);
            return { ...state, books: unselectedBooks, filteredBooks: unselectedBooks };

        case SORT_BOOKS:
            const sortedField = action.payload;
            const sortedBooks = [...state.books];
            if (sortedField === 'name') {
                sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortedField === 'price') {
                sortedBooks.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            } else if (sortedField === 'category') {
                sortedBooks.sort((a, b) => a.category.localeCompare(b.category));
            }
            return { ...state, books: sortedBooks, filteredBooks: sortedBooks };

        case SEARCH_BOOKS:
            const query = action.payload.toLowerCase();
            const filteredBooks = state.books.filter(book =>
                book.name.toLowerCase().includes(query) ||
                book.category.toLowerCase().includes(query)
            );
            return { ...state, filteredBooks };

        default:
            return state;
    }
};

export default bookReducer;
