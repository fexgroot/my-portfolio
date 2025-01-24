import * as Icon from "react-feather";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 dark:text-sec">
      {/* Header Section */}
      <div className="flex flex-col gap-4 lg:max-w-[50%]">
        <h2>Get in Touch</h2>
        <p>
          Whether you’d like to collaborate on a project, discuss opportunities,
          or just say hi, feel free to reach out. I'll get back to you as soon
          as I can!
        </p>
        <Button
          href="mailto:fnagy@st.noorderpoort.nl?subject=Project Inquiry"
          className="mt-4 flex items-center gap-2 px-4 py-2"
        >
          <Icon.Mail strokeWidth={1.5} />
          Send an email
        </Button>
      </div>

      <hr className="my-12 border border-pri dark:border-sec" />

      {/* Contact Form Section */}
      <div className="flex flex-col gap-4 lg:max-w-[50%]">
        <h2>Leave a message</h2>
        <form
          action="https://formsubmit.co/your-email-here"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-pri bg-opacity-10 text-pri border-2 border-pri p-3 focus:outline-none dark:border-sec dark:bg-pri dark:text-sec"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-pri bg-opacity-10 text-pri border-2 border-pri p-3 focus:outline-none dark:border-sec dark:bg-pri dark:text-sec"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-pri bg-opacity-10 text-pri border-2 border-pri p-3 focus:outline-none dark:border-sec dark:bg-pri dark:text-sec"
          />
          <Button type="submit" className="px-4 py-2">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
