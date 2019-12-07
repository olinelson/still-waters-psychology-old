import React from "react";
import { Header, Label, Item, Container, Divider } from "semantic-ui-react";
import {
  JumboHeader,
  JumboMessage,
  Jumbotron
} from "../components/StyledComponents";

function Home() {
  return (
    <>
      <Jumbotron
        fullHeight
        src='https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
      >
        <JumboMessage>
          <JumboHeader size='huge' as={"h1"} inverted>
            Still Waters Psychology
          </JumboHeader>
          <Header.Subheader
            style={{ color: "white", textShadow: "1px 1px 2px black" }}
            as='h3'
          >
            Wellbeing, Relationships, Guidance
          </Header.Subheader>
        </JumboMessage>
        <Label
          style={{
            alignSelf: "flex-end",
            justifySelf: "flex-start",
            color: "white",
            backgroundColor: "rgba(0,0,0,0)",
            visibility: "hidden"
          }}
          size='big'
          content='scroll'
          icon='arrow up'
        />
      </Jumbotron>

      <Divider hidden />

      <Container text>
        <Item.Group>
          <Item>
            <Item.Image
              alt='Queen Elizabeth II'
              size='medium'
              src={`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fportraitnation.files.wordpress.com%2F2011%2F01%2Fnpg_queen_elizabeth_ii_by_dorothy_wilding_hand_coloured.jpg&f=1&nofb=1`}
            />
            {/* <Item.Image alt="Susan Stephenson, Director" size='medium' src='https://storage.googleapis.com/inner_wisdom_bucket/headshot_noExifRotated.jpg' /> */}

            <Item.Content verticalAlign='top'>
              <Header>
                Queen Elizabeth II
                <Header.Subheader>
                  {" "}
                  B.A (Psych), Dip. Ed. (Psych), MEd (Counselling), FAPS,
                  MCCOUNP, AAOS
                </Header.Subheader>
              </Header>

              <Item.Description>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, aliquam est numquam consectetur aliquid totam sit
                  id cupiditate possimus. Eos officia quaerat rerum, nemo
                  voluptate tenetur veniam in aperiam inventore!
                </p>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </>
  );
}

export default Home;
