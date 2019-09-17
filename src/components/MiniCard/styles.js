import styled from 'styled-components';

export const Container = styled.div`
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
