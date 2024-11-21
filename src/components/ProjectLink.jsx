import React from "react";

const ProjectLink = ({ title, imageUrl }) => {
  return (
    <div className="project-link relative h-48 w-96 min-w-[] p-4">
      <a
        href="#"
        className="flex h-full flex-col items-center justify-center gap-2"
      >
        <img
          src={imageUrl}
          alt={title}
          className="project-image h-48 w-full object-cover"
        />
        <h3 className="project-title absolute bottom-0 w-full bg-black bg-opacity-50 py-1 text-center text-white">
          {title}
        </h3>
      </a>
    </div>
  );
};

export default ProjectLink;
