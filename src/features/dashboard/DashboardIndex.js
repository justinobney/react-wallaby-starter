import React, {Component} from 'react';
import {Header, Rating, Table} from 'semantic-ui-react';
import {
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {BasicPage} from 'styles';
import {colors} from 'styles/theme';
import FormContainer from 'features/form-components/FormContainer';

const data = [
  {name: '11-1-17', uv: 4000, pv: 2400, amt: 2400},
  {name: '11-2-17', uv: 3000, pv: 1398, amt: 2210},
  {name: '11-3-17', uv: 2000, pv: 9800, amt: 2290},
  {name: '11-4-17', uv: 2780, pv: 3908, amt: 2000},
  {name: '11-5-17', uv: 1890, pv: 4800, amt: 2181},
  {name: '11-6-17', uv: 2390, pv: 3800, amt: 2500},
  {name: '11-7-17', uv: 3490, pv: 4300, amt: 2100},
];

const CustomizedAxisTick = ({x, y, stroke, payload}) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dy={16}
      textAnchor="end"
      fill="#666"
      transform="rotate(-35)"
    >
      {payload.value}
    </text>
  </g>
);

class DashboardIndex extends Component {
  _renderChart = () => (
    <FormContainer>
      <Header as="h2">Last 7 Days</Header>
      <div style={{height: 200}}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis
              dataKey="name"
              height={45}
              padding={{left: 30, right: 30}}
              tick={<CustomizedAxisTick />}
            />
            <Tooltip />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Line
              type="monotone"
              dataKey="pv"
              stroke={colors.greenDark}
              strokeWidth={4}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke={colors.tealDark}
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </FormContainer>
  );

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
  );

  render() {
    return (
      <BasicPage header="Dashboard">
        {this._renderChart()}
        {this._renderTable()}
      </BasicPage>
    );
  }
}

export default DashboardIndex;
