import Button from "../components/Button";
import PageLink from "../components/PageLink";
import ProjectLink from "../components/ProjectLink";

export default function Home() {
  return (
    <div className="dark:text-sec">
      {/* Intro Section */}
      <div className="flex flex-col gap-4 lg:max-w-[50%]">
        <h2>Hi there!</h2>
        <p>
          I'm Felix, a passionate developer, designer, and writer. Welcome to my
          portfolio site, where I showcase my work and share a bit about myself.
          I love creating things, from cozy games to intriguing stories. Stick
          around, and let’s connect!
        </p>
        <Button>
          <PageLink href="/about" className="px-4 py-2">
            Keep reading
          </PageLink>
        </Button>
      </div>

      <hr className="my-12 border border-pri dark:border-sec" />

      {/* Featured Work */}
      <div className="mt-12">
        <h2>
          Featured Work{" "}
          <span className="select-none text-sm lowercase text-gray-600 dark:text-gray-400">
            - Updated 2024
          </span>
        </h2>
        <p className="mt-2 text-lg">
          Check out some of my recent projects. These highlight my skills in
          development, design, and problem-solving.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </div>
    </div>
  );
}
