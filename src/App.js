// App.js
import "./App.css";
import "./styles/login.css";
import "./styles/register.css";
import "./styles/userlist.css";
import "./styles/parent.css";
import "./styles/DashboardPage.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import UserList from "./pages/UserList ";
import UserEdit from "./pages/UserEdit";
import LoginGoogleOAuth from "./pages/LoginGoogleOAuth";
import UploadFile from "./components/UploadFile";
import ParentComponent from "./components/ParentComponent";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
import MyProvider from "./components/MyProvider";
import ParentContext from "./components/ParentContext";
import ParentContextAPI from "./components/ParentContextAPI";
import ParentComponent1 from "./components/ParentComponent1";
import ParentComponent2 from "./components/ParentComponent2";
import store from "../src/store";
import { AuthProvider } from "./context/AuthContext";
import { Provider as ReduxProvider } from "react-redux";
import DashboardPage from './pages/DashboardPage';
import DashboardContextAPI from './pages/DashboardContextAPI';
import Profile from "./components/Profile";
import NotFoundPage from './components/NotFoundPage';
import ReactBootstrap from './components/ReactBootstrap';
import CoreUI from "./components/CoreUI";
import PrimeReact from './components/PrimeReact';

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/useredit/:id" element={<UserEdit />} />
            <Route path="/logingoogleoauth" element={<LoginGoogleOAuth />} />
            <Route path="/uploadfile" element={<UploadFile />} />
            <Route path="/parentComponent" element={<ParentComponent />} />
            <Route path="/parent1" element={<Parent1 />} />
            <Route path="/parent2" element={<Parent2 />} />
            <Route path="/parentComponent1" element={<ParentComponent1 />} />
            <Route path="/parentComponent2" element={<ParentComponent2 />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboardcontextAPI" element={<DashboardContextAPI />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="/reactbootstrap" element={<ReactBootstrap/>} />
            <Route path="/primereact" element={<PrimeReact/>} />
            <Route path="/coreui" element={<CoreUI/>} />
            <Route
              path="/parentcontext"
              element={
                <MyProvider>
                  <ParentContext />
                </MyProvider>
              }
            />
            <Route
              path="/parentcontextAPI"
              element={
                <MyProvider>
                  <ParentContextAPI />
                </MyProvider>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ReduxProvider>
  );
}

export default App;
