import "./App.css";
// import Dashboard from "./pages/Dashboard";
// import { Signup } from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Signin />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/signin"
            element={<Signin />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="*"
            element={<Signin />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
