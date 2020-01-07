import React, { useEffect, useState } from "react";
import { Menu, Icon, Divider, Responsive } from "semantic-ui-react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

function NavBar(props) {
  const FixedMenu = styled(Menu)``;
  const FixedHamburgerMenu = styled(Menu)`
    z-index: 1;
    position: fixed;
    width: 100vw;
    // background: rgb(255, 255, 255);
    // background: linear-gradient(
    //   180deg,
    //   rgba(0, 0, 0, 0.3) 40%,
    //   rgba(255, 255, 255, 0) 100%
    // ) !important;
  `;

  return (
    <>
      <Responsive
        secondary={true}
        inverted
        as={FixedHamburgerMenu}
        {...Responsive.onlyMobile}
      >
        <Menu.Item>
          <Icon
            size='big'
            style={{
              color: "#F7F7F7",
              textShadow:
                "-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey"
            }}
            inverted
            name={props.sideBarIsOpen ? "close" : "bars"}
            onClick={() => props.setVisible(true)}
          />
        </Menu.Item>
      </Responsive>
      <Responsive secondary as={FixedHamburgerMenu} {...Responsive.onlyTablet}>
        <Menu.Item>
          <Icon
            style={{
              color: "#F7F7F7",
              textShadow:
                "-1px -1px 0 grey, 1px -1px 0 grey, -1px 1px 0 grey, 1px 1px 0 grey"
            }}
            size='big'
            name={props.sideBarIsOpen ? "close" : "bars"}
            onClick={() => props.setVisible(true)}
          />
        </Menu.Item>
      </Responsive>

      <Responsive
        as={Menu}
        fluid
        borderless
        widths={props.routes.length}
        fixed='top'
        {...Responsive.onlyComputer}
      >
        {props.routes.map(r => (
          <Menu.Item
            key={r.path}
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
