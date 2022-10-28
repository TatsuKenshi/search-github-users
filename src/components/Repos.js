import React from "react";
import { GithubContext } from "../context/context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./charts";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  //  calculate language occurences (reduce)
  let languages = repos.reduce((total, item) => {
    const { language } = item;

    // if language prop is null, return

    // if the value doesn't exist in the total object
    // create its object with value 1
    // // total[language] has two props: label and value
    // // {label: language, value: 1}

    // else add 1 to the existing object's value prop
    // // spread the total[language] object
    // // and add 1 to total[language].value

    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }

    return total;
  }, {});

  // get top 5 most popular languages
  // turn the object into an array
  // sort by value property
  languages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <section className="section">
      <div className="section-center">
        <div>
          <Pie3D data={languages} />
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
