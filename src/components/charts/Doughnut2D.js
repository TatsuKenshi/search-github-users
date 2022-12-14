// STEP 1 - Include Dependencies
// Include react
import React, { useContext } from "react";
import { GithubContext } from "../../context/context";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//
// // // Component overhaul
//

// Step 2 containing the chartData object is removed

// Step 3 is changed

// the chartComponent function receives the data prop from the Repos.js component, containing the data to be displayed in the chart
// // it replaces the chartData object

// inside the function we have chartConfigs object

// Step 4 is removed

// instead of Step 4, the chartComponent function returns the ReactFC component with spread out chartConfigs object as the sole prop.

const ChartComponent = ({ data }) => {
  const { chartSize } = useContext(GithubContext);
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: chartSize, // Width of the chart
    height: chartSize, // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars per language",
        theme: "candy",
        decimals: 0,
        doughnutRadius: "35%",
        showPercentValues: 0,
      },
      // below is the data prop
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
