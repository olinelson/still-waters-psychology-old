import React from "react";
import { Container, Card, Divider, List, Segment } from "semantic-ui-react";
import { Jumbotron } from "../components/StyledComponents";

export default function Resources() {
  return (
    <>
      <Jumbotron
        imgDir='images/image_18/'
        fileName='image_18'
        imgFormat='jpg'
        fileCount={8}
        style={{
          backgroundPosition: "center"
        }}
      />

      <Container text>
        <Divider hidden />
        <h1>In the event of a mental health emergency</h1>
        <p>
          If you are experiencing an immediate mental health crisis and feel at
          risk in relation to your personal safety, it is recommended that you:
        </p>
      </Container>

      <Divider hidden />

      <Container text>
        <Segment>
          <List divided relaxed verticalAlign='middle'>
            <List.Item>
              <List.Icon size='huge' name='doctor' />
              <List.Content>
                <List.Header> Contact your GP</List.Header>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon size='huge' name='user' />
              <List.Content>
                <List.Header>Advise a family member or friend</List.Header>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon size='huge' name='medkit' />
              <List.Content>
                <List.Header>Contact the community mental health</List.Header>
                <List.Description>
                  at your local hospital and ask to speak with the intake
                  officer OR present yourself at Emergency at your local
                  hospital
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Container>

      <Divider hidden />

      <Container text>
        <p>
          You can also contact the following numbers to seek help or to speak
          with someone about your situation:
        </p>
      </Container>

      <Divider hidden />

      <Container text>
        <Segment>
          <List divided relaxed verticalAlign='middle'>
            <List.Item>
              <List.Icon size='big' name='phone' />
              <List.Content>
                <List.Header>Emergency 000</List.Header>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon size='big' name='phone' />
              <List.Content>
                <List.Header>Lifeline 13 11 14</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon size='big' name='phone' />
              <List.Content>
                <List.Header>Kids Helpline 1800 55 1800</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon size='big' name='phone' />
              <List.Content>
                <List.Header>Lifeline 13 11 14</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon size='big' name='phone' />
              <List.Content>
                <List.Header>MensLine 1300 78 99 78</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon size='big' name='phone' />
              <List.Content>
                <List.Header>
                  Suicide Call Back Service 1300 659 467
                </List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Container>

      <Divider hidden />

      <Jumbotron
        imgDir='images/image_9/'
        fileName='image_9'
        imgFormat='jpg'
        fileCount={5}
        src='images/Image_9_Therapy_1.jpg'
      />

      <Divider hidden />

      <Container text>
        <h1>Support Organizations</h1>

        <p>
          There are a range of state and national organizations and services
          which provide information and support for those experiencing mental
          health issues, especially in the context of a crisis. Below are links
          to some of these services:
        </p>
      </Container>

      <Divider hidden />
      <Container>
        <Card.Group centered>
          <Card
            image='logos/black_dog.jpg'
            href='https://www.blackdoginstitute.org.au/'
          />
          <Card
            image='logos/lifeline.png'
            style={{
              background: "#013D79",
              justifyContent: "center",
              padding: ".5rem"
            }}
            href='https://www.lifeline.org.au/'
          />
          <Card
            image='logos/beyondblue.png'
            style={{
              justifyContent: "center",
              padding: ".5rem"
            }}
            href='https://www.beyondblue.org.au/'
          />
          <Card
            image='logos/vinnies_logo.png'
            style={{
              justifyContent: "center",
              padding: ".5rem",
              background: "#004A99"
            }}
            href='https://www.vinnies.org.au/'
          />
          <Card
            image='logos/grow_logo.png'
            style={{
              justifyContent: "center",
              padding: ".5rem"
            }}
            href='https://www.grow.org.au/'
          />
          <Card
            image='logos/quest_for_life.png'
            style={{
              justifyContent: "center",
              padding: ".5rem"
            }}
            href='https://www.questforlife.com.au/'
          />
          <Card
            style={{
              justifyContent: "center",
              padding: ".5rem"
            }}
            image='logos/mental_health_australia.png'
            href='https://mhaustralia.org/'
          />
          <Card
            image='logos/way_ahead.png'
            style={{
              justifyContent: "center",
              padding: ".5rem"
            }}
            href='https://wayahead.org.au/'
          />
          <Card
            style={{
              justifyContent: "center"
            }}
            image='logos/sane_blue.jpg'
            href='hhttps://www.sane.org'
          />
          <Card
            image='logos/mental_health_careers.png'
            style={{
              justifyContent: "center",
              padding: ".5rem"
            }}
            href='https://www.mentalhealthcarersaustralia.org.au/'
          />

          <Card
            image='logos/head_to_health.png'
            header='Mind Health Connect'
            href='https://headtohealth.gov.au/'
          />

          <Card
            style={{
              justifyContent: "center",
              padding: ".5rem"
            }}
            image='logos/open_minds.png'
            href='https://www.openminds.org.au/'
          />
        </Card.Group>
      </Container>
    </>
  );
}
