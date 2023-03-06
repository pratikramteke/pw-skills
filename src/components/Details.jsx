import React from "react";
import DetailsCard from "./DetailsCard";

export default function Details() {
  const details = [
    {
      src: "https://pwskills.com/images/landing-page/statistics/books-icon.svg",
      count: "600+",
      names: "Different Courses",
    },
    {
      src: "https://pwskills.com/images/landing-page/statistics/student-icon.svg",
      count: "700000+",
      names: "Students Enrolled",
    },
    {
      src: "https://pwskills.com/images/landing-page/statistics/credit-card-icon.svg",
      count: "1000+",
      names: "Successful Transition",
    },
  ];

  return (
    <div className="my-20">
      <h1 className="text-center my-10 text-5xl text-blue-800 font-bold">
        "Pure Hardwork, No Shortcuts!"
      </h1>
      <hr className="w-32 mx-auto border-2 bg-yellow-400 border-yellow-400 mt-14" />
      <div className="flex justify-around items-center">
        {details.map((card) => (
          <DetailsCard
            key={card.src}
            src={card.src}
            count={card.count}
            names={card.names}
          />
        ))}
      </div>
    </div>
  );
}
