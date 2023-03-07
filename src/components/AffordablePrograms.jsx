import React from 'react'

export default function AffordablePrograms({programs}) {
  return (
    <div className="my-10">
      <h2 className="text-center my-10 text-5xl text-blue-800 font-bold">
        Affordable Programs
      </h2>
      <p className="text-center text-gray-500 text-lg">
        Find your favourite courses in pocket-friendly ways.
      </p>
      <div className="flex justify-around my-10">
        {programs.map((card) => (
          <div className="shadow-xl rounded-lg border m-10  flex flex-col gap-6  p-10">
            <img width={300} src={card.src} alt="" />
            <h3 className="text-blue-800 font-semibold text-xl">
              {card.courseName}
            </h3>
            <h4>{card.teacher}</h4>
            <h4 className="font-semibold text-md">{card.price}</h4>
          </div>
        ))}
      </div>
      <h3 className="text-center text-gray-500 font-semibold">View More</h3>
    </div>
  );
}
