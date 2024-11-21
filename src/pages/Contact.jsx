import * as Icon from "react-feather";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="dark:text-sec flex max-w-[50%] flex-col gap-4">
      <h2>Get in touch</h2>
      <p>
        If you’d like to chat about a project or need help with something, feel
        free to send me an email. I’ll get back to you as soon as possible!
      </p>
      <Button href="mailto:contact@my-portfolio.com">
        <Icon.Mail strokeWidth={1.5} />
        Send an email
      </Button>
    </div>
  );
}
