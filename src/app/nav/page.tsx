"use client";

import { useState } from "react";

export default function Home() {
  const [links, setLinks] = useState([
    {
      selected: true,
      label: "Packages",
    },
    {
      selected: false,
      label: "Github",
    },
    {
        selected: false,
        label: "Extras",
      },
  ]);

  const handleClick = (index: any) => {
    const updatedLinks = links.map((link, i) => ({
      ...link,
      selected: i === index,
    }));
    setLinks(updatedLinks);
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex h-12 w-auto border-b border-b-white/10">
        {links.map((link, index) => (
          <a
            key={index}
            onClick={() => handleClick(index)}
            className={`w-24 h-12 flex items-center justify-center ${
              link.selected ? "border-b-2 border-b-white" : ""
            }`}
          >
            <span className="duration-200 transition-all ease-in-out cursor-pointer hover:bg-white/10 rounded-lg w-full py-1 flex justify-center items-center">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
