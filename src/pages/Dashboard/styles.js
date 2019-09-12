import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background: #fff;
  height: 100vh;
  width: 100%;
`;

export const Card = styled.div`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 3px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  max-width: 100%;
  flex: 1 1 auto;
  height: 400px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  position: relative;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

export const ChartWrapper = styled.div`
  width: 90%;
  background: linear-gradient(-90deg, #954cbf, #320061);
  height: 300px;
  position: absolute;
  top: -40px;
  display: flex;
  margin: 0 auto;
  border-radius: 4px;
`;
