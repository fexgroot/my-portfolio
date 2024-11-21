import * as Icon from "react-feather";
import Button from "../components/Button";

export default function Projects() {
  return (
    <div className="dark:text-sec flex flex-col gap-4 lg:max-w-[50%]">
      <h2>My work</h2>
      <p>
        Here are a few projects I’ve worked on recently. They showcase my skills
        and experience with React, Vue, Tailwind CSS, Python and more.
      </p>
      <Button href="https://github.com/fexgroot" className={"px-4 py-2"}>
        <Icon.GitHub strokeWidth={1.5} />
        GitHub
      </Button>
    </div>
  );
}
