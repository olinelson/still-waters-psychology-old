import styled from "styled-components";
import { Header, Container, Grid } from "semantic-ui-react";
import { BASE_URL } from "../config";

export const JumboHeader = styled(Header)`
  font-size: 4rem;
  color: white;
  // text-shadow: 1px 1px 2px black;
`;

export const Jumbotron = styled.div`
    background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-image: ${props =>
      `url('${BASE_URL}${props.imgDir}${props.fileName}_1.${props.imgFormat}')`};
     height: ${props => (props.fullHeight ? "90vh !important" : "40vh")};
    image-orientation: from-image;
    display: grid;

    @media(min-width: 355px){
        
        background-image: ${props =>
          props.fileCount >= 2
            ? `url('${BASE_URL}${props.imgDir}${props.fileName}_2.${props.imgFormat}')`
            : null}
    }
    @media(min-width: 475px){
        background-image: ${props =>
          props.fileCount >= 3
            ? `url('${BASE_URL}${props.imgDir}${props.fileName}_3.${props.imgFormat}')`
            : null}
    }
    @media(min-width: 587px){
        background-image: ${props =>
          props.fileCount >= 4
            ? `url('${BASE_URL}${props.imgDir}${props.fileName}_4.${props.imgFormat}')`
            : null}
    }
    @media(min-width: 677px){
         background-image: ${props =>
           props.fileCount >= 5
             ? `url('${BASE_URL}${props.imgDir}${props.fileName}_5.${props.imgFormat}')`
             : null}
    }
    @media(min-width: 758px){
         background-image: ${props =>
           props.fileCount >= 6
             ? `url('${BASE_URL}${props.imgDir}${props.fileName}_6.${props.imgFormat}')`
             : null}
    }
    @media(min-width: 835px){
         background-image: ${props =>
           props.fileCount >= 7
             ? `url('${BASE_URL}${props.imgDir}${props.fileName}_7.${props.imgFormat}')`
             : null}
    }
    @media(min-width: 900px){
         background-image: ${props =>
           props.fileCount >= 8
             ? `url('${BASE_URL}${props.imgDir}${props.fileName}_8.${props.imgFormat}')`
             : null}
    }
    @media(min-width: 970px){
         background-image: ${props =>
           props.fileCount >= 9
             ? `url('${BASE_URL}${props.imgDir}${props.fileName}_9.${props.imgFormat}')`
             : null}
    }
    @media(min-width: 1037px){
         background-image: ${props =>
           props.fileCount >= 10
             ? `url('${BASE_URL}${props.imgDir}${props.fileName}_10.${props.imgFormat}')`
             : null}
    }
    @media(min-width: 1099px){
        background-image: ${props =>
          props.fileCount >= 11
            ? `url('${BASE_URL}${props.imgDir}${props.fileName}_11.${props.imgFormat}')`
            : null}
    }
    @media(min-width: 1150px){
         background-image: ${props =>
           props.fileCount >= 12
             ? `url('${BASE_URL}${props.imgDir}${props.fileName}_12.${props.imgFormat}')`
             : null}
    }
    @media(min-width: 1209px){
        background-image: ${props =>
          props.fileCount >= 13
            ? `url('${BASE_URL}${props.imgDir}${props.fileName}_13.${props.imgFormat}')`
            : null}
    }
    @media(min-width: 1266px){
        background-image: ${props =>
          props.fileCount >= 14
            ? `url('${BASE_URL}${props.imgDir}${props.fileName}_14.${props.imgFormat}')`
            : null}
    }
    @media(min-width: 1314px){
         background-image: ${props =>
           props.fileCount >= 15
             ? `url('${BASE_URL}${props.imgDir}${props.fileName}_15.${props.imgFormat}')`
             : null}
    }
    @media(min-width: 1365px){
         background-image: ${props =>
           props.fileCount >= 16
             ? `url('${BASE_URL}${props.imgDir}${props.fileName}_16.${props.imgFormat}')`
             : null}
    }
    @media(min-width: 1397px){
        background-image: ${props =>
          props.fileCount >= 17
            ? `url('${BASE_URL}${props.imgDir}${props.fileName}_17.${props.imgFormat}')`
            : null}
    }
    @media(min-width: 1400px){
         background-image: ${props =>
           props.fileCount >= 18
             ? `url('${BASE_URL}${props.imgDir}${props.fileName}_18.${props.imgFormat}')`
             : null}
    }
    
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
  background: ${props => `url('${BASE_URL}${props.src}')`};
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
