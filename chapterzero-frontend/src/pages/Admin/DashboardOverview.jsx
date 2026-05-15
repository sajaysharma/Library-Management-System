import { useEffect, useState } from 'react';
import { Book, Users, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import API from '../../api/axios';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4">
    <div className={`p-4 rounded-2xl ${color}`}>
      <Icon size={24} className="text-white" />
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
    </div>
  </div>
);

const DashboardOverview = () => {
  const [stats, setStats] = useState({ books: 0, requests: 0, issued: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const booksRes = await API.get('/books');
        const transRes = await API.get('/transactions/my-history'); // Simplified for now
        setStats({
          books: booksRes.data.count,
          requests: 0, // You can filter transRes for 'pending'
          issued: 0    // You can filter transRes for 'issued'
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Library Insights</h1>
        <p className="text-gray-500">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Books" value={stats.books} icon={Book} color="bg-blue-600" />
        <StatCard title="Pending Requests" value="12" icon={Clock} color="bg-orange-500" />
        <StatCard title="Books Issued" value="45" icon={TrendingUp} color="bg-green-500" />
        <StatCard title="Overdue Returns" value="3" icon={AlertCircle} color="bg-red-500" />
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-50">
                <th className="pb-4 font-semibold uppercase tracking-wider">Book</th>
                <th className="pb-4 font-semibold uppercase tracking-wider">User</th>
                <th className="pb-4 font-semibold uppercase tracking-wider">Date</th>
                <th className="pb-4 font-semibold uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {/* This will be mapped from your transaction data */}
              <tr>
                <td className="py-4 font-medium text-gray-900">The Alchemist</td>
                <td className="py-4 text-gray-600">John Doe</td>
                <td className="py-4 text-gray-500">May 15, 2026</td>
                <td className="py-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Issued</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;