import React, { useState } from "react";
import menu_sub from "../static/images/menu-sub.jpg";
import featured from "../static/images/featured.jpg";
import icon_3 from "../static/images/icon-3.jpg";
import Link from "next/link";


const SideBarView = (props) => {
  const [mentorClassFlag, setMentorClassFlag] = useState(true);
  const [studentClassFlag, setstudentClassFlag] = useState(true);

  const subjectList = props.sideBar && props.sideBar._sideBar != undefined ? props.sideBar._sideBar : null;

  return (
    <React.Fragment>
      {/* <!-- Sidebar --> */}
      <div className="border-right clearfix" id="sidebar-wrapper">
        <div className="sidebar1">
          <div className="list-group list-group-flush">
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fa fa-address-book-o"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fa fa-user-circle"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fa fa-handshake-o"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fa fa-envelope-open-o"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fa fa-podcast"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fa fa-window-close-o"></i>
            </a>
          </div>
        </div>

        <div className="sidebar2">
          <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
            <ul className="list-group sb-ul">
              <a data-toggle="collapse" className="toggle-bg-dark list-group-item list-group-item-action flex-column align-items-start collapsed">
                <div className="d-flex w-100 justify-content-start align-items-center rl-aes" onClick={() => setMentorClassFlag(!mentorClassFlag)}>
                  <span className="menu-collapsed cursor-poniter">Mentors</span>

                  <span className="right badge badge-dangercolapse ml-5 rl-b">{subjectList && subjectList.length}</span>
                  <span className="submenu-icon ml-auto rl-si"></span>
                </div>
              </a>
              <div id="submenu1" className={mentorClassFlag ? "sidebar-submenu collapse show" : "sidebar-submenu collapse"}>
                <ol>
                  {subjectList &&
                    subjectList.map((subject, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={{
                              pathname: "/posts",
                              query: {
                                memberId: 1,
                                career: subject,
                              },
                            }}
                          >
                            <a className="list-group-item list-group-item-action submenu-inner text-white active">
                              <span
                                className="menu-collapsed"
                                onClick={() => {
                                  props.handleMentorItem(subject);
                                }}
                              >
                                {`${index + 1} ${subject}`}
                              </span>
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                </ol>
              </div>
              <a data-toggle="collapse" className="toggle-bg-dark list-group-item list-group-item-action flex-column align-items-start collapsed">
                <div className="d-flex w-100 justify-content-start align-items-center rl-aes" onClick={() => setstudentClassFlag(!studentClassFlag)}>
                  <span className="menu-collapsed cursor-poniter">Students</span>
                  <span className="right badge badge-dangercolapse ml-5 rl-b">40</span>
                  <span className="submenu-icon ml-auto rl-si"></span>
                </div>
              </a>
              {/* <!-- Submenu content --> */}
              <div id="submenu2" className={studentClassFlag ? "sidebar-submenu collapse show" : "sidebar-submenu collapse"}>
                <Link
                  href={{
                    pathname: "/posts",
                    query: {
                      memberId: 1,
                      type: "all",
                    },
                  }}
                >
                  <a className="list-group-item list-group-item-action submenu-inner text-white">
                    <img className="rl-sub-img" src={menu_sub} />
                    <span className="menu-collapsed">All Post </span>
                  </a>
                </Link>
                <Link
                  href={{
                    pathname: "/posts",
                    query: {
                      memberId: 1,
                      type: "feature",
                    },
                  }}
                >
                  <a className="list-group-item list-group-item-action submenu-inner text-white">
                    <img className="rl-sub-img" src={featured} /> <span className="menu-collapsed">Featured</span>
                  </a>
                </Link>
                <Link
                  href={{
                    pathname: "/posts",
                    query: {
                      memberId: 1,
                      type: "allchapter",
                    },
                  }}
                >
                  <a className="list-group-item list-group-item-action submenu-inner text-white">
                    <img className="rl-sub-img" src={icon_3} />
                    <span className="menu-collapsed">All Chapter</span>
                  </a>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBarView;
