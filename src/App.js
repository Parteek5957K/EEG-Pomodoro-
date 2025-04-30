import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
    <Router>
      <div className="app-container" 
           style={{
             backgroundImage: 'url("https://image.cnbcfm.com/api/v1/image/107187616-1675288127676-Feature_Image_16x9.jpg?v=1675352511")',
             minHeight: '100vh',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundAttachment: 'fixed',
             backgroundRepeat: 'no-repeat'
           }}>
        
        {/* Main content container with proper spacing */}
        <div className="container py-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;