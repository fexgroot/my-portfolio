import Button from "../components/Button";

export default function Home() {
  return (
    <div className="dark:text-sec flex flex-col gap-4 lg:max-w-[50%]">
      <h2>About me</h2>
      <p>
        I’m a software developer who specializes in building web applications
        with React and Tailwind CSS. I’m passionate about creating delightful
        user experiences and solving complex problems with simple solutions.
      </p>
      <Button className={"px-4 py-2"}>Learn more</Button>
    </div>
  );
}
