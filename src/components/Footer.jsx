import React from "react";
import { Icon } from "semantic-ui-react";
import { FooterContainer } from "./StyledComponents";

export default function Footer() {
  return (
    <FooterContainer>
      <p>
        <Icon name='copyright' />
        Still Waters Psychology {new Date().getFullYear()}
      </p>
      <small>
        designed and developed by{"  "}
        <a target='blank' href='http://olinelson.com'>
          Oli Nelson
        </a>
      </small>
    </FooterContainer>
  );
}
