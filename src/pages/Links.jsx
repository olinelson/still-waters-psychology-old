import React from "react";
import { Container, Card, Divider } from "semantic-ui-react";
import { Jumbotron } from "../components/StyledComponents";

export default function Links() {
  return (
    <>
      <Jumbotron
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') `,
          backgroundPosition: "center"
        }}
      />

      <Container>
        <Divider hidden />
        <Card.Group centered>
          <Card
            image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fextension.berkeley.edu%2Fimages%2Fprogram-areas%2Fbehavioral-health%2Flicensing%2Fapa-logo.png&f=1&nofb=1'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={"something extra"}
          />
          <Card
            image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fextension.berkeley.edu%2Fimages%2Fprogram-areas%2Fbehavioral-health%2Flicensing%2Fapa-logo.png&f=1&nofb=1'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={"something extra"}
          />
          <Card
            image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fextension.berkeley.edu%2Fimages%2Fprogram-areas%2Fbehavioral-health%2Flicensing%2Fapa-logo.png&f=1&nofb=1'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={"something extra"}
          />
          <Card
            image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fextension.berkeley.edu%2Fimages%2Fprogram-areas%2Fbehavioral-health%2Flicensing%2Fapa-logo.png&f=1&nofb=1'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={"something extra"}
          />
          <Card
            image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fextension.berkeley.edu%2Fimages%2Fprogram-areas%2Fbehavioral-health%2Flicensing%2Fapa-logo.png&f=1&nofb=1'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={"something extra"}
          />
          <Card
            image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fextension.berkeley.edu%2Fimages%2Fprogram-areas%2Fbehavioral-health%2Flicensing%2Fapa-logo.png&f=1&nofb=1'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={"something extra"}
          />
        </Card.Group>
      </Container>
    </>
  );
}
