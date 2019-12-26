import React, { useState, useRef } from "react";
import { Jumbotron } from "../components/StyledComponents";
import { Link } from "react-router-dom";
import {
  Container,
  Image,
  Divider,
  Card,
  Tab,
  Responsive
} from "semantic-ui-react";

export default function Staff() {
  const [activeItem] = useState("biography");
  const topOfTabRef = useRef(null);

  const panes = [
    { menuItem: "Biography", render: () => biography() },
    { menuItem: "Qualifications", render: () => qualifications() },
    { menuItem: "Memberships", render: () => memberships() },
    { menuItem: "Past Roles", render: () => pastRoles() },
    { menuItem: "Research", render: () => research() }
  ];

  const biography = () => {
    return (
      <>
        <h1>Biography</h1>
        {/* <Image
          fluid
          size='medium'
          floated='right'
          src='https://i.pinimg.com/originals/36/51/9e/36519e622b138523a34b9beb29f666b9.jpg'
        /> */}
        <p>
          My name is Dr Marie-Thérèse Proctor. For more than 25 years, whether
          as a clinician, researcher, educator and academic, I have been
          passionate about enabling and equipping individuals to learn, heal,
          grow and transform, personally and professionally. I am an AHPRA
          registered psychologist with Medicare provider rights and Master
          trained psychotherapist, providing short-term and long-term
          psychological and psychotherapeutic care to adults of varied ages. In
          addition, I provide clinical supervision to counsellors,
          psychotherapists, psychologists and chaplains, with an emphasis on
          reflective practice, professional formation, growth and maturation.
        </p>
        <p>
          Using a relationally orientated, collaborative approach, I seek to
          co-create a safe therapeutic space wherein each client can explore his
          or her sense of well-being and bio-psycho-social and spiritual health.
          I understand the desire to live a full, purposeful and meaningful
          life, working with each client to find his/her unique expression of
          this. Focused on the ‘whole person’ (body-mind-spirit), I support
          clients as they explore the psychological, spiritual, social and
          physiological elements of their life, helping clients to develop and
          sustain a healthy and stable sense of self and positive relationships
          with others.
        </p>
        <p>
          Engaging in research continues to be an important aspect of my
          professional life. Currently I am a Senior Research Fellow with the
          Lumen Research Institute (2017-2020). Previously I have held various
          formal and adjunct Research Fellow positions (e.g., Griffith
          University (2011-2012); Central Queensland University (2009-2010);
          University of Western Sydney (2008)). As a researcher I continue to
          participate in research collaborations with a range of academic and
          clinical institutions (e.g., Children’s Hospital at Westmead; Brain
          and Mind Centre). My own research is focused on spirituality and
          psychological health; the experiences of those with disability and
          serious illness and their carers’ needs; sense-making in the context
          of trauma and loss; and health practitioner professional formation. My
          research has been published in peer-reviewed journals and book
          chapters also presenting work at national and international
          conferences. See <Link to='/research'>Research</Link>
        </p>
      </>
    );
  };

  const qualifications = () => {
    return (
      <>
        <h1>Qualifications</h1>
        <p>
          My clinical work is informed by ongoing professional training and my
          original academic training. Each year the Psychology Board of
          Australia requires all psychologists to complete mandatory
          professional development to ensure psychologists provide their clients
          with relevant, evidence-based, contemporary psychological care. In
          training to become a psychologist I completed four higher education
          degrees.{" "}
        </p>
        <ul>
          <li>
            A Bachelor degree with a double major in Psychology and Religious
            Studies from the University of Sydney - BA (Psych/Rel.Studies);
          </li>
          <li>
            A Bachelor degree with a First Class Honours in Psychology and a
            University Medal from the University of Western Sydney – BA
            (HonsPsych – Class 1/University Medal);{" "}
          </li>
          <li>
            A Masters degree in Psychotherapy from the University of Sydney -
            MScMed (Psychotherapy).
          </li>
          <li>
            A Doctorate in the discipline of Psychology from the University of
            Western Sydney - PhD
          </li>
        </ul>

        <p>
          In three of these degrees included completion of substantive research
          theses, which focused on some aspect of spirituality and health (e.g.,
          spiritual attachment, developmental trauma and adult Christian
          spirituality):
        </p>

        <ul>
          <li>
            Proctor, M-T. (2014). Christians with chronic complex trauma and
            relationally-focused spiritual difficulties: A Conversational Model
            perspective, Master’s Thesis, Westmead Psychotherapy Research
            Program, Faulty of Medicine, University of Sydney, Australia.{" "}
          </li>
          <li>
            Proctor, M-T. (2006). The God Attachment Interview Schedule:
            Implicit and explicit assessment of attachment to God, Doctoral
            Dissertation (Psychology), School of Psychology, University of
            Western Sydney, Australia.
          </li>
          <li>
            Proctor, M-T. (1998). Attachment to God: Is it a viable concept?:
            The relationship between attachment to God, child and adult
            attachment experiences, God concept and the quality and nature of
            relationship with God. Psychology Honours Thesis: School of
            Psychology, University of Western Sydney, Australia.
          </li>
        </ul>
      </>
    );
  };

  const memberships = () => {
    return (
      <>
        <h1>Professional Memberships & Registrations</h1>
        <p>
          Supporting the professional life of peers and students have been
          important to me. Across the years I have resided on numerous
          professional and external academic committees (e.g., Christian
          Counsellors Association Australia (CCAA) NSW Executive Committee; CCAA
          National Executive; Booth College (Salvation Army); Australian
          Colleges of Ministries (ACOM)) and varied internal academic committees
          within the institutions with whom I have worked. Currently I am a
          member of the Psychotherapy and Counselling Federation of Australian
          (PACFA) Education Accreditation Committee (EPAC), sitting on various
          of their course accreditation panels.
        </p>
        <p>
          I hold a range of professional association memberships and provider
          rights:
        </p>
        <ol>
          <li>
            I am registered psychologist with Australian Health Professionals
            Regulation Agency - Psychology Board of Australia{" "}
          </li>
          <li>I am a registered Medicare provider</li>
          <li>
            I am a full member of the Australian Psychological Society (APS)
          </li>
          <li>
            I am a full membership with American Psychological Association
            (APA).
          </li>
          <li>
            I am an associate member of the Christian Counselling Association
            (CCAA).{" "}
          </li>
        </ol>
        <Divider hidden />
        <Card.Group centered>
          <Card
            image='logos/medicare.jpg'
            style={{
              justifyContent: "center",
              padding: ".5rem"
            }}
            href='https://www.humanservices.gov.au/organisations/health-professionals?utm_id=9'
          />
          <Card
            image='logos/ahpra.png'
            style={{
              justifyContent: "center",
              padding: ".5rem"
            }}
            href='https://www.ahpra.gov.au/'
          />
          <Card
            image='logos/aps.jpeg'
            style={{
              justifyContent: "center",
              padding: ".5rem"
            }}
            href='https://www.psychology.org.au/'
          />
          <Card
            image='logos/apa.png'
            style={{
              justifyContent: "center",
              padding: ".5rem",
              background: "white"
            }}
            href='https://www.apa.org/index'
          />
          {/* <Card
            image='logos/ccaa.png'
            style={{
              justifyContent: "center",
              padding: ".5rem"
            }}
            href='https://ccaa.net.au/'
          /> */}
        </Card.Group>

        {/* <ul>
          <li>
            I am registered psychologist with Australian Health Professionals
            Regulation Agency - Psychology Board of Australia{" "}
          </li>
          <li>I am a registered Medicare provider </li>
          <li>
            I am a full member of the Australian Psychological Society (APS)
          </li>
          <li>
            I am a full membership with American Psychological Association
            (APA).
          </li>
          <li>
            I am an associate member of the Christian Counselling Association
            (CCAA).{" "}
          </li>
        </ul> */}
      </>
    );
  };

  const pastRoles = () => {
    return (
      <>
        <h1>Past Roles</h1>
        <p>
          For a large part of the past 20+ years I have been involved in
          academia, firstly as a student, then as a lecturer and senior
          lecturer. I love teaching and find it rewarding and exciting to
          observe students become engaged in, and passionate about the material
          being delivered to them. Similarly, I enjoy delivering professional
          development workshops and speaking at conferences, sharing
          professional knowledge and research findings to varied audiences. For
          example, I was the sole facilitator for the BaptistCare Chaplaincy
          Conference (2018) and keynote speaker for the Australian Chaplaincy
          Conference (ACC) (2017)
        </p>
        <Divider hidden />
        <Image src='images/Image_13_Water_drop_3.jpg' />

        <Divider hidden />
        <p>
          I have also held various academic posts – for example, firstly
          Assistant Head (2011) and then Head of the Graduate School of
          Counselling at Excelsia College (formerly Wesley Institute)
          (2012-2019) and Director of the College’s Counselling Centre
          (2012-2018). As Head of School I oversaw the training of Masters-level
          counsellors, concurrently responsible for conceptualization,
          development, accreditation, rollout and ongoing review of a Master of
          Counselling program, supported by a team of highly experienced
          counsellor educators. Obtaining 7 years course accreditation from the
          Tertiary Quality and Standards Agency (TEQSA) Australia’s higher
          education regulator, and from the Psychotherapy and Counselling
          Federation of Australian (PACFA) and the Australian Counselling
          Association (ACA) was a highlight from this period. Designing a
          post-graduate counselling program consisting of 3 degrees is a unique
          privilege, enabling me to make a professional contribution to the
          counselling sector and the development of next generation of Christian
          counsellors.{" "}
        </p>

        <p>
          Prior to Excelsia College, I worked for the Christian’s Hospital at
          Westmead (2004-2012) as a psychologist researcher, part of a team
          exploring the experiences of families caring for children and young
          people, living with and dying from life-limiting and life-threating
          illnesses. It was an extraordinary and unique privilege to come
          alongside these families, observing and listening to their
          experiences, proving me with a nuanced insight into, and understanding
          of how illness, disability, death, bereavement, loss and grief affect
          both individuals and family unit.{" "}
        </p>
      </>
    );
  };

  const research = () => {
    return (
      <>
        <h1>Research</h1>
        <p>
          Engaging in research continues to be an important aspect of my
          professional life. Currently I am a Senior Research Fellow with the
          Lumen Research Institute (2017-2020). Previously I have held various
          formal and adjunct Research Fellow positions (e.g., Griffith
          University (2011-2012); Central Queensland University (2009-2010);
          University of Western Sydney (2008)). As a researcher I continue to
          participate in research collaborations with a range of academic and
          clinical institutions (e.g., Children’s Hospital at Westmead; Brain
          and Mind Centre). My own research is focused on spirituality and
          psychological health; the experiences of those with disability and
          serious illness and their carers’ needs; sense-making in the context
          of trauma and loss; and health practitioner professional formation. My
          research has been published in peer-reviewed journals and book
          chapters also presenting work at national and international
          conferences (See below)
        </p>
        <h4>Articles</h4>
      </>
    );
  };
  return (
    <>
      <Jumbotron
        imgDir='images/image_11/'
        fileName='image_11'
        imgFormat='jpg'
        fileCount={13}
      ></Jumbotron>
      <Divider hidden />
      <div ref={topOfTabRef} />

      <Container style={{ minHeight: "50vh" }}>
        <div ref={topOfTabRef} />
        <Responsive
          as={Tab}
          menu={{
            fluid: true,
            stackable: true,
            vertical: false
          }}
          onTabChange={() => {
            document.querySelector("#scrollableContainer").scroll({
              top: topOfTabRef.current.offsetTop - 60,
              behavior: "smooth"
            });
          }}
          panes={panes}
          {...Responsive.onlyMobile}
        ></Responsive>

        <Responsive
          as={Tab}
          menu={{
            fluid: true,
            // stackable: true,
            vertical: true
          }}
          panes={panes}
          onTabChange={() => {
            document.querySelector("#scrollableContainer").scroll({
              top: topOfTabRef.current.offsetTop - 60,
              behavior: "smooth"
            });
          }}
          {...Responsive.onlyTablet}
        ></Responsive>
        <Responsive
          as={Tab}
          menu={{
            fluid: true,
            // stackable: true,
            vertical: true
          }}
          panes={panes}
          onTabChange={() => {
            document.querySelector("#scrollableContainer").scroll({
              top: topOfTabRef.current.offsetTop - 60,
              behavior: "smooth"
            });
          }}
          {...Responsive.onlyComputer}
        ></Responsive>
      </Container>
    </>
  );
}
