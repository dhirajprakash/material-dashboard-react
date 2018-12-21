// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Painel",
    navbarName: "Painel",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Cadastro de Lead",
    navbarName: "Cadastro de Lead",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Listar Leads",
    navbarName: "Liste de Leads",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/maps",
    sidebarName: "Viabilidade Checker",
    navbarName: "Viabilidade",
    icon: LocationOn,
    component: Maps
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
