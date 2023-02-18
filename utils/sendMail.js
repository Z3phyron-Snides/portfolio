const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
const asyncHandler = require("express-async-handler");

const SendMail = asyncHandler(async (email, subject, message) => {
  // Send email to the receiver
  let msg = {
    to: "z3phyrondevs@gmail.com", // Change to your recipient
    from: email, // Change to your verified sender
    subject: `${subject}`,
    text: message,
    html: `
      <h1>Email from ${email}</h1>
      <h3>${subject}</h3>
      <p>${message}</p>
    `,
  };
  try {
    const sendMail = await sgMail.send(msg);
    // console.log("mail sent successfully", sendMail);
  } catch (error) {
    // console.log("Email not sent");
    throw new Error(error);
  }

  // Send a response email to the sender
  let response_msg = {
    to: email,
    from: "z3phyrondevs@gmail.com",
    subject: "Thank you for contacting us",
    text: "We have received your message and will get back to you soon.",
    html: `
      <p>Dear Customer,</p>
      <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
      <p>Best regards,</p>
      <p>z3phyrondevs</p>
    `,
  };
  try {
    await sgMail.send(response_msg);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  SendMail,
};
