import React from "react";
import { GithubContext } from "../context/context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./charts";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  // // // // // // // // // // // // // // // // // // //
  // //  language occurences and stars per language  // //
  // // // // // // // // // // // // // // // // // // //

  const languages = repos.reduce((total, item) => {
    // destructure language, stargazers_count props from the item object

    // if language prop is null, return

    // if the language doesn't exist in the total object
    // create its object with value: 1
    // // total[language] object has 3 props
    // // {label: language, value: 1, stars: stargazers_count}
    // // // // // /// //
    // else add 1 to the existing object's value prop
    // // spread the total[language] object
    // // and add 1 to total[language].value
    // // add to stars whatever is in the stargazers_count prop

    const { language, stargazers_count } = item;

    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }

    return total;
  }, {});

  // get top 5 most popular languages
  // Pie3D chart
  // turn the object into an array
  // sort by value property
  const mostUsed = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // calculate stars per language
  // Doughnut2D chart
  // turn the object into an array
  // sort by stars property
  // map stars values to value props
  // because chart is looking for the value property

  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  // // // // // // // // // // // // // // //
  // //  stars per repo, forks per repo  // //
  // // // // // // // // // // // // // // //

  // reduce stars and forks per repo from repos array
  // result: object containing 2 objects - stars and forks

  let { stars, forks } = repos.reduce(
    (total, item) => {
      // destructure stargazers_count, name, forks from repo

      // make total.stars object for each repo w/stargazers_count prop
      // // props label:name and value:stargazers_count

      // make total.forks object for each repo w/forks prop
      // // props label:name and value:forks

      // return total

      const { stargazers_count, name, forks } = item;

      total.stars[stargazers_count] = { label: name, value: stargazers_count };

      total.forks[forks] = { label: name, value: forks };

      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  // get top 5 starred and forked repos
  // turn the object into an array, both stars and forks
  // slice the last 5 items and reverse the array

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  console.log(forks);
  return (
    <section className="section">
      <div className="section-center">
        <div style={{ display: "flex" }}>
          <Pie3D data={mostUsed} />
          <Column3D data={stars} />
        </div>
        <div style={{ display: "flex" }}>
          <Doughnut2D data={mostPopular} />
          <Bar3D data={forks} />
        </div>
      </div>
    </section>
  );
};

export default Repos;
