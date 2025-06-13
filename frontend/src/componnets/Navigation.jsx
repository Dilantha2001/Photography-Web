import React from "react";

function Navigation() {
  return (
    <nav className="bg-[#ebeaea] h-[180px] w-full flex items-center justify-center font-poppins">
      <ul className="md:flex justify-between gap-12 hidden text-xl font-normal cursor-pointer">
        <li className="border-r border-black pr-10 hover:underline">Home</li>
        <li className="border-r border-black pr-10 hover:underline">About</li>
        <li className="border-r border-black pr-10 hover:underline">
          Portfolio
        </li>
        <li className="border-r border-black pr-10 hover:underline">
          Experiences
        </li>
        <li className="border-r border-black pr-10 hover:underline">Journal</li>
        <li className="hover:underline">Inquire</li>
      </ul>
    </nav>
  );
}

export default Navigation;
