import "./App.css";
import "./styles/login.css";
import "./styles/register.css";
import "./styles/userlist.css";
import "./styles/parent.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import UserList from "./pages/UserList ";
import UserEdit from "./pages/UserEdit";
import LoginGoogleOAuth from "./pages/LoginGoogleOAuth";
import UploadFile from "./components/UploadFile";
import ParentComponent from "./components/ParentComponent";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userlist" element={<UserList/>} />
        <Route path="/useredit/:id" element={<UserEdit/>} />
        <Route path="/logingoogleoauth" element={<LoginGoogleOAuth/>} />
        <Route path="/uploadfile" element={<UploadFile/>} />
        <Route path="/parentComponent" element={<ParentComponent/>} />
        <Route path="/parent1" element={<Parent1/>} />
        <Route path="/parent2" element={<Parent2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
