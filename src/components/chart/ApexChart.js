// import ReactApexChart from 'react-apexcharts';
// import {Component} from 'react';
// import React from 'react';


// import './ApexChart.scss'

// class ApexChart extends Component {
//     constructor(props) {
//       super(props);

//       this.state = {
      
//         series: [44, 55, 67, 83],
//         options: {
//           chart: {
//             height: 350,
//             type: 'radialBar',
//           },
//           plotOptions: {
//             radialBar: {
//               dataLabels: {
//                 name: {
//                   fontSize: '22px',
//                 },
//                 value: {
//                   fontSize: '16px',
//                 },
//                 total: {
//                   show: true,
//                   label: 'Total',
//                   formatter: function (w) {
//                     // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
//                     return 249
//                   }
//                 }
//               }
//             }
//           },
//           labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
//         },
      
      
//       };
//     }

  

//         render() {
//             return (
                

//                 <div id="chart">
//                 <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
//                 </div>
//             )
//     }
// }
// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);

// export default ApexChart;