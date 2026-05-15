import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminSidebar from '../../components/AdminSidebar';

const AdminLayout = () => {
  const { user } = useAuth();

  // Security Guard: If not admin, kick them out!
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet /> {/* This is where the specific Admin pages will load */}
      </main>
    </div>
  );
};

export default AdminLayout;