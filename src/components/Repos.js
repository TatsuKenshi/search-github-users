import React from "react";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./charts";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  console.log(repos);

  // STEP 2 - Chart Data
  const chartData = [
    {
      label: "HTML",
      value: "13",
    },
    {
      label: "CSS",
      value: "60",
    },
    {
      label: "Javascript",
      value: "80",
    },
  ];

  return (
    <section className="section">
      <div className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={chartData} />
      </div>
    </section>
  );
};

export default Repos;
