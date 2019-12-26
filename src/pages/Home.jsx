import React from "react";
import { Link } from "react-router-dom";

import {
  Header,
  Container,
  Divider,
  Popup,
  Button,
  Icon,
  Grid,
  Segment,
  List,
  Item,
  Image,
  Label,
  Responsive
} from "semantic-ui-react";
import {
  JumboHeader,
  JumboMessage,
  Jumbotron,
  CreditContainer,
  ImageDiv,
  CenteredGridColumn
} from "../components/StyledComponents";
import Faqs from "../components/Faqs";

function Home() {
  return (
    <>
      <Jumbotron
        fullHeight
        alt='Still Waters, Credit: Catharine McCann Maine 1 Photography'
        imgDir='images/image_1/'
        fileName='image_1'
        imgFormat='jpg'
        fileCount={5}
      >
        <JumboMessage>
          {/* <JumboHeader size='huge' as={"h1"} inverted></JumboHeader> */}
          {/* <Image size='large' src='logos/color_logo_no_background.png' /> */}
          <Image
            size='large'
            style={{ opacity: "0.8" }}
            src='logos/white_logo.png'
          />
          <Header.Subheader
            style={{ color: "#BEA469", marginLeft: "1.5rem" }}
            as='h3'
          >
            {/* Compassion, Hope, Wisdom */}
          </Header.Subheader>
        </JumboMessage>
        <CreditContainer>
          <Popup
            size='mini'
            // basic
            hoverable
            // style={{
            //   borderRadius: 0,
            //   background: "rgba(0,0,0,0)"
            // }}
            inverted
            content={
              <a
                style={{ color: "inherit" }}
                href='https://www.maine1photography.com/'
              >
                ‘Still Waters’ – Catharine McCann
              </a>
            }
            trigger={
              <Label color='black'>
                <Icon size='small' name='image' />
                credit
              </Label>
            }
          />
        </CreditContainer>
      </Jumbotron>
      <Divider hidden />
      <Container text>
        <p>
          Still Waters Psychology is an adult psychology and psychotherapy
          service, providing evidence-based care for a range of mental health
          conditions and life challenges, for adults of all ages and life
          stages. We support people of varied worldviews and perspectives to
          live life in ways which align with their personal values, beliefs and
          life goals. As part of this process we help clients foster:
        </p>
      </Container>
      <Divider hidden />

      <Container>
        <Grid columns={2} padded relaxed stackable>
          <Grid.Row>
            <CenteredGridColumn>
              <ImageDiv
                width='20rem'
                height='20rem'
                src='images/still_mind.jpg'
              />

              <h2>A still mind</h2>
              <Divider hidden />
            </CenteredGridColumn>

            <CenteredGridColumn>
              <ImageDiv
                width='20rem'
                height='20rem'
                src='images/peaceful_heart.jpg'
              />

              <h2>A peaceful heart</h2>
              <Divider hidden />
            </CenteredGridColumn>

            <CenteredGridColumn>
              <ImageDiv
                width='20rem'
                height='20rem'
                src='images/Image_22_Woman_on_rock.jpg'
              />

              <h2>A calm spirit</h2>
              <Divider hidden />
            </CenteredGridColumn>

            <CenteredGridColumn>
              <ImageDiv
                width='20rem'
                height='20rem'
                alt='Man on rock by Marius Venter from Pexels'
                src='images/Image_23_Man_on_rock.jpg'
              />

              <h2>A restored soul</h2>
              <Divider hidden />
            </CenteredGridColumn>
          </Grid.Row>
        </Grid>
      </Container>

      <Container text>
        <p>
          We are committed to creating a safe and supportive space in which,
          together, client and therapist, can address the client’s needs and
          concerns.
        </p>

        <p>
          We also provide clinical supervision and professional development
          workshops and presentations for allied health professionals,
          chaplains, minsters and church leaders (See{" "}
          <Link to='/services'>Services</Link> page for more details).
        </p>
      </Container>

      <Divider hidden />

      <Jumbotron
        fullHeight
        imgDir='images/image_2/'
        fileName='image_2'
        imgFormat='jpg'
        fileCount={5}
      >
        <JumboMessage style={{ width: "90vw" }}>
          <Segment basic>
            <Grid columns={2} stackable>
              <Grid.Row>
                <CenteredGridColumn>
                  <List verticalAlign='middle'>
                    <Header
                      style={{
                        textShadow: " 1px 1px 2px black",
                        fontSize: "3rem"
                      }}
                      inverted
                      as='h1'
                    >
                      Act with Compassion
                    </Header>
                    <Header
                      style={{
                        textShadow: " 1px 1px 2px black",
                        fontSize: "3rem"
                      }}
                      inverted
                      as='h1'
                    >
                      Live in Hope
                    </Header>
                    <Header
                      style={{
                        textShadow: " 1px 1px 2px black",
                        fontSize: "3rem"
                      }}
                      inverted
                      as='h1'
                    >
                      Grow in Wisdom
                    </Header>
                  </List>
                </CenteredGridColumn>
                <CenteredGridColumn textAlign='center'>
                  <Button as={Link} to='/contact' inverted basic size='big'>
                    Book Appointment
                  </Button>
                </CenteredGridColumn>
              </Grid.Row>
            </Grid>
          </Segment>
        </JumboMessage>

        <CreditContainer></CreditContainer>
      </Jumbotron>

      <Divider hidden />

      <Container text>
        <Responsive
          as={Image}
          floated='right'
          size='medium'
          src='images/image_3_mother_child.jpg'
          {...Responsive.onlyComputer}
        />
        <Responsive
          as={Image}
          floated='right'
          size='medium'
          src='images/image_3_mother_child.jpg'
          {...Responsive.onlyTablet}
        />

        <p>
          The image of ‘still waters’ provides a powerful metaphor of the quiet
          we often long for when faced with demanding lives, a turbulent world,
          personal crisis, and/or a sense that personal growth is required.
        </p>
        <Responsive
          as={Image}
          src='images/image_3_mother_child.jpg'
          {...Responsive.onlyMobile}
        />
        <Divider hidden />

        <p>
          Whether alone or in the company of another (e.g., parent, partner,
          friend, therapist, the divine) settling down alongside a body of water
          can elicit an interior sense of stillness and peacefulness, our
          physical bodies also relaxing.
        </p>
        <p>
          In psychological terms, ‘still waters’ is a metaphor for
          ‘self-regulation’: having a stable and coherent sense of self; being
          able to reflectively move through life in ways that result in rich,
          purposeful living; flexible and adaptive in the face of the
          unexpected.
        </p>

        <Divider />

        <blockquote style={{ color: "black", fontSize: "2rem" }}>
          <Icon size='large' name='quote left' />
          <p>still waters is a metaphor for self-regulation</p>
        </blockquote>

        <Divider hidden />
        <Divider />

        <p>
          When faced with difficult situations and accompanying challenging
          thoughts and feelings, it is easy to become overwhelmed and
          distressed, unable to acts in ways aligned to one’s personal and
          professional values and beliefs. At these times it can feel like we
          are caught in a choppy ocean, at the mercy of the waves that buffet
          us. Therapy provided in a caring, secure and supportive context allows
          the individual to safely explore and address issues currently
          affecting his/her life.
        </p>
      </Container>
      <Divider hidden />

      <Divider hidden />

      <Container text>
        <p>
          In the opening verses of Psalm 23 (1-3), Christian believers are told
          that restoration of the soul comes in the context of ‘green pastures’
          and ‘still waters’ – the Divine drawing the weary and the wounded to a
          quiet place where restoration is possible.
        </p>

        <Divider hidden />
      </Container>

      <Jumbotron
        fullHeight
        imgDir='images/image_4/'
        fileName='image_4'
        imgFormat='jpg'
        fileCount={5}
      >
        <JumboMessage style={{ width: "90vw" }}>
          <Segment basic>
            <blockquote cite='https://www.huxley.net/bnw/four.html'>
              <Icon size='large' name='quote left' />
              <p style={{ fontSize: "2rem" }}>
                The Lord is my shepherd; I shall not want. He makes me lie down
                in green pastures. He leads me beside still waters. He restores
                my soul.
              </p>
              <footer style={{ textAlign: "right", fontSize: "1.25rem" }}>
                <small>
                  Psalm 23: 1: 3 , <cite>Holy Bible, ESV®, 2001</cite>
                </small>
              </footer>
            </blockquote>
          </Segment>
        </JumboMessage>

        <CreditContainer></CreditContainer>
      </Jumbotron>

      <Divider hidden />

      <Container text>
        <Faqs />
      </Container>
    </>
  );
}

export default Home;
