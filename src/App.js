import logo from './logo.svg';
import './App.css';
import AddDocument from './component/addDocument/AddDocument';
import ViewTerm from './component/viewTerm/viewTerm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="*" element={<AddDocument />} />
        <Route path="/view" element={<ViewTerm />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
