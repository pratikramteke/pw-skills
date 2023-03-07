import React from 'react'

export default function CommunityPrograms() {
  const programs = [
    {
      src: "https://cdn.pwskills.com/assets/uploads/thumbnails/63f6f3b4a9d3a25d2eb43ba3.jpg",
      courseName: "Stock Market Fundamentals",
      teacher: "Kanan Bahl",
      price: "FREE",
    },
    {
      src: "https://cdn.pwskills.com/assets/uploads/thumbnails/63a0bfb680762882188f490b.jpg",
      courseName: "Business Analytics Foundation",
      teacher: "Gopal Sharma",
      price: "FREE",
    },
    {
      src: "https://cdn.pwskills.com/assets/uploads/thumbnails/63a0ba6180762892138f404f.jpg",
      courseName: "C++ Foundation",
      teacher: "Urvi Goel",
      price: "FREE",
    },
  ];
  
  return (
    <div>
      <div className="my-10">
        <h2 className="text-center my-10 text-5xl text-blue-800 font-bold">
          Community Programs
        </h2>
        <p className="text-center text-gray-500 text-lg">
          Open to all pro-live classes on Youtube for free.
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
    </div>
  );
}
