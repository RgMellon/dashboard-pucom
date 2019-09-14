import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  /* background: #ccc; */

  /* height: 100vh; */
  width: 100%;
  display: flex;
`;

export const ContentLeft = styled.div`
  background: #fff;
  width: 70%;
  margin-top: 80px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  /* background: red; */
`;

export const ContentRight = styled.div`
  width: 30%;
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardProfile = styled.div`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 3px;
  /* background: #fff; */
  background: #fff;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 80px;

  img {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    margin-top: -40px;
    width: 110px;
    height: 110px;
    border-radius: 60px;
  }

  h1 {
    margin-top: 20px;
    font-size: 18px;

    line-height: 1.5em !important;
    font-weight: 300;
  }

  p {
    /* margin-top: 6px; */
    color: #999 !important;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    padding: 20px;
  }
`;

export const HeaderTable = styled.div`
  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28),
    0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2) !important;
  width: 96%;
  height: 80px;
  /* background: linear-gradient(-30deg, #954cbf, #320061); */
  background: #320061;
  margin: 0 auto;
  border-radius: 4px;
  margin-top: -20px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 18px;
    color: #fff;
    font-size: 20px;
    font-weight: 300 !important;
    padding-left: 20px;
  }

  p {
    padding-left: 20px;
    margin-top: 1px;
    color: #fff;
    font-weight: 300 !important;
    font-size: 14px;
  }
`;

export const Form = styled.form`
  /* background: red; */
  padding: 20px;
  width: 96%;
  padding-top: 20px;
  margin: 0 auto;

  input {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border-radius: 4px;
    border: 0.7px solid #eee;
    padding: 15px 5px;
  }

  button {
    width: 150px;
    height: 50px;
    border-radius: 4px;
    background: #320061;
    margin-top: 20px;
    color: #fff;
  }
`;

export const TwoColumn = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 49%;
  }
`;

export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
