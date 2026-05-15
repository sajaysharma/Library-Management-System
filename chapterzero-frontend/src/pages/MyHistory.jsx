import { useEffect, useState } from 'react';
import API from '../api/axios';
import Navbar from '../components/Navbar';
import { Clock, CheckCircle, AlertCircle, ReceiptIndianRupee } from 'lucide-react';

const MyHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const { data } = await API.get('/transactions/my-history');
        setTransactions(data.data);
      } catch (err) {
        console.error("Error fetching history", err);
      }
    };
    fetchMyData();
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'issued': return 'bg-blue-100 text-blue-700';
      case 'returned': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">My Library Activity</h1>
          <p className="text-gray-500">Track your borrowed books and return status.</p>
        </div>

        <div className="grid gap-6">
          {transactions.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400">You haven't requested any books yet.</p>
            </div>
          ) : (
            transactions.map((item) => (
              <div key={item._id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.book?.coverImage || 'placeholder.jpg'} 
                    className="w-16 h-20 object-cover rounded-lg shadow-sm"
                    alt="Book Cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.book?.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4">
                      <span className="flex items-center"><Clock size={14} className="mr-1"/> Issued: {item.issueDate ? new Date(item.issueDate).toLocaleDateString() : 'Pending'}</span>
                      {item.dueDate && <span className="flex items-center font-medium text-orange-600"><AlertCircle size={14} className="mr-1"/> Due: {new Date(item.dueDate).toLocaleDateString()}</span>}
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex items-center space-x-6">
                  {item.fine > 0 && (
                    <div className="flex items-center text-red-600 font-bold bg-red-50 px-3 py-1 rounded-lg">
                      <ReceiptIndianRupee size={16} className="mr-1"/> {item.fine}
                    </div>
                  )}
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusStyle(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default MyHistory;