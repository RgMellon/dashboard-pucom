import styled from 'styled-components';

// export const Container = styled.div``;

export const ContainerMiniCard = styled.div`
  width: 100%;
  /* height: 130px; */
  /* background: red; */
  border-radius: 4px;
  background: #fff;
  display: flex;
  padding-bottom: 20px;
`;

export const WrapperIcon = styled.div`
  width: 120px;
  height: 100px;
  background: ${props => props.background};
  margin-top: -20px;
  /* margin-left: 10px; */

  max-width: 105px;
  max-height: 105px;
  line-height: 85px;
  padding: 15px !important;

  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28),
    0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2) !important;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 10px;

  /* position: absolute; */

  p {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ContentMiniCard = styled.div`
  margin-left: 20px;
  /* background: red; */
  width: 80%;
  display: flex;
  /* justify-content: center; */
  align-items: flex-end;
  flex-direction: column;
  margin-right: 10px;

  h3 {
    color: #9e9e9e !important;
    caret-color: #9e9e9e !important;
    margin-top: 10px;
    font-weight: 300;
    font-size: 14px;
    border-bottom: 1px solid #d6d6d6;
    padding: 10px;
  }

  p {
    margin-top: 20px;
    color: #333;
    font-size: 25px;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  align-items: center;

  p {
    color: #333;
    margin: 0px;
    font-size: 14px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  margin-right: 8px;
`;
