import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login.jsx'; // Import the new Login component

const Home = () => (
  <div className="p-10">
    <h1 className="text-2xl font-bold">Welcome to the Library</h1>
    <p>Catalog coming soon!</p>
  </div>
);

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        {/* We'll add /register soon */}
      </Routes>
    </Router>
  );
}

export default App;