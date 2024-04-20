import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoLists from './components/todolists.component';
import EditTodo from './components/edittodo.component';
import AddTodo from './components/addtodo.component';



function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">Todo Application</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="navbar-brand" to="/">Home</Link>
             </li>
             <li class="nav-item active">
              <Link class="navbar-brand" to="/add">Add Todo</Link>
             </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' Component={TodoLists} />
        <Route path='/edit/:id' Component={EditTodo} />
        <Route path='/add' Component={AddTodo} />
      </Routes>
    </Router>
  );
}

export default App;
