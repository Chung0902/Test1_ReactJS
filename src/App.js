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
import DashboardPage from "./pages/DashboardPage";
import DashboardContextAPI from "./pages/DashboardContextAPI";
import Profile from "./components/Profile";
import NotFoundPage from "./components/NotFoundPage";
import ReactBootstrap from "./components/Baitap22/ReactBootstrap";
import CoreUI from "./components/Baitap24/CoreUI";
import PrimeReact from "./components/Baitap23/PrimeReact";
import MaterialUI from "./components/Baitap25/MaterialUI";
import MainPage from "./components/MainPage";
import DemoCoreUI from "./components/Baitap30/DemoCoreUI";
import ImageDisplay from "./components/Baitap31/ImageDisplay";

import EnrollmentForm from "./components/Baitap38/EnrollmentForm";
import StudentForm from "./components/Baitap39/StudentForm";
import StudentsTable from "./components/Baitap37/StudentsTable";
import ComponentExample from "./components/Baitap41/ComponentExample";
import DemoUseFormik from "./components/Baitap42/DemoUseFormik";

import ScrollToTopButton from "react-scroll-to-top";
import { StudentProvider } from "./context/StudentContext";
import StudentsTable1 from "./components/Baitap45/StudentsTable";
import HookDemo from "./components/Baitap46/HookDemo";
import { ToastProvider } from "./components/Baitap46/ToastProvider";
import CalculatorComponent from './components/Baitap47/CalculatorComponent';
import SidebarDemo from './components/Baitap48/SidebarDemo';

function App() {
  return (
    <ReduxProvider store={store}>
      <StudentProvider>
      <ToastProvider>
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
              <Route
                path="/dashboardcontextAPI"
                element={<DashboardContextAPI />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/reactbootstrap" element={<ReactBootstrap />} />
              <Route path="/primereact" element={<PrimeReact />} />
              <Route path="/coreui" element={<CoreUI />} />
              <Route path="/materialui" element={<MaterialUI />} />
              <Route path="/mainpage" element={<MainPage />} />
              <Route path="/democoreui" element={<DemoCoreUI />} />
              <Route path="/imagedisplay" element={<ImageDisplay />} />
              <Route path="/studentstable" element={<StudentsTable />} />
              <Route path="/enrollmentform" element={<EnrollmentForm />} />

              <Route path="/StudentForm" element={<StudentForm />} />
              <Route path="/ComponentExample" element={<ComponentExample />} />
              <Route path="/DemoUseFormik" element={<DemoUseFormik />} />

              <Route path="/studentstable1" element={<StudentsTable1 />} />

              <Route path="/HookDemo" element={<HookDemo />} />

              <Route path="/CalculatorComponent" element={<CalculatorComponent />} />
              <Route path="/SidebarDemo" element={<SidebarDemo />} />

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

            <ScrollToTopButton />
          </AuthProvider>
        </Router>
        </ToastProvider>
      </StudentProvider>
    </ReduxProvider>
  );
}

export default App;
