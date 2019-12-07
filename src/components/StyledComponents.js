import styled from "styled-components";
import { Header, Container } from "semantic-ui-react";

export const JumboHeader = styled(Header)`
  font-size: 4rem;
  color: white;
  //   text-shadow: 1px 1px 2px black;
`;

export const Jumbotron = styled.div`
    background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
     background: ${props => `url('${props.src}')`};
     height: ${props => (props.fullHeight ? "90vh !important" : "40vh")};
    image-orientation: from-image;
    display: grid;
}
`;
export const JumboMessage = styled.div`
  background-color: rgba(0, 0, 0, 0) !important;
  align-self: end;
  justify-self: center;
  padding: 1rem;
`;
export const FooterContainer = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0);
`;

export const AlbumContainer = styled.div`
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)) !important;
  grid-gap: 2rem !important;
  justify-items: center !important;
`;
