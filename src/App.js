import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}></Route>
            <Route path="users">
              <Route index element={<Users/>}/>
              <Route path=":userId" element={<User/>}/>
              <Route path="create" element={<NewUser/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
