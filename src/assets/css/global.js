import { createGlobalStyle } from 'styled-components';
// import 'react-toastify/dist/ReactToastify.css';

// import 'react-perfect-scrollbar/dist/css/styles.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  .ct-series-a .ct-bar, .ct-series-a .ct-line, .ct-series-a .ct-point, .ct-series-a .ct-slice-donut {
    stroke: #fff;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
}
.ct-series-b .ct-bar, .ct-series-b .ct-line, .ct-series-b .ct-point, .ct-series-b .ct-slice-donut {
    stroke: #fff;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
}

.ct-grid {
  stroke: #fff;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
}

.ct-chart {
  padding:20px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
}

.second-chart{
  background: linear-gradient(60deg,#ef5350,#e53935)!important;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
  border-radius: 4px;
}
.ct-label .ct-vertical .ct-start {
  stroke: #fff;
}
.ct-label {
    fill: #fff;
    color: #fff;
}
  * {
    margin: 0;
    padding: 0;
    outline: 0;

    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }
/*
  html, body {
    height: 100%;
  }

  #root {
     min-height: 100%;
   } */

  body {
    -webkit-font-smoothing: antialiased;
    background: #eee;
  }

  body, input, button {
    /* font: 14px 'Roboto', sans-serif; */
    font-family: Roboto,sans-serif;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
