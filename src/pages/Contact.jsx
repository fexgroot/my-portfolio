import * as Icon from 'react-feather';
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="flex max-w-[50%] flex-col gap-4">
      <h2>Get in touch</h2>
      <p>
        We’d love to hear from you! Whether you have questions, feedback, or
        just want to say hi, feel free to reach out.
      </p>
      <Button href="mailto:contact@my-portfolio.com">
        <Icon.Mail strokeWidth={1.5}/>
        Send an email
      </Button>
    </div>
  );
}
