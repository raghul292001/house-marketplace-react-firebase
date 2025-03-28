import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import Nav from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Explore/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/profile" element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/forgot-password" element={<ForgetPassword/>}/>
      </Routes>
      <Nav/>
      <ToastContainer/>
    </Router>
    </>
  );
}

export default App;
