import React from "react";
import PropTypes from 'prop-types';

const Sidebar = ({onToggleSidebar}) => {
  return (
    <div className="col-md-3 display__block left_col wow slideInLeft" data-wow-delay="0.2s">
      <div className="left_col scroll-view">
        <div className="navbar nav_title border-none">
          <div className="nav toggle">
            {/* // eslint-disable-next-line */}
            <a onClick={onToggleSidebar}>
              <i className="fa fa-bars" />
            </a>
          </div>
          <a>
            <img src="images/logo.svg" />
          </a>
        </div>
        <div className="clearfix"></div>
        <br />
        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
          <div className="menu_section">
            <ul className="nav side-menu">
              <li>
                <a>
                  <span className="dash-icon"><img src="images/account.svg" /></span>
                  <span className="hide-text">Accounts</span>
                </a>
              </li>
              <li className="active">
                <a>
                  <span className="dash-icon"><img src="images/dashboard.svg" /></span>
                  <span className="hide-text">Dashboard</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="dash-icon"><img src="images/campaings.svg" /></span>
                  <span className="hide-text">Compaigns</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="dash-icon"><img src="images/anaylytic.svg" /></span>
                  <span className="hide-text">Analytics</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="dash-icon"><img src="images/creative.svg" /></span>
                  <span className="hide-text">Creative Library</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="dash-icon"><img src="images/change-history.svg" /></span>
                  <span className="hide-text">Change History</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  onToggleSidebar: PropTypes.func,
}

export default Sidebar;