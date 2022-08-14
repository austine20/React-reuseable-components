import React, { useEffect, useState } from "react";
import "./header.scss";
import PropTypes from "react";
// import { Link } from "react-router-dom";

function Header({ menuSummary, icons, backgroundColor }) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      {viewportWidth < breakpoint ? (
        <nav className="mobilenav" style={{ backgroundColor }}>
          <>
            {icons.map((icon, key) => (
              <div key={key}>
                <a href={icon.link} className="mobilenav-name">
                  <img
                    src={icon.imgLogo}
                    alt=""
                    width={icon.width}
                    height={icon.height}
                  />
                </a>

                <button className="mobilenav-harmburger" onClick={toggleMenu}>
                  <img
                    src={icon.hamburgerMenuIcon}
                    alt=""
                    width={icon.width}
                    height={icon.height}
                  />
                </button>
              </div>
            ))}

            {showMobileMenu && (
              <div className="mobilenav-menu">
                {menuSummary.map((menu, key) => (
                  <ul className="mobilenav-menu-box" key={key}>
                    <li className="mobilenav-menu-box-list">
                      <a
                        href={menu.link}
                        className="mobilenav-menu-box-list-link"
                      >
                        <img
                          src={menu.menuTag}
                          alt=""
                          width={menu.width}
                          height={menu.height}
                        />
                        <span>{menu.title}</span>
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </>
        </nav>
      ) : (
        <nav className="navigation" style={{ backgroundColor }}>
          <>
            {icons.map((icon, key) => (
              <div key={key}>
                <a href={icon.link} className="navigation-name">
                  <img
                    src={icon.imgLogo}
                    alt=""
                    width={icon.width}
                    height={icon.height}
                  />
                </a>

                <button className="navigation-harmburger">
                  <img
                    src={icon.hamburgerMenuIcon}
                    alt=""
                    width={icon.width}
                    height={icon.height}
                  />
                </button>
              </div>
            ))}

            <div className="navigation-menu">
              {menuSummary.map((menu, key) => (
                <ul className="navigation-menu-box" key={key}>
                  <li className="navigation-menu-box-list">
                    <a
                      href={menu.link}
                      className="navigation-menu-box-list-link"
                    >
                      <img
                        src={menu.menuTag}
                        alt=""
                        width={menu.width}
                        height={menu.height}
                      />
                      <span>{menu.title}</span>
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </>
        </nav>
      )}
    </>
  );
}

Header.propTypes = {
  menuSummary: PropTypes.object,
  menuTag: PropTypes.symbol,
  title: PropTypes.String,
  link: PropTypes.String,
  width: PropTypes.Number,
  height: PropTypes.Number,
  icons: PropTypes.array,
  imgLogo: PropTypes.symbol,
  hamburgerMenuIcon: PropTypes.symbol,
};

Header.defaultPropTypes = {
  title: "",
  link: "",
  width: "",
  height: "",
};

export default Header;
