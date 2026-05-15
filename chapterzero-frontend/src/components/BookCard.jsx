const BookCard = ({ book }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-gray-100">
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
            book.availableStock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {book.availableStock > 0 ? 'Available' : 'Out of Stock'}
          </span>
        </div>
      </div>

      <h3 className="font-bold text-gray-900 truncate">{book.title}</h3>
      <p className="text-sm text-gray-500 mb-4">{book.author}</p>
      
      <button className="w-full py-2 bg-gray-50 text-gray-700 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
        Request Book
      </button>
    </div>
  );
};

export default BookCard;