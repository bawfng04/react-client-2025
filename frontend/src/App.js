// in frontend/src/App.js
import "./App.css";
import { BrowserRouter, Routes, useLocation } from "react-router-dom";
import routes from "./routes";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

function AppContent() {
  const location = useLocation();
  // ẩn header và footer ở các trang authentication
  const hideHeaderFooter = [
    "/login",
    "/register",
    "/change-password",
    "/unauthorized",
    "/not-found",
  ].includes(location.pathname);

  return (
    <div className="App">
      {!hideHeaderFooter && <Header />}
      <div className="app-content">
        <Routes>{routes}</Routes>
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
