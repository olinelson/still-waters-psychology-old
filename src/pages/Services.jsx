import React, { useState } from "react";
import { Jumbotron } from "../components/StyledComponents";
import {
  Container,
  Image,
  Grid,
  Menu,
  Divider,
  Header,
  List
} from "semantic-ui-react";

export default function Services() {
  const [activeItem, setActiveItem] = useState("counselling");

  const tabRouter = () => {
    switch (activeItem) {
      case "counselling":
        return counselling();

      case "supervision":
        return supervision();

      case "workshops":
        return workshops();

      default:
        return counselling();
    }
  };

  const counselling = () => {
    return (
      <>
        <h1>Counselling and Psychotherapy</h1>

        <p>
          Counselling and Psychotherapy are offered for a range of adult life
          issues (see below). Therapy is tailored to each client, with the
          length of time in therapy guided by each client’s unique history,
          personal needs and concerns, therapeutic aims and life goals. While
          some clients have complex personal histories, which may take time to
          address, other clients face short-term challenges which are resolved
          in a briefer timeframe. As such, no two client therapy journeys are
          the same.
        </p>
        <ul>
          <li>Adult Mental Health (e.g., anxiety, depression)</li>
          <li>Bereavement, Grief and Loss</li>
          <li>Trauma and Post-trauma Growth</li>
          <li>Spirituality/Faith (e.g. spiritual attachment)</li>
          <li>Stress - Personal & Workplace</li>
          <li>Disability and Illness</li>
          <li>Carer Support</li>
          <li>
            NDIS (self-managed only) – e.g., Support Coordination, access
            application planning
          </li>
          <li>Relational Issues </li>
          <li>Personal Formation and Personal Development</li>
          <li>Life Adjustment and Life Transitions</li>
        </ul>
        <p>
          More broadly, counselling involves an active, collaborative,
          conversational partnership, where the therapist works for the benefit
          of each client, individual circumstances considered within a a
          developmentally oriented, lifespan perspective. Drawing upon
          contemporary evidence-based, trauma-informed models of care, there is
          an overall focus on client safety, symptom stabilization and
          management, recovery and integration, restoration and transformation.
          As a team the client and therapist work together so achieve each
          client’s personal therapy goals.
        </p>
        <Image fluid src='images/Image_19_Hands.jpg' />

        <h4>Therapeutic approaches</h4>

        <p>
          Psychologists and psychotherapists are trained in a range of therapy
          models and approaches. If you have experienced counselling in the past
          you may recognize some of the approaches and activities used during
          your sessions. However, at times you may be asked to ‘experiment’ with
          something new. This may leave you feeling unsure. It is important to
          ask questions if anything seems unclear and to provide regular
          feedback, so your counselling continues to effectively address your
          life issues and therapeutic aims.
        </p>

        <p>
          At Still Waters Psychology clinical approaches used may include the
          Conversational Model, Acceptance and Commitment Therapy (ACT),
          Person-Centred Counselling, Attachment-focused Therapies,
          Trauma-informed Care, Cognitive Behavioural Therapies, Psychodynamic
          Psychotherapy and Sensorimotor Therapies.
        </p>
        <Image fluid src='images/image_8.jpg' />
        <h4>Types of Clients</h4>
        <p>
          You can attend as a private client (no referral required), paying a
          fee per session. You may be eligible for a rebate from your private
          health insurance fund (e.g. BUPA, Medibank etc). Please bring your
          health fund card to each session.
        </p>

        <p>
          You can attend as a Medicare client, under a Treatment Plan provided
          by your GP. Where you have a treatment plan, you can be entitled to a
          Medicare rebate for up to 10 sessions (within a calendar year). Please
          bring your Medicare card to each session. When seeking a treatment
          plan, you will need to provide your GP with the practice details as
          this needs to be included on the treatment plan referral. A treatment
          plan is tailored to each client’s unique situation and may include a
          request for psychoeducation and cognitive-informed therapy. You will
          need to bring your treatment plan to your first session.
        </p>

        <p>
          You can attend as a NDIS self-managed client. Self-managed NDIS
          clients pay their counselling fee upfront, obtaining an NDIS refund
          after each session.
        </p>

        <p>
          You can attend as a client if you have another source of funding. When
          making initial contact, we can talk about the details of your funding
          support.
        </p>
      </>
    );
  };

  const supervision = () => {
    return (
      <>
        <h1>Clinical Supervision</h1>
        <p>
          En gaging in continued reflection about one’s clinical work is a
          requirement for all healthcare professionals and those working withing
          church settings. Consequently, your therapist participates in regular
          supervision with experienced peers, to ensure the continuance of
          quality and relevant care to all clients. Peer supervision using
          de-identified client information is one aspect of mandated
          professional development psychologists must complete annually.
        </p>
        <p>
          In addition, Still Waters Psychology offers individual and group
          supervision to psychologists, counsellors, psychotherapists and those
          working in church settings (excluding intern psychologists).
          Supervisees are recommended to check with their professional
          association regarding the required qualifications and experiences for
          supervisors as associations set their own criteria regarding
          supervision.
        </p>
      </>
    );
  };

  const workshops = () => {
    return (
      <>
        <h1>Professional Development Workshops and Presentations</h1>
        <p>
          From time to time Still Waters Psychology will host professional
          development workshops on a range of topics related to the practice of
          psychology and mental health management in church settings.
        </p>
        <p>
          Tailored workshops can also be developed upon request. Please contact
          the practice to discuss your organization’s professional development
          needs.
        </p>
      </>
    );
  };

  return (
    <>
      <Jumbotron
        alt='Still Waters, Credit: Catharine McCann
Maine 1 Photography'
        imgDir='images/image_6/'
        fileName='image_6'
        imgFormat='jpg'
        fileCount={11}
      ></Jumbotron>
      <Divider hidden />

      <Container style={{ minHeight: "50vh" }}>
        <Grid stackable>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name='counselling'
                active={activeItem === "counselling"}
                onClick={() => setActiveItem("counselling")}
              >
                <Header as='h4'>Counselling and Psychotherapy</Header>
                <List>
                  <List.Item content='Adults of all ages and life stages.' />
                </List>
              </Menu.Item>

              <Menu.Item
                name='supervision'
                active={activeItem === "supervision"}
                onClick={() => setActiveItem("supervision")}
              >
                <Header as='h4'>Clinical Supervision </Header>
                <List>
                  <List.Item content='Psychologists' />
                  <List.Item content='Psychotherapists' />
                  <List.Item content='Counsellors' />
                  <List.Item content='Chaplains/Ministers' />
                </List>
              </Menu.Item>

              <Menu.Item
                name='workshops'
                active={activeItem === "workshops"}
                onClick={() => setActiveItem("workshops")}
              >
                <Header as='h4'>
                  Professional Development Workshops & Presentations
                </Header>
                <List>
                  <List.Item content='Allied health professionals' />
                  <List.Item content='Churches staff and leaders' />
                </List>
              </Menu.Item>
            </Menu>
          </Grid.Column>

          <Grid.Column width={12}>{tabRouter()}</Grid.Column>
        </Grid>
      </Container>
    </>
  );
}
