import React, { useState } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const submitForm = ev => {
    ev.preventDefault();
    setButtonLoading(true);
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
        setButtonDisabled(true);
      } else {
        setStatus("error");
      }
      setButtonLoading(false);
    };
    xhr.send(data);
  };

  return (
    <Form
      onSubmit={ev => submitForm(ev)}
      action='https://formspree.io/xgevbzyl'
      method='POST'
      error={status === "ERROR"}
      success={status === "SUCCESS"}
    >
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
      <Button loading={buttonLoading} disabled={buttonDisabled} type='submit'>
        Send
      </Button>
      <Message
        success
        header='Message Sent'
        content="You're email has been sent, we will reach out to you ASAP. Thankyou"
      />
      <Message
        error
        header='Action Forbidden'
        content='Something went wrong :('
      />
    </Form>
  );
}
