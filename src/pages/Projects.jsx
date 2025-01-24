import ProjectLink from "../components/ProjectLink";

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col gap-4 dark:text-sec lg:max-w-[50%]">
        <h2>My work</h2>
        <p>
          Here are a few projects I’ve worked on recently. They showcase my
          skills and experience with Vue, Tailwind CSS, Python and more.
        </p>
        <p>
          Feel free to visit the each project by clicking on the GitHub icon.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ProjectLink
          title="Grumpy Tasks"
          imageUrl="img/grumpy-tasks.png"
          githubUrl="https://github.com/fexgroot/grumpy-tasks"
        />
        <ProjectLink
          title="Tasker"
          imageUrl="img/tasker.png"
          githubUrl="https://github.com/fexgroot/tasker"
        />
      <ProjectLink
        title="Project Alpha"
        imageUrl="img/orange.webp"
        githubUrl="https://github.com/fexgroot/project-alpha"
      />
      <ProjectLink
        title="Project Beta"
        imageUrl="img/slate.webp"
        githubUrl="https://github.com/fexgroot/project-beta"
      />
      </div>
    </div>
  );
}
