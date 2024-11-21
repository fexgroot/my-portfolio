import ProjectLink from "../components/ProjectLink";

export default function Projects() {
  return (
    <div>
      <div className="dark:text-sec flex flex-col gap-4 lg:max-w-[50%]">
        <h2>My work</h2>
        <p>
          Here are a few projects I’ve worked on recently. They showcase my
          skills and experience with React, Vue, Tailwind CSS, Python and more.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectLink
          title="Project 1"
          imageUrl="/src/img/slate.webp"
          githubUrl="https://github.com/fexgroot/project-1"
          liveUrl="https://project-1-live-site.com"
        />
        <ProjectLink
          title="Project 2"
          imageUrl="/src/img/orange.webp"
          githubUrl="https://github.com/fexgroot/project-2"
          liveUrl="https://project-2-live-site.com"
        />
        <ProjectLink
          title="Project 3"
          imageUrl="/src/img/slate.webp"
          githubUrl="https://github.com/fexgroot/project-3"
          liveUrl="https://project-3-live-site.com"
        />
        <ProjectLink
          title="Project 4"
          imageUrl="/src/img/orange.webp"
          githubUrl="https://github.com/fexgroot/project-4"
          liveUrl="https://project-4-live-site.com"
        />
      </div>
    </div>
  );
}
