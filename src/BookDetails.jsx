import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - in a real app, you would fetch this from an API
    const mockBooks = [
      {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: '$12.99',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg',
        description: 'A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.',
        pages: 324,
        publisher: 'Harper Perennial Modern Classics',
        published: 'July 11, 1960',
        isbn: '978-0446310789',
        language: 'English',
        genre: 'Classic, Fiction'
      },
      {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        price: '$10.99',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg',
        description: 'Among the seminal texts of the 20th century, 1984 is a rare work that grows more haunting as its futuristic purgatory becomes more real.',
        pages: 328,
        publisher: 'Signet Classic',
        published: 'June 8, 1949',
        isbn: '978-0451524935',
        language: 'English',
        genre: 'Dystopian, Science Fiction'
      },
      {
        id: 3,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: '$9.99',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg',
        description: 'The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
        pages: 180,
        publisher: 'Scribner',
        published: 'April 10, 1925',
        isbn: '978-0743273565',
        language: 'English',
        genre: 'Classic, Fiction'
      },
      {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: '$8.99',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg',
        description: 'The story follows the main character, Elizabeth Bennet, as she deals with issues of manners, upbringing, morality, education, and marriage.',
        pages: 432,
        publisher: 'Penguin Classics',
        published: 'January 28, 1813',
        isbn: '978-0141439518',
        language: 'English',
        genre: 'Classic, Romance'
      },
      {
        id: 5,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: '$14.99',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg',
        description: 'Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar.',
        pages: 366,
        publisher: 'Houghton Mifflin Harcourt',
        published: 'September 21, 1937',
        isbn: '978-0618260300',
        language: 'English',
        genre: 'Fantasy, Adventure'
      },
      {
        id: 6,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        price: '$15.99',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg',
        description: 'Harry Potter has no idea how famous he is. That\'s because he\'s being raised by his miserable aunt and uncle who are terrified Harry will learn that he\'s really a wizard.',
        pages: 309,
        publisher: 'Scholastic',
        published: 'June 26, 1997',
        isbn: '978-0590353427',
        language: 'English',
        genre: 'Fantasy, Young Adult'
      }
    ];

    // Find the book with the matching ID
    const foundBook = mockBooks.find(book => book.id === parseInt(id));
    
    // Simulate API delay
    setTimeout(() => {
      setBook(foundBook);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <div className="loading">Loading book details...</div>;
  }

  if (!book) {
    return <div className="error">Book not found</div>;
  }

  return (
    <div className="book-details">
      <div className="book-cover">
        <img src={book.cover} alt={book.title} />
      </div>
      
      <div className="book-content">
        <h1>{book.title}</h1>
        <h3>by {book.author}</h3>
        
        <div className="book-description">
          <p>{book.description}</p>
        </div>
        
        <div className="book-meta">
          <p><strong>Pages:</strong> {book.pages}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>Publication Date:</strong> {book.published}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Language:</strong> {book.language}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
        </div>
        
        <div className="price-add">
          <p className="book-price">{book.price}</p>
          <button className="add-to-cart add-to-cart-large">Add to Cart</button>
        </div>
        
        <Link to="/booklist" className="back-link">Back to Book List</Link>
      </div>
    </div>
  );
}

export default BookDetails;
