import React from 'react';
import {Header, Rating, Table} from 'semantic-ui-react';
import {BasicPage} from 'styles';

const DashboardIndex = () => (
  <BasicPage header="Dashboard">
    <Table celled padded striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
          <Table.HeaderCell>Effect</Table.HeaderCell>
          <Table.HeaderCell>Efficacy</Table.HeaderCell>
          <Table.HeaderCell>Consensus</Table.HeaderCell>
          <Table.HeaderCell>Comments</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {Array.from({length: 20}).map((x, i) => (
          <Table.Row key={i}>
            <Table.Cell>
              <Header as="h2" textAlign="center">
                A
              </Header>
            </Table.Cell>
            <Table.Cell singleLine>Power Output</Table.Cell>
            <Table.Cell>
              <Rating icon="star" defaultRating={3} maxRating={3} />
            </Table.Cell>
            <Table.Cell textAlign="right">
              80% <br />
              <a>18 studies</a>
            </Table.Cell>
            <Table.Cell>
              Creatine supplementation is the reference compound for increasing
              muscular creatine levels; there is variability in this increase,
              however, with some nonresponders.
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </BasicPage>
);

export default DashboardIndex;
