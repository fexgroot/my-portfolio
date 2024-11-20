import Button from "../components/Button";

export default function Library() {
  return (
    <div className="flex max-w-[50%] flex-col gap-4">
      <h2>What we make</h2>
      <p>
        We create digital products that help businesses grow. Our services
        include web design, web development, and digital marketing.
      </p>
      <Button>Learn more</Button>
    </div>
  );
}
