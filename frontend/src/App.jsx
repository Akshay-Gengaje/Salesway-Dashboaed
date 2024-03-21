import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./layout/AppLayout";
import Campaigns from "./pages/Campaigns";
import Flows from "./pages/Flows";
import Integrations from "./pages/Integrations";
import Customers from "./pages/Customers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className=" h-screen w-screen lg:max-h-screen lg:max-w-screen lg:overflow-hidden flex font-poppins">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<AppLayout />}>
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/flows" element={<Flows />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/customers" element={<Customers />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
