import styled from "styled-components";
import { Header, Container, Grid } from "semantic-ui-react";

export const JumboHeader = styled(Header)`
  font-size: 4rem;
  color: white;
  // text-shadow: 1px 1px 2px black;
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
export const CreditContainer = styled.div`
  padding: 1rem;
  color: white;
  display: flex;
  align-content: end;
  justify-content: end;
  align-items: end;
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

export const TwoColumnContainer = styled.div`
  grid-template-rows: auto 1fr;
  display: grid !important;
  // justify-content: center;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: ${props =>
    props.imgleft ? "'. heading' 'img p1'" : "'heading .' 'p1 img'"};
  grid-column-gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 40rem) {
    // grid-template-columns: 1fr;
    grid-template-areas: "heading heading" "img img" "p1 p1";
    // grid-template-rows: minmax(25vh, auto);
    grid-template-rows: 1fr;
    grid-gap: 1rem;
  }
`;

export const ImageDiv = styled.div`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  min-height: ${props => props.minHeight || "none"};
  background: ${props => `url('${props.src}')`};
  background-size: cover;
  grid-area: ${props => `${props.gridArea}`};
  background-position: center;
`;

export const CenteredGridColumn = styled(Grid.Column)`
  display: flex !important;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
