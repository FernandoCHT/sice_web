import React from "react";
import Menu from "./components/manu/Menu";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import estudiante from "./pages/App";
import docente from "./pages/Docentes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import UpdateProfile from "./pages/UpdateProfile";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/registrar_alumno" component={estudiante} />
            <PrivateRoute path="/registrar_maestro" component={docente} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
