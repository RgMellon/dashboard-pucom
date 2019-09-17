import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  /* background: #fff; */
  height: 100vh;
  width: 100%;
`;

export const Card = styled.div`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 3px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  max-width: 100%;
  width: 100%;

  height: 500px;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  justify-content: center;
  border-radius: 4px;
  position: relative;

  h1 {
    padding-top: 40px;
    margin-left: 18px;
    font-weight: 250;
    font-size: 18px;
    /* gin-top: 0; */
    line-height: 1.5em !important;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    width: 80%;
  }

  p {
    font-size: 14px;
    color: #999;
    font-weight: 300;
    margin-left: 18px;
    margin-top: 18px;
    line-height: 22px;
    width: 80%;

    span {
      color: #320061;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`;

export const MainChart = styled.div`
  background: linear-gradient(60deg, #26c6da, #00acc1) !important;

  margin: 0 auto;
  border-radius: 4px;
  margin-top: -80px;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ContentInfoCard = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  /* justify-content: space-between; */
`;

export const ContainerMiniCard = styled.div`
  width: 100%;
  height: 130px;
  /* background: red; */
  border-radius: 4px;
  background: #fff;
`;

export const WrapperIcon = styled.div`
  width: 100px;
  height: 80px;
  background: ${props => props.background};
  margin-top: -20px;
  margin-left: 10px;

  max-width: 85px;
  max-height: 85px;
  line-height: 85px;
  padding: 15px !important;

  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28),
    0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2) !important;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
  display: flex;
`;
