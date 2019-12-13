import React from "react";

import ContactForm from "../components/ContactForm";
import {
  Embed,
  Container,
  Button,
  Divider,
  Header,
  Accordion
} from "semantic-ui-react";
import { Jumbotron } from "../components/StyledComponents";
export default function Contact() {
  const panels = [
    {
      key: "0",
      title: "Wheelchair Accessibility",
      content:
        "There is wheelchair access at the front entry to the practice and wheelchair accessible toilet facilities."
    },
    {
      key: "1",
      title: "Late Arrival Policy",
      content:
        "Where clients arrive late for a session, the session will still end at the scheduled time, meaning that session will be shorter on that occasion. Time has been reserved for you and only you at the agreed upon time, with other people are scheduled after your time."
    },
    {
      key: "3",
      title: "No Show Policy",
      content:
        "Where clients fail to attend an appointment and there is no communication regarding their absence the normal session fee will be applied."
    },
    {
      key: "5",
      title: "Cancellation policy",
      content: {
        content: (
          <>
            <p>
              We respect that your time is valuable, and we appreciate that you
              understand ours is too. Regretfully cancellation fees are
              necessary as it unlikely that your spot can be given to another
              client at such short note.
            </p>
            <ul>
              <li>
                A 60% cancellation fee will be applied when clients cancel
                within 24 hours of their appointment.
              </li>
              <li>
                A 40% cancellation fee will be applied when clients cancel
                within 48 hours of their appointment.
              </li>
            </ul>

            <p>
              When cancelling a session please advise as to the reason for the
              cancellation. Please note Medicare do not reimburse cancelled
              session and the NDIS cover a limited number of cancellation fees.
            </p>
            <p>
              Where a therapist needs to cancel for unexpected reasons you will
              be offered a replacement appointment at a mutually convenient time
              at the normal session fee.
            </p>
          </>
        )
      }
    }
  ];

  return (
    <>
      <Jumbotron
        imgDir='images/image_16/'
        fileName='image_16'
        imgFormat='jpg'
        fileCount={19}
        style={{
          backgroundPosition: "center"
        }}
      />

      <Container text>
        <Divider hidden />

        <h1>Starting the journey</h1>

        <h4>Booking the first appointment</h4>

        <p>
          Taking the first step towards improving the quality of your
          psychological health, sense of wellbeing and relationships may feel
          daunting, especially if you have no prior experience with counselling.{" "}
        </p>

        <p>
          You can arrange an appointment by phoning 0466 231 260 or by sending
          an enquiry using the form below.{" "}
        </p>

        <p>
          We will guide you through setting up an initial appointment and will
          happily answer any questions you might have about counselling/therapy.{" "}
        </p>

        <Embed
          active
          icon='map'
          // placeholder='/images/image-16by9.png'
          url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.119962861653!2d150.74602931573722!3d-34.0407937354384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f1c12e78fbe5%3A0x9f87da28f965f7d4!2sShop%204%2F38%20Exchange%20Parade%2C%20Smeaton%20Grange%20NSW%202567!5e0!3m2!1sen!2sau!4v1576062669966!5m2!1sen!2sau'
          // url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848307.3784013895!2d150.37010698248696!3d-33.84582855426672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1575331083966!5m2!1sen!2sau'
        />

        <Divider hidden />

        <Container textAlign='center'>
          <Button
            target='_blank'
            href='https://www.google.com/maps?ll=-34.040798,150.748218&z=16&t=m&hl=en&gl=AU&mapclient=embed&daddr=Shop+4/38+Exchange+Parade+Smeaton+Grange+NSW+2567@-34.0407982,150.748218'
          >
            Get Directions
          </Button>
        </Container>

        {/* <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.119962861653!2d150.74602931573722!3d-34.0407937354384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f1c12e78fbe5%3A0x9f87da28f965f7d4!2sShop%204%2F38%20Exchange%20Parade%2C%20Smeaton%20Grange%20NSW%202567!5e0!3m2!1sen!2sau!4v1576062669966!5m2!1sen!2sau'
          width='600'
          height='450'
          frameborder='0'
          style='border:0;'
          allowfullscreen=''
        ></iframe> */}

        <Divider hidden />

        <p>
          The practice is located just off Narellan Road, Narellan. It is housed
          within the Narellan Community Congregational Church. Upon arrival,
          please enter the church foyer and turn left to find the practice
          reception area.
        </p>

        <Divider />

        <ContactForm />

        <Divider />

        <Header as='h1' content='Additional Information' />
        <Accordion defaultActiveIndex={0} fluid styled panels={panels} />
      </Container>
    </>
  );
}
