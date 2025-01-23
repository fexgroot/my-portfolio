import Button from "../components/Button";
import PageLink from "../components/PageLink";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 dark:text-sec lg:max-w-[50%]">
      <h2>Hi there!</h2>
      <p>I'm Felix. Welcome to my portfolio site.</p>
      <Button>
        <PageLink href="/about" className={"px-4 py-2"}>
          Keep reading
        </PageLink>
      </Button>
    </div>
  );
}
