import React, { useEffect, useState } from 'react';

import ChartistGraph from 'react-chartist';
import ChartistTooltip from 'chartist-plugin-tooltips-updated';

import {
  Container,
  Card,
  Content,
  MainChart,
  ContentInfoCard,
  DetailFinTitle,
} from './styles';

import SectionMiniCardDetail from '~/components/SectionMiniCardDetail';
import SectionMiniCardMoney from '~/components/SectionMiniCardMoney';
import Table from '~/components/Table';

import api from '~/services/api';

const options = {
  width: '500px',
  height: '386px',
  plugins: [
    ChartistTooltip({
      appendToBody: true,
    }),
  ],
  // color: '#fff',
};

const type = 'Bar';

export default function Dashboard() {
  const [couponsTaked, setCouponsTaked] = useState([]);
  const [viewShops, setViewShops] = useState([]);

  useEffect(() => {
    async function getdataMainCharts() {
      const response = await api.get('datas/coupons/days/used');
      const { couponsTake, shopViews } = await response.data;

      // console.tron.log(couponsTake);

      setCouponsTaked(couponsTake.data);
      setViewShops(shopViews.data);
    }

    getdataMainCharts();
  }, []);

  return (
    <Container>
      <Content>
        <Card>
          <MainChart>
            <ChartistGraph
              // color="red"
              data={couponsTaked}
              options={options}
              type={type}
            />
          </MainChart>
          <h1> Quantidade de cupons baixados nos ultimos 15 dias </h1>
          <p>
            <span> 89 </span> cupons foram baixados
          </p>
        </Card>

        <Card>
          <MainChart>
            <ChartistGraph
              className="second-chart"
              // color="red"
              data={couponsTaked}
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

      {/* <DetailFinTitle> Detalhe Quantitativo </DetailFinTitle> */}
      <ContentInfoCard>
        <SectionMiniCardDetail />
      </ContentInfoCard>

      {/* <DetailFinTitle> Financeiro </DetailFinTitle> */}
      <ContentInfoCard>
        <SectionMiniCardMoney />
      </ContentInfoCard>

      <Content>
        <section>
          <Table
            titleHeader="Ultimos cupons retirados"
            bkHeader="linear-gradient(60deg,#66bb6a,#43a047)"
            tableHeader={['Nome', 'Email', 'Teste']}
            dataTable={[['Jose', 'Maria', 'Teste'], ['Jose', 'Maria', 'Teste']]}
          />
        </section>

        <section>
          <Table
            titleHeader="Ultimos cupons vistos"
            bkHeader="linear-gradient(60deg,#ffa726,#fb8c00)"
            tableHeader={['Nome', 'Email']}
            dataTable={[['Jose', 'Maria'], ['Moises2', 'Maria2']]}
          />
        </section>
      </Content>
    </Container>
  );
}
