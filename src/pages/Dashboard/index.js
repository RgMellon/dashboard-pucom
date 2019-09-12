import React from 'react';
import ChartistGraph from 'react-chartist';

import { Container, Card, Content, ChartWrapper } from './styles';

// Create a simple line chart
const data = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // Our series array that contains series objects or in this case series data arrays
  series: [[200, 2, 4, 2, 0]],
};

const options = {
  width: '100%',
  height: '300px',
  color: '#fff',
};

const type = 'Line';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <Card>
          <ChartWrapper>
            <ChartistGraph
              color="#fff"
              data={data}
              options={options}
              type={type}
            />
          </ChartWrapper>
        </Card>
        <Card>
          <ChartWrapper> </ChartWrapper>
        </Card>
        <Card>
          <ChartWrapper> </ChartWrapper>
        </Card>
      </Content>
    </Container>
  );
}
