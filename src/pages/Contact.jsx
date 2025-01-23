import * as Icon from "react-feather";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 dark:text-sec lg:max-w-[50%]">
      <h2>Get in touch</h2>
      <p>
        If you’d like to chat about a project, feel free to send me an email.
        I’ll get back to you as soon as possible!
      </p>
      <Button href="mailto:fnagy@st.noorderpoort.nl?subject=Project Inquiry" className={"px-4 py-2"}>
        <Icon.Mail strokeWidth={1.5} />
        Send an email
      </Button>
    </div>
  );
}
