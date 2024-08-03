import React from "react";

function ProjectCard({ image, title, isJavaProject, description, codeLink }) {
  return (
    <div className="relative p-4 transform transition-transform sm:hover:scale-105 hover:opacity-80">
      <div className="w-full h-36 sm:h-48 lg:h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 hover:opacity-100 text-white p-4">
        <div className="text-xs font-normal mb-2">{description}</div>
        {codeLink && (
          <a 
            href={codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          >
            Check It Out
          </a>
        )}
      </div>
      <div className="font-light mt-2">{title}</div>
    </div>
  );
}

export default ProjectCard;
