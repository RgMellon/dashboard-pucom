import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;
export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff8922;
        content: '';
        border-radius: 50%;
      }
    `}

  span {
    position: absolute;
    top: 16px;
    left: 8px;
    height: 18px;
    width: 18px;
    display: block;
    background: #954cbf;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    opacity: 0.8;
  }
`;

export const NotificationList = styled.div`
  position: absolute;

  width: 220px;
  top: calc(100% + 30px);
  left: calc(50% - 115px);
  background: #954cbf;
  border-radius: 4px;
  padding: 15px 5px;
  z-index: 9999;
  /* overflow: auto; */
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #954cbf;
    z-index: 9999;
  }
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export const ScrollBar = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
  overflow: auto;
}`;

export const Notification = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  color: #fff;

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
    padding: 0 5px;
    margin: 0 5px;
    /* border-left: 1px solid rgba(255, 255, 255, 0.1); */
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-right: 20px;
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: rgba(255, 255, 255, 0.3);
    font-size: 12px;
  }
`;
