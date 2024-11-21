import * as Icon from "react-feather";
import { Tooltip } from "react-tooltip";
import Button from "./Button";

const darkMode = localStorage.getItem("theme") === "dark";

const ProjectLink = ({ title, imageUrl, githubUrl, liveUrl }) => {
  return (
    <div className="project-link dark:bg-primary group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md dark:border-gray-700">
      {/* Project Image */}
      <img
        src={imageUrl}
        alt={title}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay Title (can use pointer-events-none)*/}

      {/* ! TODO: put img in public folder because its not visible on live site.... and users should be allowed to view it riht? with right click view. and then it'll go to /slate.webp or/orange.webp */}

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>

      {/* Button Section */}
      <div className="flex justify-between gap-2 p-4">
        <Button
          data-tooltip-id="github"
          data-tooltip-content="View on GitHub"
          data-tooltip-variant={darkMode ? "light" : "dark"}
          href={githubUrl}
          target="_blank"
          className="rounded-full p-2"
        >
          <Icon.GitHub />
        </Button>
        <Button
          href={liveUrl}
          target="_blank"
          className="flex items-center gap-1 rounded-md border border-blue-500 bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
        >
          <Icon.ExternalLink />
          Visit
        </Button>
        <Tooltip id="github" />
      </div>
    </div>
  );
};

export default ProjectLink;
