import { personalInfo } from "../data/personalInfo";

export function sendContactMessage({ name, email, message }) {
  const subject = `Portfolio enquiry from ${name}`;

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const mailtoUrl = new URL(`mailto:${personalInfo.email}`);
  mailtoUrl.searchParams.set("subject", subject);
  mailtoUrl.searchParams.set("body", body);

  window.location.href = mailtoUrl.toString();
}
