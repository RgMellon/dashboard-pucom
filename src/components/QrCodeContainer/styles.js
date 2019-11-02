import styled from 'styled-components';
import QrReader from 'react-qr-reader';

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  background: #fff;

  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 9;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  /* background: blue; */
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  /* padding: 10px; */
`;

export const Close = styled.button`
  width: 50px;
  height: 50px;
  /* background: green; */
  /* margin-top: 10px; */
  outline: none;
  border: 0px;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 25px;
    color: #333;
    font-weight: 300;
    margin-top: 30px;
    text-align: center;
  }
`;

export const PucomQrCode = styled(QrReader)`
  width: 50%;
  height: 200px;
  margin-top: 40px;
  display: flex;
`;
