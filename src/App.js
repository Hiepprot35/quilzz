import logo from './logo.svg';
import './App.css';
import AddDocument from './component/addDocument/AddDocument';
import ViewTerm from './component/viewTerm/viewTerm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './component/loading/loading';
import ViewTitle from './component/viewtitle/viewTitle';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/add" element={<AddDocument link={"add"} />} />
        <Route path="/title/:title" element={<ViewTerm link="view"/>} />
        <Route path="/" element={<ViewTitle link="view"/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
