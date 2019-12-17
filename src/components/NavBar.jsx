import React from "react";
import { Menu, Icon, Responsive } from "semantic-ui-react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

function NavBar(props) {
  const FixedMenu = styled(Menu)`
    z-index: 1;
    position: fixed;
    width: 100vw;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 40%,
      rgba(255, 255, 255, 0) 100%
    ) !important;
  `;
  const FixedHamburgerMenu = styled(Menu)`
    z-index: 1;
    position: fixed;
    width: 100vw;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 40%,
      rgba(255, 255, 255, 0) 100%
    ) !important;
  `;

  return (
    <>
      <Responsive secondary as={FixedHamburgerMenu} {...Responsive.onlyMobile}>
        <Menu.Item>
          <Icon
            style={{
              color: "white"
            }}
            size='big'
            name={props.sideBarIsOpen ? "close" : "bars"}
            onClick={() => props.setVisible(true)}
          />
        </Menu.Item>
      </Responsive>
      <Responsive
        inverted
        secondary
        as={FixedHamburgerMenu}
        {...Responsive.onlyTablet}
      >
        <Menu.Item>
          <Icon
            style={{
              color: "white"
            }}
            size='big'
            inverted
            name={props.sideBarIsOpen ? "close" : "bars"}
            onClick={() => props.setVisible(true)}
          />
        </Menu.Item>
      </Responsive>
      <Responsive
        borderless
        inverted
        pointing
        secondary
        as={FixedMenu}
        {...Responsive.onlyComputer}
      >
        {props.routes.map(r => (
          <Menu.Item
            active={props.location.pathname === r.path}
            as={Link}
            to={r.path}
            name={r.name}
          />
        ))}
      </Responsive>
    </>
  );
}

export default withRouter(NavBar);
