import React from 'react'
import { Header, Label, Item, Container, Divider } from 'semantic-ui-react'
import { JumboHeader, JumboMessage, Jumbotron } from '../components/StyledComponents'


function Home() {

    return <>
        <Jumbotron fullHeight src="https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" >
            <JumboMessage  >
                <JumboHeader size="huge" as={"h1"} inverted>Still Waters Psychology</JumboHeader>
                <Header.Subheader style={{ color: "white", textShadow: "1px 1px 2px black" }} as="h3">Wellbeing, Relationships, Guidance</Header.Subheader>


            </JumboMessage>
            <Label style={{ alignSelf: "flex-end", justifySelf: "flex-start", color: "white", backgroundColor: "rgba(0,0,0,0)", visibility: "hidden" }} size="big" content="scroll" icon="arrow up" />
        </Jumbotron>

        <Divider hidden />

        <Container>

            <Item.Group>
                <Item>
                    <Item.Image alt="Susan Stephenson, Director" size='medium' src={`${process.env.BASE_URL}/headshot.jpg`} />
                    {/* <Item.Image alt="Susan Stephenson, Director" size='medium' src='https://storage.googleapis.com/inner_wisdom_bucket/headshot_noExifRotated.jpg' /> */}

                    <Item.Content verticalAlign='top'>
                        <Header>Susan Stephenson | Director
                            <Header.Subheader> B.A (Psych), Dip. Ed. (Psych), MEd (Counselling), FAPS, MCCOUNP, AAOS</Header.Subheader>
                        </Header>

                        <Item.Description>
                            <p>
                                I am a Registered Counselling Psychologist with 30+ years’ experience helping adults and couples resolve difficulties in order to live fulfilling, purposeful and content lives.
                                I specialize in mental health well-being, including managing personal and workplace stress, anxiety and depression; recovery from psychological and emotional trauma (past and present), bereavement, grief and loss; life transitions and adjustments; couples and relationship counselling.
</p>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>

        </Container>

    </>

}

export default Home