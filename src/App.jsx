import { NavLink, Route, Routes } from "react-router";
import "./App.css"
import UserList from "./UserList";
import UserAdd from "./UserAdd";

function App() {

  return (
    <div>
      <ul className="nav-list">
        <li>
          <NavLink to="/">User List</NavLink>         
        </li>
        <li>
           <NavLink to="/add-user">Add User</NavLink>
        </li>
      </ul>
      {/* <h1>Make Routes and Pages for Add User and User List UI</h1> */}
      {/* <UserList /> */}
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<UserAdd />} />
      </Routes>
    </div>
  )
}

export default App;

