import logo from './logo.svg';
import './App.css';
import AddDocument from './component/addDocument/AddDocument';
import ViewTerm from './component/viewTerm/viewTerm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/view" element={<AddDocument />} />
        <Route path="/" element={<ViewTerm />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
