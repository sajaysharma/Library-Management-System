import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, LogOut, User, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-6 transition-transform">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ChapterZero
            </span>
          </Link>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-gray-600 hover:text-blue-600 flex items-center space-x-1 text-sm font-medium">
                    <LayoutDashboard size={18} />
                    <span className="hidden sm:inline">Dashboard</span>
                  </Link>
                )}
                
                <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <User size={18} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 hidden sm:inline">{user.name}</span>
                  </div>
                  <button 
                    onClick={logout}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              </>
            ) : (
              <Link 
                to="/login" 
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 shadow-md shadow-blue-200 transition-all"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;