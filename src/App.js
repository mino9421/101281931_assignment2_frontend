import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, LinkContainer } from 'react-bootstrap';

import { Link, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'


import GetEmployees from './GetEmployees'
import PostEmployee from './PostEmployee';
import GetByIdEmployee from './GetByIdEmployee';
import UpdateEmployee from './UpdateEmployee';
import DeleteEmployee from './DeleteEmployee';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<GetEmployees />}/>
          <Route path={"/post_employee"} element={<PostEmployee />}/>
          <Route path={"/employee"} element={<GetByIdEmployee />}/>
          <Route path={"/delete_employee"} element={<DeleteEmployee />}/>
          <Route path={"/update_employee"} element={<UpdateEmployee />}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
