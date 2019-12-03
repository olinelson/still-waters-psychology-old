import React from 'react'
import { Table, Container } from 'semantic-ui-react'
import { Jumbotron } from '../components/StyledComponents'

export default function Links() {
    return <>
        <Jumbotron style={{ backgroundImage: `url('https://storage.googleapis.com/inner_wisdom_bucket/ancient-art-asia-302100.jpg') `, backgroundPosition: "center" }} />



        <Container text textAlign="center">
            <h1>Links</h1>
            <Table basic='very' celled >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Organisation</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Lifeline</Table.Cell>
                        <Table.Cell>13 11 14</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Headspace – For young people 12-25 </Table.Cell>
                        <Table.Cell>1800 650 890</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Anxiety Disorders Information & Support Line </Table.Cell>
                        <Table.Cell>1300 794 992</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Mensline 24/7</Table.Cell>
                        <Table.Cell>1300 789 978</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Sexual assault counselling</Table.Cell>
                        <Table.Cell>1800 806 292</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Women's DV Helpline</Table.Cell>
                        <Table.Cell>1800 007 339</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Container>
    </>

}