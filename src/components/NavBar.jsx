import React, { useEffect, useState } from "react";
import { Menu, Icon, Responsive } from "semantic-ui-react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

function NavBar(props) {
  let [transparent, setTransparent] = useState(false);

  // let container = null;

  // let last_known_scroll_position = 0;
  // let [ticking, setTicking] = useState(false);

  // function doSomething(scroll_pos) {
  //   console.log("scrolling", scroll_pos);
  //   if (scroll_pos > 100) return setTransparent(false);
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
    //background: ${
      transparent ? "rgba(0,0,0,0)" : "rgba(255,255,255,.9) !important"
    };
    // color: ${transparent ? " white !important!" : ""};
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
              color: "#C2AB6F",
              textShadow:
                "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white"
            }}
            name={props.sideBarIsOpen ? "close" : "bars"}
            onClick={() => props.setVisible(true)}
          />
        </Menu.Item>
      </Responsive>
      <Responsive
        secondary
        inverted={transparent}
        as={FixedHamburgerMenu}
        {...Responsive.onlyTablet}
      >
        <Menu.Item>
          <Icon
            size='big'
            style={{
              color: "#C2AB6F",
              textShadow:
                "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white"
            }}
            name={props.sideBarIsOpen ? "close" : "bars"}
            onClick={() => props.setVisible(true)}
          />
        </Menu.Item>
      </Responsive>
      <Responsive
        borderless
        // inverted
        // pointing
        secondary={false}
        inverted={transparent}
        as={FixedMenu}
        {...Responsive.onlyComputer}
      >
        {props.routes.map(r => (
          <Menu.Item
            key={r.path}
            style={{ color: "#C2AB6F" }}
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
