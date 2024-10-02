"use client";

import { useState } from "react";
import CloseIcon from "@/components/CloseIcon";

const projects = [
  { id: 1, name: "Project Alpha" },
  { id: 2, name: "Project Beta" },
  { id: 3, name: "Project Gamma" },
  { id: 4, name: "Project Delta" },
];

export default function Home() {
  // Estado para manejar la visibilidad del menú
  const [isMenuOpen, setMenuOpen] = useState(false);
  // Estado para manejar el texto de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para alternar el menú
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Función para manejar el cambio en el input de búsqueda
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar proyectos según el texto de búsqueda
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="relative flex flex-col">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md max-w-max"
          onClick={toggleMenu}
        >
          Open Menu
        </button>

        {isMenuOpen && (
          <div className={`absolute z-10 bg-[#1b1b1b] rounded-lg border border-white/10 mt-12 w-[340px] transition-all duration-300 ease-in-out 
              transform ${isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>
            <div className="p-2 flex-col">
              <div className="text-white items-center justify-between mb-2 flex w-full py-auto">
                <p className="px-1 text-[16px] font-semibold">
                  Select your projects
                </p>
                <div
                  className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-white/10 duration-200 transition-all ease-in-out cursor-pointer"
                  title="close"
                  onClick={toggleMenu}
                >
                  <CloseIcon />
                </div>
              </div>
              <input
                className="px-2 text-[14px] bg-[#171616] text-white p-[3px] border border-white/10 w-full rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
                placeholder="Find projects..."
                value={searchTerm}
                onChange={handleSearchChange} // Maneja el cambio en el input de búsqueda
              />
            </div>
            <div className="h-[1px] w-full bg-white/10" />
            <div className="flex flex-col">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div key={project.id} className="text-white m-1 rounded-lg py-1 px-3 hover:bg-white/10">
                    {project.name}
                  </div>
                ))
              ) : (
                <div className="p-2 flex items-center justify-center w-full h-16">
                  <p className="text-white/70">No projects found</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
