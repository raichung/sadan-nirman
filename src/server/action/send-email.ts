"use server";

import { createTransport } from "nodemailer";

import { env } from "@/env.mjs";

const transporter = createTransport({
  // @ts-expect-error Property 'MAILER_HOST' does not exist
  host: env.MAILER_HOST,
  port: env.MAILER_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: env.MAILER_AUTH_USER,
    pass: env.MAILER_AUTH_PASS,
  },
});

const sendContactEmail = async ({
  value,
}: {
  value: Record<string, string>;
}) => {
  try {
    await transporter.sendMail({
      from: `"Messenger 👻" <${env.MAILER_RECEIVER}>`, // sender address
      to: env.MAILER_RECEIVER, // list of receivers
      subject: "Client Message ✔", // Subject line
      html: `Hello, <br> ${Object.keys(value)
        .map((key) => `${key.replace(/_/g, " ").toUpperCase()}: ${value[key]}`)
        .join("<br>")}`,
      headers: {
        "X-Entity-Ref-ID": `${new Date().getTime()}`,
      },
    });

    return {
      success: true,
      error: false,
    };
  } catch (error) {
    return {
      success: false,
      error: true,
    };
  }
};

export default sendContactEmail;
