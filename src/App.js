import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Form/>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
