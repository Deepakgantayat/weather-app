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
      url: "/russia",
      name: "Russia",
      icon: SidebarIcon.Icon,
      activeIcon: SidebarIcon.Icon
    },
    {
      url: "/canada",
      name: "Canada",
      icon: SidebarIcon.Icon,
      activeIcon: SidebarIcon.Icon
    },
    {
        url: "/australia",
        name: "Australia",
        icon: SidebarIcon.Icon,
        activeIcon: SidebarIcon.Icon
      },
      {
        url: "/brazil",
        name: "Brazil",
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
            <div className = "row">
              <div className = "col-md-2 off-set-2">
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
              </div>
              <div className = "col-md-6"><br/><br/>
                <img src = "https://videohive.img.customer.envatousercontent.com/files/1616804/Preview_image.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=5891ba8b802b66c8174a9b90534bd7dc" className="weatherimage" alt = ""/>
              </div>
            </div>
       
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
              background-color: #3F3F3F;
              height: 6rem;
              margin-left: 1rem;
            }
            .siedbarLinks1 {
              padding: 0.8rem 0rem 1rem 2rem;
              background: #3aec69 0% 0% no-repeat padding-box;
              background-color: #1f1f14;
              opacity: 0.5;
            }
            .links {
              color: white;
              opacity: 0.6;
            }
            .weatherimage{
              margin-left: 7rem;
              height: 30rem;
              width: 66rem;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default SideNav;