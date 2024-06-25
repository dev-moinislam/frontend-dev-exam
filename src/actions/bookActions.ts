import { Book } from '../types/bookTypes';

export const ADD_BOOK = 'ADD_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const TOGGLE_SELECT_BOOK = 'TOGGLE_SELECT_BOOK';
export const DELETE_SELECTED_BOOKS = 'DELETE_SELECTED_BOOKS';
export const SORT_BOOKS = 'SORT_BOOKS';
export const SEARCH_BOOKS = 'SEARCH_BOOKS';

export const addBook = (book: Book) => ({
    type: ADD_BOOK,
    payload: book
});

export const updateBook = (book: Book) => ({
    type: UPDATE_BOOK,
    payload: book
});

export const deleteBook = (id: number) => ({
    type: DELETE_BOOK,
    payload: id
});

export const toggleSelectBook = (id: number) => ({
    type: TOGGLE_SELECT_BOOK,
    payload: id
});

export const deleteSelectedBooks = () => ({
    type: DELETE_SELECTED_BOOKS
});

export const sortBooks = (criteria: string) => ({
    type: SORT_BOOKS,
    payload: criteria
});

export const searchBooks = (query: string) => ({
    type: SEARCH_BOOKS,
    payload: query
});
