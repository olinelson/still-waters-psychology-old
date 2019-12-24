import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function SideBarMenuItems(props) {
  return (
    <>
      {props.routes.map(r => (
        <Menu.Item
          key={r.path}
          // style={{ color: "#C2AB6F" }}
          active={props.location.pathname === r.path}
          as={Link}
          to={r.path}
          name={r.name}
          onClick={() => props.setVisible(false)}
        />
      ))}
    </>
  );
}

export default withRouter(SideBarMenuItems);
