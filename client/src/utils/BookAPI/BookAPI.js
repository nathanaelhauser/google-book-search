import axios from 'axios'
 
const BookAPI = {
    
    searchForBooks: (book) => axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${book}&key=AIzaSyAETxvXScdVFLmhNttP35AvouHSR9zEMow`),
    getSavedBooks: () => axios.get('/books'),
    addBook: (book) => axios.post('/books', book),
    updateBook: (id, values) => axios.put(`/books/${id}`, values),
    deleteBook: (id) => axios.delete(`/books/${id}`)
}

export default BookAPI