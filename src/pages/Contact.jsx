import React from "react";
import { Embed, Container, Form, Button, Divider } from "semantic-ui-react";
import { Jumbotron } from "../components/StyledComponents";

export default function Contact() {
  return (
    <>
      <Jumbotron
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2092413/pexels-photo-2092413.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500') `,
          backgroundPosition: "center"
        }}
      />

      <Container text>
        <Divider hidden />

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eos
          perferendis optio ipsum harum ea, sequi, voluptatibus ab, id atque
          nemo quos. Culpa, alias. Expedita aliquid dolore quos numquam maxime!
        </p>

        <Embed
          active
          icon='map'
          // placeholder='/images/image-16by9.png'
          url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848307.3784013895!2d150.37010698248696!3d-33.84582855426672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1575331083966!5m2!1sen!2sau'
        />

        <Divider hidden />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          blanditiis soluta velit repudiandae similique labore, dolores maiores
          iusto sed eveniet, voluptatibus impedit esse. Voluptates, molestias
          quam laudantium quas animi consectetur.
        </p>

        <Form action='https://formspree.io/olinelson93@gmail.com' method='POST'>
          <h1>Contact</h1>
          <Form.Input
            required
            label='Full Name'
            name='name'
            placeholder='Mike Nock'
          />
          <Form.Input
            required
            label='Email'
            name='email'
            type='email'
            placeholder='pocket_science@gmail.com'
          />

          <Form.TextArea
            required
            name='message'
            label='Message'
            placeholder='It Was the Best of Times; It Was the Worst of Times...'
          />
          <Button type='submit'>Send</Button>
        </Form>
      </Container>
    </>
  );
}
