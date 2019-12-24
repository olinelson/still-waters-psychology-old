import React, { useEffect, useState } from "react";
import { Menu, Icon, Responsive } from "semantic-ui-react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

function NavBar(props) {
  // let [transparent, setTransparent] = useState(true);

  // let container;

  // let last_known_scroll_position = 0;
  // let [ticking, setTicking] = useState(false);

  // function doSomething(scroll_pos) {
  //   console.log("scrolling", scroll_pos);
  //   if (scroll_pos > 200) return setTransparent(false);
  //   setTransparent(true);
  // }

  // useEffect(() => {
  //   attachListener();
  // }, []);

  // const attachListener = () => {
  //   container = document.querySelector("#scrollableContainer");

  //   container.addEventListener("scroll", function(e) {
  //     last_known_scroll_position = container.scrollTop;

  //     if (!ticking) {
  //       window.requestAnimationFrame(function() {
  //         doSomething(last_known_scroll_position);
  //         // ticking = false;
  //         setTicking(false);
  //       });

  //       setTicking(true);
  //     }
  //   });
  // };

  const FixedMenu = styled(Menu)`
    z-index: 1;
    position: fixed;
    width: 100vw;
    // background: linear-gradient(
    //   180deg,
    //   rgba(0, 0, 0, 0.3) 40%,
    //   rgba(255, 255, 255, 0) 100%
    // ) !important;
  `;
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
        // style={{ background: "rgba(0,0,0,0)" }}
        // secondary={transparent ? true : false}
        as={FixedMenu}
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
