import logo from './logo.svg';
import './App.css';
import { Message } from './User/Message';
import { Userdatas } from './Admin/Userdatas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Message />} />
        <Route path="/userdatas" element={<Userdatas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
