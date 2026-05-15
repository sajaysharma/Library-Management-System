import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import Login from './pages/Login.jsx'; // Import the new Login component
import Home from './pages/Home.jsx'; // import the home page here 
import MyHistory from './pages/MyHistory.jsx';


import AdminLayout from './pages/Admin/AdminLayout';
import AddBook from './pages/Admin/AddBook';
import DashboardOverview from './pages/Admin/DashboardOverview';
import PendingRequests from './pages/Admin/PendingRequests';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        {/* We'll add /register soon */}
        <Route path="/my-history" element={<MyHistory />} />


        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="requests" element={<PendingRequests />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;