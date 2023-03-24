import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center mx-32 my-5 gap-10">
      <img
        width={150}
        src="https://pwskills.com/images/PWSkills-main.png"
        alt="logo"
      />
      <input
        className="w-8/12 border border-gray-400 px-8 py-3 rounded-md "
        type="text"
        placeholder="What do you want to learn?"
      />
      <button className="bg-blue-800 text-white px-8 py-3 rounded-md">
        Login / Register
      </button>
    </header>
  );
}
