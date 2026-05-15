import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PlusCircle, 
  BookCopy, 
  ClipboardList, 
  Users, 
  ArrowLeft 
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/admin' },
    { name: 'Add New Book', icon: PlusCircle, path: '/admin/add-book' },
    { name: 'Manage Books', icon: BookCopy, path: '/admin/manage-books' },
    { name: 'Pending Requests', icon: ClipboardList, path: '/admin/requests' },
    { name: 'Users List', icon: Users, path: '/admin/users' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2 text-blue-600 font-bold mb-8">
          <ArrowLeft size={18} />
          <span>Back to Library</span>
        </Link>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
          Admin Console
        </h2>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 shadow-sm' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;