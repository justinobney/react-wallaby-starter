import React, {Component} from 'react';
import {Button, Container, Rating, Table} from 'semantic-ui-react';

import Page from '../../styles/Page';
import AppFooter from '../layout/AppFooter';

class DashboardIndex extends Component {
  state = {};

  _renderTable = () => (
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
              <Button fluid>Edit</Button>
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
  );

  render() {
    return (
      <Page>
        <Page.Header>Dashboard</Page.Header>
        <Page.Fill scroll padded>
          <Container>
            {this._renderTable()}
            <AppFooter />
          </Container>
        </Page.Fill>
      </Page>
    );
  }
}

export default DashboardIndex;
