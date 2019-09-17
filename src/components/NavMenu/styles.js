import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  background: linear-gradient(-120deg, #954cbf, #320061);
  /* opacity: 0.8; */
  width: 260px;
  border-top-right-radius: 1px;
  border-bottom-right-radius: 1px;
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42),
    0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 87%;
  /* background: red; */
`;

export const Header = styled.div`
  /* margin-top: 20px; */
  display: flex;
  width: 100%;
  height: 100px;
  /* background-color: blue; */
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 40px;
    background: #fff;
    object-fit: cover;
  }

  p {
    color: #fff;
    margin-left: 16px;
    padding: 5px 0;
    height: unset;
    font-size: 18px !important;
    font-weight: 400;
    letter-spacing: unset !important;
  }
`;

export const Separator = styled.div`
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0;
  max-height: 0;
  border: solid;
  border-width: thin 0 0;
  -webkit-transition: inherit;
  transition: inherit;
  border-color: hsla(0, 0%, 70.6%, 0.3);
`;

export const Aside = styled.aside``;

export const Menu = styled.ul`
  li {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-top: 20px;
    height: 56px;
    padding: 10px 15px;
    cursor: pointer;

    p {
      margin-left: 20px;
      color: #fff;
      font-size: 14px !important;
      font-weight: 300;
      padding: 0;
    }

    &:hover {
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;
