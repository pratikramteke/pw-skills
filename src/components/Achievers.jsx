import React from "react";

export default function Achievers() {
  const companies = [
    "https://pwskills.com/images/landing-page/companies/thermo-fisher.png",
    "https://pwskills.com/images/landing-page/companies/servify.png",
    "https://pwskills.com/images/landing-page/companies/unilog.png",
    "https://pwskills.com/images/landing-page/companies/useready.png",
    "https://pwskills.com/images/landing-page/companies/versatile.png",
  ];

  return (
    <div className="py-10 bg-gray-200 text-center text-5xl text-blue-800 font-bold">
      <h2 className="text-center">Our Achiever's Work With</h2>
      <div className="flex justify-around mt-20">
        {companies.map((images) => (
          <img width={150} src={images} />
        ))}
      </div>
    </div>
  );
}
