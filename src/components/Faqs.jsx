import React from "react";
import { Link } from "react-router-dom";
import { Header, Accordion, Container, Table, List } from "semantic-ui-react";

export default function FAQS() {
  const panels = [
    {
      key: "0",
      title: "Location",
      content: {
        content: (
          <>
            <p>
              We offer in-person sessions at Smeaton Grange (near Narellan NSW)
              and phone and video sessions (all by appointment).{" "}
              <Link to='/contact'>Contact Page</Link>
            </p>
          </>
        )
      }
    },
    {
      key: "1",
      title: "Fees and Funding",
      content: [
        "We provide psychological services under Medicare, Private Health Funds, NDIS (self-managed only) and privately. We charge a gap fee, this discussed with clients at initial appointments."
      ].join(" ")
    },
    {
      key: "3",
      title: "Payment Options",
      content: [
        "Clients can pay via Direct Bank transfer, and/or credit card and upon receiving their session receipts, can seek a reimbursement from Medicare, their Health fund and/or NDIS (self-managed)."
      ].join(" ")
    },
    {
      key: "4",
      title: "Transport Options",
      content: ["Parking is readily available, with wheelchair access."].join(
        " "
      )
    },
    {
      key: "5",
      title: "Making an Appointment",
      content: {
        content: (
          <>
            <p>
              Taking the first step towards improving the quality of your
              psychological health, wellbeing and relationships may feel
              daunting, especially if you have no prior experience with
              counselling.
            </p>
            <p>
              You can arrange an appointment by phoning 0466 231 620 or by
              sending an enquiry from the{" "}
              <Link to='/contact'>Contact Page</Link>.
            </p>
            <p>
              We will guide you through setting up an initial appointment and
              will happily answer any questions you might have about the
              services we offer.
            </p>
          </>
        )
      }
    }
  ];

  return (
    <Container text>
      <Header as='h1' content='Additional Information' />
      <Accordion defaultActiveIndex={0} fluid styled panels={panels} />
    </Container>
  );
}