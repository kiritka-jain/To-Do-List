import logo from './logo.svg';
import './App.css';
import ToDoList from './components/todolist';
import PageNotFound from "./components/pageNotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<ToDoList/>} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
