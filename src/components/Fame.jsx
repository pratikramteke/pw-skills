import React from "react";
import FameCard from "./FameCard";

export default function Fame() {
  const people = [
    {
      image:
        "https://hall-of-fame-cdn.pwskills.com/profilePictures/637c4c193bf26a001a4ea4e7.jpeg",
      name: "Dharmendra Kumar Yadav",
      company: "Congnizant,Data Scientist Associate",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      link: "",
    },
    {
      image:
        "https://hall-of-fame-cdn.pwskills.com/profilePictures/636cb9f23bf26a001a4a7239.jpeg",
      name: "Gaurav Varma",
      company: "Biocube Matrics Pvt Ltd, Assistant Manager Data Analyst",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      link: "",
    },
    {
      image:
        "https://hall-of-fame-cdn.pwskills.com/profilePictures/6384d4393bf26a001a510fcd.jpeg",
      name: "Sunil Ramesh Doddamani",
      company: "Epsilion, Statistician 2",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
    },
  ];

  return (
    <div className="my-10">
      <h2 className=" text-center my-10 text-5xl text-blue-800 font-bold">
        Hall of fame
      </h2>
      <div className="flex justify-around">
        {people.map((card) => (
          <FameCard
            image={card.image}
            name={card.name}
            company={card.company}
            bio={card.bio}
            link={card.link}
          />
        ))}
      </div>
      <h3 className="text-center text-gray-500 font-semibold">View More</h3>
    </div>
  );
}
