require("dotenv").config();
const PASSWORD = process.env.password;

export default async (req, res) => {
  console.log(req.body);

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "avery@averyellisinteriors.com",
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "avery@averyellisinteriors.com",
    to: "avery@averyellisinteriors.com",
    subject: `AE Interiors Project Inquiry Form`,
    html: `
    <div><strong>Project type:</strong></div>
    <div>${req.body.projectType}</div>
    <br>
    <div><strong>Location:</strong></div>
    <div>${req.body.location}</div>
    <br>
    <div><strong>Description:</strong></div>
    <div>${req.body.description}</div>
    <br>
    <div><strong>Services Needed:</strong></div>
    <div>${req.body.services}</div>
    <br>
    <div><strong>Customer Info:</strong></div>
    <div>${req.body.name}</div>
    <div>${req.body.email}</div>
    <div>${req.body.phone}</div>
    <div>${req.body.about}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: `Oops, something went wrong... Email me at avery@averyellisinteriors.com.`,
      });
    } else {
      console.log(info);
      return res.status(201).json({ error: null });
    }
  });
};
