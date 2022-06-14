import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import FindInPageIcon from '@mui/icons-material/FindInPage';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Gojo Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <PeopleIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <HomeWorkIcon className="icon"/>
            <span>Properties</span>
          </li>
          <li>
            <FindInPageIcon className="icon"/>
            <span>Contracts</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
