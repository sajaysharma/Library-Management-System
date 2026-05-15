import { useEffect, useState } from 'react';
import API from '../../api/axios';
import { Check, X, User as UserIcon } from 'lucide-react';

const PendingRequests = () => {
  const [requests, setRequests] = useState([]);

  // Note: You'll need an Admin-specific route to fetch ALL pending requests
  // For now, let's assume we use a filtered general transaction fetch
  useEffect(() => {
    const fetchRequests = async () => {
      const { data } = await API.get('/transactions/my-history'); 
      setRequests(data.data.filter(r => r.status === 'pending'));
    };
    fetchRequests();
  }, []);

  const handleAction = async (id, action) => {
    try {
      await API.put(`/transactions/${action}/${id}`);
      setRequests(requests.filter(r => r._id !== id));
    } catch (err) {
      alert("Failed to update status");
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Pending Requests</h1>
        <p className="text-gray-500">Manage incoming book borrow requests.</p>
      </div>

      <div className="space-y-4">
        {requests.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400">No pending requests at the moment.</p>
          </div>
        ) : (
          requests.map((req) => (
            <div key={req._id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <UserIcon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{req.book.title}</h4>
                  <p className="text-sm text-gray-500">Requested by User ID: {req.user}</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleAction(req._id, 'approve')}
                  className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all"
                >
                  <Check size={20} />
                </button>
                <button 
                  className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PendingRequests;