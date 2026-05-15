import { useEffect, useState } from 'react';
import API from '../api/axios';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await API.get('/books');
        setBooks(data.data);
      } catch (error) {
        console.error("Failed to fetch books", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Discover your next <span className="text-blue-600">Great Chapter.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500">Explore our vast collection of knowledge and imagination.</p>
        </header>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;