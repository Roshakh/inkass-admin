import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Asosiy from "./components/pages/home/Asosiy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/pages/user/userList/UserList";
import User from "./components/pages/user/user/User";
import NewUser from "./components/pages/user/newUser/NewUser";
import ClientList from "./components/pages/client/clientList/ClientList";
import Client from "./components/pages/client/client/Client";
import NewClient from "./components/pages/client/newClient/NewClient";
import Review from "./components/pages/reviews/review";
import NewManagement from "./components/pages/Management/newManagement/newManagement";
import ManagementList from "./components/pages/Management/managementList/ManagementList";
import Management from "./components/pages/Management/Management/Management";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Asosiy/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/users/:userId" element={<User/>} />
          <Route path="/newUser" element={<NewUser/>} />
          <Route path="/clients" element={<ClientList/>} />
          <Route path="/clients/:clientId" element={<Client/>} />
          <Route path="/newClient" element={<NewClient/>} />
          <Route path="/newReview" element={<Review/>} />
          <Route path="/NewManagement" element={<NewManagement/>} />
          <Route path="/ManagementList" element={<ManagementList/>} />
          <Route path="/management/:managementId" element={<Management/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
