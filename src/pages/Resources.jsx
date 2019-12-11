import React from "react";
import { Container, Card, Divider, Image } from "semantic-ui-react";
import { Jumbotron } from "../components/StyledComponents";

export default function Resources() {
  return (
    <>
      <Jumbotron
        style={{
          backgroundImage: `url('images/Image_18_Blue_water.jpg') `,
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
        <ol>
          <li>Contact your GP.</li>
          <li>Advise a family member or friend.</li>
          <li>
            Contact the community mental health at your local hospital and ask
            to speak with the intake officer OR present yourself at Emergency at
            your local hospital
          </li>
        </ol>

        <p>
          You can also contact the following numbers to seek help or to speak
          with someone about your situation:
        </p>

        <ul>
          <li>Emergency 000</li>
          <li>Lifeline 13 11 14</li>
          <li>Kids Helpline 1800 55 1800</li>
          <li>MensLine 1300 78 99 78</li>
          <li>Suicide Call Back Service 1300 659 467</li>
        </ul>

        <Image src='images/Image_19_Hands.jpg' />

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
            header='Black Dog Institute'
            // meta='https://www.blackdoginstitute.org.au/'
            href='https://www.blackdoginstitute.org.au/'
          />
          <Card
            image='logos/life_line.png'
            header='Lifeline'
            // meta='https://www.lifeline.org.au/'
            href='https://www.lifeline.org.au/'
          />
          <Card
            image='logos/beyond_blue.png'
            header='Beyond Blue'
            // meta='https://www.beyondblue.org.au/'
            href='https://www.beyondblue.org.au/'
          />
          <Card
            image='logos/vinnies.png'
            header='St Vincent de Paul'
            // meta='https://www.vinnies.org.au/'
            href='https://www.vinnies.org.au/'
          />
          <Card
            image='logos/grow.png'
            header='Grow'
            // meta='https://www.grow.org.au/'
            href='https://www.grow.org.au/'
          />
          <Card
            image='logos/quest.png'
            header='Quest for Life Foundation'
            // meta='https://www.questforlife.com.au/'
            href='https://www.questforlife.com.au/'
          />
          <Card
            image='logos/mental_health_australia.png'
            header='Mental Health Australia'
            // meta='https://mhaustralia.org/'
            href='https://mhaustralia.org/'
          />
          <Card
            // image='logos/black_dog.jpg'
            header='Mental Health Association (NSW)'
            // meta='https://wayahead.org.au/'
            href='https://wayahead.org.au/'
          />
          <Card
            image='logos/sane.png'
            header='Sane Australia'
            // meta='hhttps://www.sane.org/'
            href='hhttps://www.sane.org/'
          />
          <Card
            image='logos/mhca.png'
            header='Mental Health Carers Australia'
            // meta='https://www.mentalhealthcarersaustralia.org.au/'
            href='https://www.mentalhealthcarersaustralia.org.au/'
          />

          <Card
            // image='logos/mhca.png'
            header='Mind Health Connect'
            // meta='https://www.mentalhealthcarersaustralia.org.au/'
            href='https://headtohealth.gov.au/'
          />

          <Card
            // image='logos/mhca.png'
            header='Open Minds'
            // meta='https://www.mentalhealthcarersaustralia.org.au/'
            href='https://www.openminds.org.au/'
          />
        </Card.Group>
      </Container>
    </>
  );
}
