import Button from "../components/Button";
import PageLink from "../components/PageLink";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 dark:text-sec lg:max-w-[50%]">
      <h2>Hi there!</h2>
      <p>
        I’m a software developer who specializes in building web applications
        with React and Tailwind CSS. I’m passionate about creating delightful
        user experiences and solving complex problems with simple solutions.
      </p>
      <Button>
        <PageLink href="/about" className={"px-4 py-2"}>
          Learn more
        </PageLink>
      </Button>
    </div>
  );
}
