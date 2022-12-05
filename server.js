

require('dotenv').config();


const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const EMAIL_USER = process.env.REACT_APP_EMAIL_USER;
const EMAIL_PASS = process.env.REACT_APP_EMAIL_PASS;


// Añadir Servicio de Cloud para que ejecute siempre este script heroku start?
// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(EMAIL_USER);
console.log(EMAIL_PASS);


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "paulomllanos@gmail.com",
    pass: "nssxtpihmerovzqi"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "paulomllanos@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});