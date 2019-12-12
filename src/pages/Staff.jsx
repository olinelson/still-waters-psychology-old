import React, { useState } from "react";
import { Jumbotron } from "../components/StyledComponents";
import {
  Container,
  Image,
  Grid,
  Segment,
  Menu,
  Divider,
  Header,
  List
} from "semantic-ui-react";

export default function Staff() {
  const [activeItem, setActiveItem] = useState("biography");

  const tabRouter = () => {
    switch (activeItem) {
      case "biography":
        return biography();

      case "qualifications":
        return qualifications();

      case "memberships":
        return memberships();
    }
  };

  const biography = () => {
    return (
      <>
        <h1>Biography</h1>
        <Image
          fluid
          size='medium'
          floated='right'
          src='https://i.pinimg.com/originals/36/51/9e/36519e622b138523a34b9beb29f666b9.jpg'
        />
        <p>
          My name is Dr Marie-Thérèse Proctor. For more than 25 years, whether
          as a clinician, researcher, educator and academic, I have been
          passionate about enabling and equipping individuals to learn, heal,
          grow and transform, personally and professionally. I am a registered
          psychologist (Medicare provider) and Master trained psychotherapist
          providing short-term and long-term psychological and psychotherapeutic
          care to adults of varied ages. In addition, I provide clinical
          qualifications to counsellors, psychotherapists, psychologists and
          chaplains, with an emphasis on reflective practice, professional
          formation, growth and maturation.
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
          with others.{" "}
        </p>
        <p>
          Engaging in research continues to be an important aspect of my
          professional life. Currently I am a Senior Research Fellow with the
          Lumen Research Institute (2017-2020). Previously I have held various
          formal and adjunct Research Fellow positions (e.g., Griffith
          University (2011-2012); Central Queensland University (2009-2010);
          University of Western Sydney (2008)).{" "}
        </p>
        <p>
          Across the years I have resided on numerous professional and academic
          committees (e.g., Christian Counsellors Association Australia (CCAA)
          NSW Executive Committee; CCAA National Executive; Booth College
          (Salvation Army); Australian Colleges of Ministries (ACOM)). Currently
          I am a member of the Psychotherapy and Counselling Federation of
          Australian (PACFA) Education Accreditation Committee (EPAC), sitting
          on various of their course accreditation panels.{" "}
        </p>
        <p>
          As a researcher I continue to participate in research collaborations
          with a range of academic and clinical institutions (e.g., Children’s
          Hospital at Westmead; Brain and Mind Centre). My own research is
          focused on spirituality and psychological health; the experiences of
          those with disability and serious illness and their carers’ needs;
          sense-making in the context of trauma and loss; and health
          practitioner professional formation. My research has been published in
          peer-reviewed journals and book chapters, the details of which are
          located on the Resource page (insert link){" "}
        </p>
        <p>
          I am also an academic educator and, until recently, was Head of the
          Graduate School of Counselling at Excelsia College (2011-2019) where I
          oversaw the training of Masters-level counsellors, concurrently
          Director of the College’s Counselling Centre (2012-2018). As Head of
          School I was responsible for conceptualization, development,
          accreditation, rollout and ongoing review of a Master of Counselling
          program, supported by a team of highly experienced counsellor
          educators. Designing a post-graduate counselling program (consisting
          of 3 degrees) is a unique privilege, enabling me to make a
          professional contribution to the counselling sector and the
          development of next generation of Christian counsellors.{" "}
        </p>
      </>
    );
  };

  const qualifications = () => {
    return (
      // <Container text>
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
          In three of these degrees I completed substantive research theses,
          focused on some aspect of spirituality and health (e.g., spiritual
          attachment, developmental trauma and adult Christian spirituality):
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
          I hold a range of professional association memberships and provider
          rights:
        </p>
        <ul>
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
        </ul>
      </>
    );
  };

  return (
    <>
      <Jumbotron
        alt='Still Waters, Credit: Catharine McCann
Maine 1 Photography'
        src='images/Image_6_Sunset_with_rocks.jpg'
      ></Jumbotron>
      <Divider hidden />

      <Container style={{ minHeight: "50vh" }}>
        <Grid stackable>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name='biography'
                active={activeItem === "biography"}
                onClick={() => setActiveItem("biography")}
              >
                <Header as='h4'>Biography</Header>
              </Menu.Item>

              <Menu.Item
                name='qualifications'
                active={activeItem === "qualifications"}
                onClick={() => setActiveItem("qualifications")}
              >
                <Header as='h4'>Clinical qualifications </Header>
              </Menu.Item>

              <Menu.Item
                name='memberships'
                active={activeItem === "memberships"}
                onClick={() => setActiveItem("memberships")}
              >
                <Header as='h4'>
                  Professional Memberships & Registrations
                </Header>
              </Menu.Item>
            </Menu>
          </Grid.Column>

          <Grid.Column width={12}>{tabRouter()}</Grid.Column>
        </Grid>
      </Container>
    </>
  );
}
