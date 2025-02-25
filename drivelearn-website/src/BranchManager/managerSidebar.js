import "./Sidebar.css";

const Sidebar = ({sidebarOpen, closeSidebar}) => {  
      return(
      <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
        <img src='images/LogoWhite.png' alt="Logo" width="50" height="50"/>
          <h1>DriveLEARN</h1>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="closeicon" onClick={ () => closeSidebar()}>
        <i
          className="fa fa-times"
        ></i>
        </div>
      </div>

      <div className="sidebar__menu">
      <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="./">Home</a>
        </div>
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-tachometer"></i>
          <a href="./branchmanager">Dashboard</a>
        </div>
        <h2>MANAGEMENT</h2>
        <div className="sidebar__link">
          <i className="fa fa-users" aria-hidden="true"></i>
          <a href="./managerstudent">Students</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <a href="./managerinstructor">Instructors</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bus"></i>
          <a href="#">Vehicles</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">Payments</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-clock-o"></i>
          <a href="#">Training Sessions</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bell"></i>
          <a href="./managernotification">Notifications</a>
        </div>
        <h2>PROFILE</h2>
        <div className="sidebar__link">
          <i className="fa fa-cog"></i>
          <a href="./managersettings">Settings</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="./">Logout</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-times-circle"></i>
          <a href="#">Deactivate</a>
        </div>
      </div>
    </div>
);

}

export default Sidebar;