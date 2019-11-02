import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HeaderTable = styled.div`
  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28),
    0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2) !important;
  width: 96%;
  height: 80px;
  position: absolute;
  right: 0;
  left: 0;
  width: 77%;
  /* margin: 0 auto; */
  left: 251px;
  top: 143px;

  background: #320061;
  margin: 0 auto;
  border-radius: 4px;
  /* margin-top: -20px; */
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

export const TableCupons = styled.table`
  margin-top: 40px;
  /* border: 1px solid black; */
  width: 100%;
  padding-top: 90px;
  padding-left: 20px;
  padding-right: 20px;
  /* padding: 20px 120px 20px 20px; */
  border-spacing: 0;
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 3px;
  /* position: relative; */

  thead {
    tr {
      height: 32px;
    }

    th {
      color: #320061 !important;

      font-weight: 300 !important;
      text-align: left !important;
    }

    th {
      border-bottom: 1px solid rgba(0, 0, 0, 0.06) !important;
      padding: 12px 24px;
    }
  }

  tbody {
    /* background: #d6d6; */

    td {
      border-bottom: 1px solid rgba(0, 0, 0, 0.06) !important;
      font-size: 14px;
      font-weight: 300;
      padding: 12px 24px;

      img {
        width: 50px;
        border-radius: 25px;
        border: 0.8px solid #ccc;
      }
    }

    tr {
      text-align: left;
      height: 60px;

      &:hover {
        /* opacity: 0.1; */
        background: #fafafa;
        /* color: #fff; */
      }
    }
  }
`;
