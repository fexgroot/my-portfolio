import * as Icon from "react-feather";
import Button from "./Button";

const darkMode = localStorage.getItem("theme") === "dark";

const ProjectLink = ({ title, imageUrl, githubUrl }) => {
  return (
    <div className="project-link dark:bg-primary relative flex flex-col overflow-hidden border-2 border-pri bg-sec dark:border-sec dark:bg-pri">
      <img
        src={imageUrl}
        alt={title}
        className="h-64 w-full select-none border-b-2 border-pri object-cover transition-transform duration-300"
        draggable="false"
      />
      <div className="flex items-center justify-between gap-2 p-2">
        <h3 className="select-none text-lg font-medium dark:text-sec">
          {title}
        </h3>
        <Button
          data-tooltip-id="github"
          data-tooltip-content="View on GitHub"
          data-tooltip-variant={darkMode ? "light" : "dark"}
          href={githubUrl}
          target="_blank"
          className="rounded-full p-2"
        >
          <Icon.GitHub strokeWidth={1.5}/>
        </Button>
      </div>
    </div>
  );
};

export default ProjectLink;
