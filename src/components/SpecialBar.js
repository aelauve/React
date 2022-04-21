import React from "react";
const ReactHighcharts = require("react-highcharts");

// Refer the high charts "https://www.highcharts.com/demo/bar-basic" for more information

const SpecialBar = (props) => {
  const config = {
    chart: {
      type: "column",
    },
    title: {
      text: props.title,
    },
    xAxis: {
        categories: ['Total'],
        title: {
            text: null
        }
    },
    yAxis: {
      min: 0,
      title: {
        text: props.dataType,
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Issues: <b>{point.y} </b>",
    },
    series: [
      {
        name: props.title,
        data: [props.data],
        // dataLabels: {
        //   enabled: true,
        //   rotation: -90,
        //   color: "#FFFFFF",
        //   align: "right",
        //   format: "{point.y}", // one decimal
        //   y: 10, // 10 pixels down from the top
        //   style: {
        //     fontSize: "13px",
        //     fontFamily: "Verdana, sans-serif",
        //   },
        // },
      },
    ],
  };
  return (
    <div>
      <ReactHighcharts config={config}></ReactHighcharts>
    </div>
  );
};

export default SpecialBar;