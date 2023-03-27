import './App.css';
import Header from './component/Header';
import { Routes, Route } from 'react-router-dom'
import StudentList from './view/StudentList';

function App(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <StudentList /> } />
        <Route path="/list-student" element={ <StudentList /> } />
      </Routes>
    </>
  );
}

export default App;
