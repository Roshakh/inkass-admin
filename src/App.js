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
import Vakansi from "./components/pages/Вакансии/Vakansi/Vakansi";
import NewVakansi from "./components/pages/Вакансии/NewVakansi/NewVakansi";
import VakansiList from "./components/pages/Вакансии/VakansiList/VakansiList";
import Asnoviy from "./components/pages/asnoviy/Asnoviy";
import TableList from "./components/pages/table/TableList/TableList";
import Table from "./components/pages/table/Table/Table";
import TableAdd from "./components/pages/table/TableAdd/TableAdd";
import Services from "./components/pages/services/Services/Services";
import NewServices from "./components/pages/services/NewServices/NewServices";
import EditServices from "./components/pages/services/EditServices/EditServices";
import Region from "./components/pages/region/Region/Region";
import NewRegion from "./components/pages/region/NewRegion/NewRegion"; 
import EditRegion from "./components/pages/region/EditRegion/EditRegion";
import Kalkulyator from "./components/pages/kalkulyator/Kalkulyator";
import Vaprosi from "./components/pages/vaprosi/Vaprosi/Vaprosi";
import NewVaprosi from "./components/pages/vaprosi/NewVaprosi/NewVaprosi";
import EditVaprosi from "./components/pages/vaprosi/EditVaprosi/EditVaprosi";
import Portfoli from "./components/pages/portfoli/Portfoli/Portfoli";


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
          <Route path="/Vakansi" element={<VakansiList/>} /> 
          <Route path="/Vakansi/:VakansiId" element={<Vakansi/>} />
          <Route path="/NewVakansi" element={<NewVakansi/>} />         
          <Route path="/Asnoviy" element={<Asnoviy/>} />         
          <Route path="/Table" element={<TableList/>} />         
          <Route path="/Table/:TableId" element={<Table/>} />         
          <Route path="/TableAdd" element={<TableAdd/>} />         
          <Route path="Services" element={<Services/>} />         
          <Route path="/NewServices" element={<NewServices/>} /> 
          <Route path="/EditServices" element={<EditServices/>} />
          <Route path="/Region" element={<Region/>} />
          <Route path="/NewRegion" element={<NewRegion/>} />
          <Route path="/EditRegion" element={<EditRegion/>} />
          <Route path="/Kalkulyator" element={<Kalkulyator/>} />
          <Route path="/Vaprosi" element={<Vaprosi/>} />
          <Route path="/NewVaprosi" element={<NewVaprosi/>} />
          <Route path="/EditVaprosi" element={<EditVaprosi/>} />
          <Route path="/portfoli" element={<Portfoli/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
