import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Login from './login/login'
import StudentList from './login/studentList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Welcome to my app</h1>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/studentList' element={<StudentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


