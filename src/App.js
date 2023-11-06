import "./App.css";
import "./styles/login.css";
import "./styles/register.css";
import "./styles/userlist.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import UserList from "./pages/UserList ";
import UserEdit from "./pages/UserEdit";
import LoginGoogleOAuth from "./pages/LoginGoogleOAuth";
import UploadFile from "./components/UploadFile";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
