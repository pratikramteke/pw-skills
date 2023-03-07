import React from "react";
import AffordablePrograms from "./AffordablePrograms";
import CommunityPrograms from "./CommunityPrograms";
import PopularPrograms from "./PopularPrograms";

export default function Programs() {
  const programs = [
    {
      src: "https://cdn.pwskills.com/assets/uploads/thumbnails/63a2ecdd88994300d47eb9ad.jpg",
      courseName: "Full Stack Web Development",
      teacher: "Anurag Tiwari",
      price: "$2975.00",
    },
    {
      src: "https://cdn.pwskills.com/assets/uploads/thumbnails/63a2ea7e8899438ee77eae5a.jpg",
      courseName: "Data Science Masters",
      teacher: "Krish Naik",
      price: "$2975.00",
    },
    {
      src: "https://cdn.pwskills.com/assets/uploads/thumbnails/63a2f0198899433e697ec2ac.jpg",
      courseName: "Java with DSA and System Design",
      teacher: "Priya Bhatia",
      price: "$2975.00",
    },
  ];

  return (
    <div>
      <PopularPrograms programs={programs} />
      <AffordablePrograms programs={programs} />
      <CommunityPrograms />
    </div>
  );
}
