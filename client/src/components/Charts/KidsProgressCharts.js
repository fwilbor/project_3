import React from "react";
import NavBar from "../NavBar";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
  } from "reactstrap";
  // core components
  import PanelHeader from "../PanelHeader/PanelHeader";
  class KidsProgressCharts extends React.Component {
    render() {
        function hexToRGB(hex, alpha) {
            var r = parseInt(hex.slice(1, 3), 16),
              g = parseInt(hex.slice(3, 5), 16),
              b = parseInt(hex.slice(5, 7), 16);
            if (alpha) {
              return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
            } else {
              return "rgb(" + r + ", " + g + ", " + b + ")";
            }
          }
          // ##############################
    // // // general variables for charts
    // #############################
    const chartColor = "#FFFFFF";
    // General configuration for the charts with Line gradientStroke
    const gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [
          {
            display: 0,
            ticks: {
              display: false,
              maxTicksLimit: 7
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }
        ],
        xAxes: [
          {
            display: 0,
            ticks: {
              display: false
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }
        ]
      },
      layout: {
        padding: { left: 0, right: 0, top: 15, bottom: 15 }
      }
    };
    }
}