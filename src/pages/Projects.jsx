import * as Icon from "react-feather";
import Button from "../components/Button";
import ProjectLink from "../components/Projectlink";

export default function Projects() {
  return (
    <>
      <div className="dark:text-sec flex flex-col gap-4 lg:max-w-[50%]">
        <h2>My work</h2>
        <p>
          Here are a few projects I’ve worked on recently. They showcase my
          skills and experience with React, Vue, Tailwind CSS, Python and more.
        </p>
        <Button
          href="https://github.com/fexgroot"
          target="_blank"
          className={"px-4 py-2"}
        >
          <Icon.GitHub strokeWidth={1.5} />
          GitHub
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectLink title="Project 1" imageUrl="/src/img/slate.webp" />
        <ProjectLink title="Project 2" imageUrl="/src/img/orange.webp" />
        <ProjectLink title="Project 3" imageUrl="/src/img/slate.webp" />
        <ProjectLink title="Project 4" imageUrl="/src/img/orange.webp" />
      </div>
    </>
  );
}
