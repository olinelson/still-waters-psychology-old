import React from "react";
import {
  Header,
  Container,
  Divider,
  Popup,
  Button,
  Icon,
  Segment,
  Card,
  Image
} from "semantic-ui-react";
import {
  JumboHeader,
  JumboMessage,
  Jumbotron,
  CreditContainer,
  TwoColumnContainer,
  ImageDiv,
  Quote
} from "../components/StyledComponents";

function Home() {
  return (
    <>
      <Jumbotron
        fullHeight
        alt='Still Waters, Credit: Catharine McCann
Maine 1 Photography'
        src='images/Image_1_Still_Waters_High_Resolution.jpg'
      >
        <JumboMessage>
          <JumboHeader size='huge' as={"h1"} inverted>
            Still Waters Psychology
          </JumboHeader>
          <Header.Subheader
            style={{ color: "white", textShadow: "1px 1px 2px black" }}
            as='h3'
          >
            Compassion, Hope, Wisdom
          </Header.Subheader>
        </JumboMessage>

        <CreditContainer>
          <Popup
            size='mini'
            basic
            hoverable
            style={{
              borderRadius: 0,
              background: "rgba(0,0,0,0)"
            }}
            inverted
            content={
              <a
                style={{ color: "inherit" }}
                href='https://www.maine1photography.com/'
              >
                ‘Still Waters’ – Catharine McCann
              </a>
            }
            trigger={<Icon size='small' name='info' />}
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
        <Card.Group centered>
          <Card>
            <Card.Content textAlign='center'>
              <Icon name='sun' size='huge' />
              <Header>A still mind</Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign='center'>
              <Icon name='heart' size='huge' />
              <Header>A peaceful heart</Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign='center'>
              <Icon name='coffee' size='huge' />
              <Header>A calm spirit</Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign='center'>
              <Icon name='smile' size='huge' />
              <Header>A restored soul</Header>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>

      <Divider hidden />

      <Container text>
        <p>
          We are committed to creating a safe and supportive space in which,
          together, client and therapist, can address the client’s needs and
          concerns.
        </p>

        <p>
          We also provide clinical supervision and professional development
          workshops and presentations for allied health professionals,
          chaplains, minsters and church leaders (See Services page for more
          details).
        </p>
      </Container>

      <Divider hidden />

      <Container textAlign='center'>
        <Card.Group centered>
          <Card
            style={{
              boxShadow: "none"
            }}
          >
            <Card.Content textAlign='center'>
              <Header>Act with Compassion</Header>
              <Header>Live in Hope</Header>
              <Header>Grow in Wisdom</Header>
            </Card.Content>
          </Card>
          <Card
            style={{
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
              boxShadow: "none"
            }}
          >
            <Card.Content textAlign='center'>
              <Button>Book Appointment</Button>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>

      <Divider hidden />

      <Container text>
        <p>
          The image of ‘still waters’ provides a powerful metaphor for the quiet
          often longed for when we are faced with demanding lives, a turbulent
          world, personal crisis, and/or a sense that personal growth is
          required.{" "}
        </p>
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

      <Image src='images/Image_2_Sunset.jpg' />

      <Divider hidden />

      <Container text>
        <p>
          In the opening verses of Psalm 23 (1-3), Christian believers are told
          that restoration of the soul comes in the context of ‘green pastures’
          and ‘still waters’ – the Divine drawing the weary and the wounded to a
          quiet place where restoration is possible.
        </p>

        <Divider hidden />

        <blockquote cite='https://www.huxley.net/bnw/four.html'>
          <Icon name='quote left' />
          <p>
            The Lord is my shepherd; I shall not want. He makes me lie down in
            green pastures. He leads me beside still waters. He restores my
            soul.
          </p>
          <footer>
            <small>
              Psalm 23: 1: 3 , <cite>Holy Bible, ESV®, 2001</cite>
            </small>
          </footer>
        </blockquote>

        <Divider hidden />
      </Container>

      <Container text>
        <h1>Location</h1>
        <p>
          We offer in-person sessions at Smeaton Grange (near Narellan NSW) and
          phone and video sessions (all by appointment).{" "}
        </p>

        <h1>Fees and Funding</h1>
        <p>
          We provide psychological services under Medicare, Private Health
          Funds, NDIS (self-managed only) and privately. We charge a gap fee,
          this discussed with clients at initial appointments.
        </p>

        <h1>Payment Options </h1>
        <p>
          Clients can pay via Direct Bank transfer, and/or credit card and upon
          receiving their session receipts, can seek a reimbursement from
          Medicare, their Health fund and/or NDIS (self-managed).
        </p>

        <h1>Transport and Parking</h1>
        <p>Parking is readily available, with wheelchair access.</p>

        <h1>Making an Appointment</h1>
        <p>
          Taking the first step towards improving the quality of your
          psychological health, wellbeing and relationships may feel daunting,
          especially if you have no prior experience with counselling.{" "}
        </p>
        <p>
          You can arrange an appointment by phoning 0466 231 620 or by sending
          an enquiry from the Contact Page (insert link).{" "}
        </p>
        <p>
          We will guide you through setting up an initial appointment and will
          happily answer any questions you might have about the services we
          offer.{" "}
        </p>
      </Container>
    </>
  );
}

export default Home;
