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
  /* width: 90%; */
  background: linear-gradient(60deg, #26c6da, #00acc1) !important;
  /* background: linear-gradient(60deg, #320061, #954cbf, #954cbf); */
  /* position: absolute; */
  /* position: relative; */
  /* top: -40px; */
  /* display: flex; */
  margin: 0 auto;
  border-radius: 4px;
  margin-top: -80px;
  /* display: flex; */
  /* flex-direction: column; */

  &:hover {
    transform: scale(1.02);
  }
`;
