import "./App.css";
import { BrowserRouter, Routes, useLocation } from "react-router-dom";
import routes from "./routes";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { AnimatedRoute } from "./components/AnimatedRoute";

function AnimatedRoutesWrapper() {
  const location = useLocation();

  const hideHeaderFooter = [
    "/login",
    "/register",
    "/change-password",
    "/unauthorized",
    "/not-found",
  ].includes(location.pathname);

  return (
    <AnimatePresence mode="wait">
      <AnimatedRoute key={location.pathname}>
        <div className="App">
          {!hideHeaderFooter && <Header />}
          <div className="app-content">
            <Routes location={location} key={location.pathname}>
              {routes}
            </Routes>
          </div>
          {!hideHeaderFooter && <Footer />}
        </div>
      </AnimatedRoute>
    </AnimatePresence>
  );
}

// function AppContent() {
//   const location = useLocation();
//   // ẩn header và footer ở các trang authentication
//   const hideHeaderFooter = [
//     "/login",
//     "/register",
//     "/change-password",
//     "/unauthorized",
//     "/not-found",
//   ].includes(location.pathname);

//   return (
//     <div className="App">
//       {!hideHeaderFooter && <Header />}
//       <div className="app-content">
//         <Routes>{routes}</Routes>
//       </div>
//       {!hideHeaderFooter && <Footer />}
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      {/* <AppContent /> */}
      <AnimatedRoutesWrapper />
    </BrowserRouter>
  );
}

export default App;
