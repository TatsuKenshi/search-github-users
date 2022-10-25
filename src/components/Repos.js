import React from "react";
import { GithubContext } from "../context/context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./charts";

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
        <div>
          <Pie3D data={chartData} />
          <Column3D />
        </div>
        <div>
          <Bar3D />
          <Doughnut2D />
        </div>
      </div>
    </section>
  );
};

export default Repos;
