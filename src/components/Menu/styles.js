import styled, { css, keyframes } from 'styled-components';

// export const Container = styled.div``;

export const Container = styled.div`
  height: 105px;
  margin-left: 260px;
  background: #eee;
  /* align-items: center;
  justify-content: center; */
  /* margin-bottom: 20px; */
  /* background: red; */
`;

export const WrapperMenu = styled.div`
  width: 97%;
  margin: 0 auto;
  height: 105px;
  /* background: blue; */
  display: flex;
`;

export const MenuRight = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 105px;
  border: 0px;
  /* background: yellow; */
  align-items: center;
  justify-content: flex-end;
  display: flex;

  button {
    width: 60px;
    height: 60px;
    background: inherit;
    outline: none;
    border: 0px;
    margin: 0 10px 0 0%;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      /* &:hover {
        color: blue;
      } */
    }
  }
`;

export const MenuLeft = styled.div`
  width: 97%;
  margin: 0 auto;
  height: 105px;
  /* background: green; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    width: 100%;
    display: flex;
    align-items: center;

    input {
      padding: 15px 20px;
      width: 97%;
      height: 50px;
      border: 0;
      outline: none;
      border-radius: 4px;
      border-bottom: 2px solid #954cbf;
      margin-right: 20px;
    }
  }
`;

export const ModalLogout = styled.div`
  width: 200px;
  height: 100px;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  position: absolute;
  top: 80px;
  right: 50px;
  z-index: 999;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 45px;
  background: #954cbf;
  color: #fff;
  border: 0px;
  outline: none;
  border-radius: 4px;
  margin-right: 20px;

  p {
    display: flex;
  }

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
