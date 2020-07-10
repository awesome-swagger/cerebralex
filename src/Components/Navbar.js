import React, { useState } from "react";

const Navbar = ({onToggleSidebar}) => {
  const [isNotification, setNotificatoin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onBellClick = () => setNotificatoin(!isNotification);
  const onUserClick = () => setIsOpen(!isOpen);

  return (
    <div className="top_nav">
      <div className="nav_menu">        
        <nav>          
          <div className="navbar nav_title mobie__toggle border-none">
            <div className="nav toggle">              
              <a onClick={onToggleSidebar}><i className="fa fa-bars"></i></a>
            </div>
            <a>
              <img src="images/logo.svg" />
            </a>
          </div>

          <ul className="nav navbar-nav navbar-right userprofile-nav">
            <li>
              <a onClick={onBellClick} className="open__notification">
                <span className={`fa ${isNotification ? "fa-bell" : "fa-bell-o"}`}></span>
              </a>
              {isNotification &&
                <div className="notification__dropdown">
                  <div className="notification__header">
                    <h3 className="notification__close">
                      Notifications
                      <span className="fa fa-times"></span>
                    </h3>
                    <div className="notification__content__sec">
                      <span>New</span>
                      <ul>
                        <li>
                          <a onClick={''}>
                            <div className="list__nofitication">
                              <input id="radio1" type="radio" name="radio" />
                              <label for="radio1" className="radio">
                                You’r campaign: <strong> Campaign number one </strong> has
                                      reached to it’s <strong> daily limit. </strong>
                                <div className="notification__time"><i className="fa fa-clock-o"></i> 1h</div>
                              </label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a onClick={''}>
                            <div className="list__nofitication">
                              <input id="radio2" type="radio" name="radio" />
                              <label for="radio2" className="radio">
                                You’r campaign: <strong> Campaign number one </strong> has
                                          reached to it’s <strong> daily limit. </strong>
                                <div className="notification__time"><i className="fa fa-clock-o"></i> 1h</div>
                              </label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a onClick={''}>
                            <div className="list__nofitication">
                              <input id="radio3" type="radio" name="radio" />
                              <label for="radio3" className="radio">
                                You’r campaign: <strong> Campaign number one </strong> has
                                          reached to it’s <strong> daily limit. </strong>
                                <div className="notification__time"><i className="fa fa-clock-o"></i> 1h</div>
                              </label>
                            </div>
                          </a>
                        </li>
                        <span>Earlier</span>
                        <li>
                          <a onClick={''}>
                            <div className="list__nofitication">
                              <input id="radio1" type="radio" name="radio" />
                              <label for="radio1" className="radio">
                                You’r campaign: <strong> Campaign number one </strong> has
                                          reached to it’s <strong> daily limit. </strong>
                                <div className="notification__time">
                                  <i className="fa fa-clock-o">1h</i>
                                </div>
                              </label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a onClick={''}>
                            <div className="list__nofitication">
                              <input id="radio1" type="radio" name="radio" />
                              <label for="radio1" className="radio">
                                You’r campaign: <strong> Campaign number one </strong> has
                                          reached to it’s <strong> daily limit. </strong>
                                <div className="notification__time"><i className="fa fa-clock-o"></i> 1h</div>
                              </label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a onClick={''}>
                            <div className="list__nofitication">
                              <input id="radio1" type="radio" name="radio" />
                              <label for="radio1" className="radio">
                                You’r campaign: <strong> Campaign number one </strong> has
                                          reached to it’s <strong> daily limit. </strong>
                                <div className="notification__time"><i className="fa fa-clock-o"></i> 1h</div>
                              </label>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              }
            </li>
            <li className={isOpen ? "user__profile open" : "user__profile"}>
              <a onClick={onUserClick} className="user-profile dropdown-toggle">
                <img src="images/userimage.svg" alt="" />
                Nadav Kerzner
                <span className=" fa fa-angle-down"></span>
              </a>
              <ul className="dropdown-menu dropdown-usermenu pull-right">
                <li><a onClick={""}>Log Out</a></li>
                <li><a onClick={""}>Change Password</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default Navbar;