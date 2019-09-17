import React from 'react';

import { FaGenderless, FaMobile } from 'react-icons/fa';
import ChartistGraph from 'react-chartist';

import {
  Container,
  Card,
  Content,
  MainChart,
  ContentInfoCard,
  ContainerMiniCard,
  WrapperIcon,
} from './styles';

// import MiniCard from '~/components/MiniCard';
// Create a simple line chart
const data = {
  // A labels array that can contain any sort of values
  labels: [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '08',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [20, 200, 100, 700, 800, 100, 30, 200, 100, 201, 20, 199, 12, 111, 19],
  ],
};

const options = {
  width: '500px',
  height: '350px',
  // color: '#fff',
};

const type = 'Bar';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <Card>
          <MainChart>
            <ChartistGraph
              // color="red"
              data={data}
              options={options}
              type={type}
            />
          </MainChart>
          <h1> Quantidade de cupons baixados nos ultimos 15 dias </h1>
          <p>
            <span> 89 </span> cupons foram baixados{' '}
          </p>
        </Card>

        <Card>
          <MainChart>
            <ChartistGraph
              className="second-chart"
              // color="red"
              data={data}
              options={options}
              type="Line"
            />
          </MainChart>
          <h1> Quantidade de visitas em sua loja nos ultimos 15 dias </h1>
          <p>
            <span> 89 </span> visitas acessadas pelo app
          </p>
        </Card>
      </Content>
      <ContentInfoCard>
        <ContainerMiniCard>
          <WrapperIcon background="linear-gradient(60deg,#26c6da,#00acc1)">
            <FaGenderless size={40} color="#fff" />
          </WrapperIcon>
        </ContainerMiniCard>
        <ContainerMiniCard>
          <WrapperIcon background="linear-gradient(-120deg, #954cbf, #320061)">
            <FaMobile size={40} color="#fff" />
          </WrapperIcon>
        </ContainerMiniCard>
        <ContainerMiniCard>
          <WrapperIcon background="linear-gradient(60deg,#ef5350,#e53935)">
            {/* <FaTransgenderAlt size={40} color="#fff" /> */}
          </WrapperIcon>
        </ContainerMiniCard>
      </ContentInfoCard>
    </Container>
  );
}
