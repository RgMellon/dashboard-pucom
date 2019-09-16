import styled, { keyframes, css } from 'styled-components';

import { Form, Input, Select } from '@rocketseat/unform';

export const Container = styled.div`
  flex: 1;
  /* background: #ccc; */

  /* height: 100vh; */
  width: 100%;
  display: flex;
  position: relative;
`;

export const ContentLeft = styled.div`
  background: #fff;
  width: 60%;
  margin-top: 80px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  /* background: red; */
`;

export const ContentRight = styled.div`
  margin-top: 80px;
  width: 40%;
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardPucom = styled.div`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 3px;
  background: #fff;
  width: 90%;
  height: 200px;
  display: flex;
  align-items: center;

  h1 {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.5em !important;
    font-weight: 300;
  }
`;

export const HeaderTable = styled.div`
  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28),
    0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2) !important;
  width: 96%;
  height: 80px;

  background: #320061;
  margin: 0 auto;
  border-radius: 4px;
  margin-top: -20px;
  display: flex;

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

export const PucomSelect = styled(Select)`
  margin-top: 20px;
  height: 50px;
  width: 100%;
  border: 0.7px solid #eee;
  padding: 15px 10px;
`;

export const PucomInput = styled(Input)`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: 0.7px solid #eee;
  padding: 15px 10px;
`;

export const PucomForm = styled(Form)`
  /* background: red; */
  padding: 20px;
  width: 96%;
  padding-top: 20px;
  margin: 0 auto;
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

export const LeftCupom = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(1, 1, 1, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);

    width: 120px;
    height: 120px;
    border-radius: 60px;
  }
`;
export const RightCupom = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;
  /* height: 100%; */
  /* background: red; */
  h4 {
    color: #333;
    font-weight: 300;
    text-align: left;
    margin-top: 10px;
  }
`;
export const OldPrice = styled.p`
  font-size: 14px;
  color: #333;
  font-weight: 300px;
`;

export const DiscountPrice = styled.p`
  font-size: 20px;
  color: #320061;
  font-weight: 800px;
`;

export const WrapperPrice = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 0 0 20px 0;
  border-width: 100%;
  display: flex;
  /* background: red; */
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  /* padding-right: 20px; */
`;

export const BadgeDiscount = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 40px;
  position: absolute;
  background: #320061;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 120px;
  right: 222px;

  p {
    color: #fff;
    font-weight: bold;
    font-size: 17px;
  }
`;

const rotate = keyframes`
  from: {
    transform: rotate(0deg)
  } to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  width: 150px;
  height: 50px;
  border-radius: 4px;
  background: #320061;
  margin-top: 20px;
  color: #fff;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
