import React from 'react'
import DetailsCard from './DetailsCard';

export default function Products() {
  const details = [
    {
      src: "https://pwskills.com/images/landing-page/products/neurolab-icon.svg",
      names: "PW Skills Lab",
      detail: "Supercharge your project development with our robust lab.",
    },
    {
      src: "https://pwskills.com/images/landing-page/products/jobPortal-icon.svg",
      names: "Job Portal",
      detail:
        "Use exceptional templates for a stand-out resume minus the sign up process.",
    },
    {
      src: "https://pwskills.com/images/landing-page/products/Internship-icon.svg",
      names: "Experience Portal",
      detail:
        "PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects.",
    },
    {
      src: "https://pwskills.com/images/landing-page/products/affilitatePortal-icon.svg",
      names: "Become an affiliate",
      detail:
        "Explore affiliate marketing opportunities with PW Skills and attain financial freedom.",
    },
    {
      src: "https://pwskills.com/images/landing-page/products/halloffame-icon.svg",
      names: "Hall of fame",
      detail:
        "Our student placements and 100K+ career transitions speak volumes about our courses.",
    },
  ];
  return (
    <div className='my-40'>
      <h2 className="text-center my-20 text-5xl text-blue-800 font-bold">
        Our Products
      </h2>
      <div className="flex gap-20 items-center justify-center flex-wrap">
        {details.map((card) => (
          <div className="flex flex-col gap-4 items-center justify-center w-80 h-80">
            <img className="w-50 h-40" src={card.src} alt="" />
            <h1 className="my-8 font-bold text-2xl">{card.names}</h1>
            <h2 className=" text-lg text-gray-500 text-center">{card.detail}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
