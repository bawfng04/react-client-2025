import { Route } from "react-router-dom";

//components
import ExampleComponent from "./components/specific/ExampleComponent/ExampleComponent";
import FAQ from "./components/specific/FAQ/FAQ";
import NotFound from "./components/specific/NotFound/NotFound";
import Unauthorized from "./components/specific/Unauthorized/Unauthorized";
import Homepage from "./components/specific/Homepage/Homepage";
import Login from "./components/specific/authentication/Login/Login";
import Register from "./components/specific/authentication/Register/Register";
import ChangePassword from "./components/specific/authentication/ChangePassword/ChangePassword";

const routes = (
  <>
    <Route path="/" element={<Homepage />} />
    <Route path="/home" element={<Homepage />} />
    <Route path="/example" element={<ExampleComponent />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/change-password" element={<ChangePassword />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export default routes;
