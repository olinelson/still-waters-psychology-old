import React from "react";
import { withRouter, Link } from "react-router-dom";
import {
  Icon,
  Container,
  Segment,
  List,
  Divider,
  Image,
  Menu
} from "semantic-ui-react";

function Footer(props) {
  return (
    <Segment
      inverted={false}
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Divider inverted={false} section />
      <Container textAlign='center'>
        <Image centered size='tiny' src='logos/logo.png' />

        <List horizontal inverted={false} divided link size='small'>
          {props.routes.map(r => (
            <Menu.Item
              key={r.path}
              active={props.location.pathname === r.path}
              as={Link}
              to={r.path}
              name={r.name}
            />
          ))}
        </List>
        <Divider hidden />
        <small>
          <Icon name='copyright' />
          {new Date().getFullYear()}
        </small>
      </Container>
    </Segment>
  );
}

export default withRouter(Footer);
