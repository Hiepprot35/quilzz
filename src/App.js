import logo from './logo.svg';
import './App.css';
import AddDocument from './component/addDocument/AddDocument';
import ViewTerm from './component/viewTerm/viewTerm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddDocument />} />
        <Route path="/view" element={<ViewTerm />} />
      </Routes>
    </Router>
  );
}

export default App;
