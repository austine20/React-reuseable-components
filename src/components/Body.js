import React from "react";
import Header from "./Header/Header";
import logo from "../Images/panaceaHub.png";
import icon1 from "../Images/icons8-home.svg";
import icon2 from "../Images/icons8-portfolio-30.png";
import icon3 from "../Images/icons8-more-info-30.png";
import icon4 from "../Images/icons8-more-info-32.png";
import menuIcon from "../Images/menu-svgrepo-com.svg";
import Button from "./Forms/Button/Button";

function Body() {
  return (
    <div>
      <div>
        <Header
          icons={[
            {
              imgLogo: logo,
              hamburgerMenuIcon: menuIcon,
              link: "/",
              width: 25,
              height: 25,
            },
          ]}
          backgroundColor={"whitesmoke"}
          menuSummary={[
            {
              menuTag: icon1,
              title: "Home",
              link: "/new",
              width: 20,
            },
            { menuTag: icon2, title: "Project", link: "/new", width: 20 },
            { menuTag: icon3, title: "About", link: "/new", width: 20 },
            { menuTag: icon4, title: "Contact", link: "/new", width: 20 },
          ]}
        />
      </div>

      <div style={{ marginTop: "50px" }}>
        <Button
          buttonText={"lorem"}
          buttonStyle={"btn-primary-solid"}
          buttonSize={"btn-small"}
        />
      </div>
    </div>
  );
}

export default Body;
