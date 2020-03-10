import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
// import { Grid } from "@material-ui/core";
// import Icon from "https://cdn.onlinewebfonts.com/svg/img_338609.png"
 let Icon = ""

let SidebarIcon = {
    Icon: Icon,
    Icon: Icon,
    Icon: Icon
  };
  const sidebarLink = [
    {
      url: "/india",
      name: "India",
      icon: SidebarIcon.Icon,
      activeIcon: SidebarIcon.Icon
    },
    {
      url: "/country2",
      name: "Country2",
      icon: SidebarIcon.Icon,
      activeIcon: SidebarIcon.Icon
    },
    {
      url: "/country3",
      name: "Country3",
      icon: SidebarIcon.Icon,
      activeIcon: SidebarIcon.Icon
    },
    {
        url: "/country4",
        name: "Country4",
        icon: SidebarIcon.Icon,
        activeIcon: SidebarIcon.Icon
      },
      {
        url: "/country5",
        name: "Country5",
        icon: SidebarIcon.Icon,
        activeIcon: SidebarIcon.Icon
      }
  ];

class SideNav extends React.Component {
  state = {
    isSidebar: true
  };
  handleClick = () => {
    this.setState(prevState => {
      return {
        isSidebar: !prevState.isSidebar
      };
    });
  };
  dashboardRoute = obj => {
    console.log(obj.name);
  };
  render() {
    const { isSidebar } = this.state;
    return (
      <React.Fragment>
            
        {isSidebar ? (
          <React.Fragment>
            {sidebarLink.map((obj, index) => (
              <div className="siedbarLinks" key={index}>
                <img src={obj.icon} alt="" className="icons" />
                <Link
                  className="links"
                  to={obj.url}
                  onClick={() => this.dashboardRoute(obj)}
                >
                  {obj.name}
                </Link>
              </div>
            ))}
          </React.Fragment>
        ) : (
          ""
        )}
        <style jsx="true">
          {`
            .list-group-item {
              border: none;
            }
            .icons {
              padding: 0rem 1rem 0rem 0rem;
            }
            .siedbarLinks {
              padding: 0.8rem 0rem 1rem 2rem;
            }
            .siedbarLinks1 {
              padding: 0.8rem 0rem 1rem 2rem;
              background: #3aec69 0% 0% no-repeat padding-box;
              background-color: #1f1f14;
              opacity: 0.5;
            }
            .links {
              color: #000000;
              opacity: 0.6;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default SideNav;