import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ChartistGraph from 'react-chartist';
import ChartistTooltip from 'chartist-plugin-tooltips-updated';

import api from '~/services/api';

import { Container, Card, Content, MainChart, ContentInfoCard } from './styles';

import SectionMiniCardDetail from '~/components/SectionMiniCardDetail';
import SectionMiniCardMoney from '~/components/SectionMiniCardMoney';
import LastCuponsViews from '~/components/LastCuponsViews';
import LastCuponsTaked from '~/components/LastCuponsTaked';
import QrCodeContainer from '~/components/QrCodeContainer';

const options = {
  width: '500px',
  height: '386px',
  plugins: [
    ChartistTooltip({
      appendToBody: true,
    }),
  ],
};

const type = 'Bar';

export default function Dashboard() {
  const { open } = useSelector(state => state.qrCode);

  const [couponsTaked, setCouponsTaked] = useState([]);
  const [viewShops, setViewShops] = useState([]);

  useEffect(() => {
    async function getdataMainCharts() {
      try {
        const response = await api.get('datas/coupons/days/used');
        const { couponsTake, shopViews } = await response.data;
        // console.tron.log(couponsTake);

        setCouponsTaked(couponsTake.data);
        setViewShops(shopViews.data);
        console.tron.log(couponsTake.data, 'cupons');
      } catch (e) {
        console.tron.log(e);
      }
    }

    getdataMainCharts();
  }, []);

  return (
    <Container>
      {open && <QrCodeContainer />}
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
              data={viewShops}
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
        <SectionMiniCardDetail />
      </ContentInfoCard>

      <ContentInfoCard>
        <SectionMiniCardMoney />
      </ContentInfoCard>

      <Content>
        <LastCuponsViews />
        <LastCuponsTaked />
      </Content>
    </Container>
  );
}
