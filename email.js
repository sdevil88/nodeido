"use strict";
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'wwwghimiresagar88@gmail.com',
    pass: 'gsdkfggfdoirn'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main(sender,data,htmlFile) {
    const html = await readFile(htmlFile,"utf8");
  // send mail with defined transport object
  const template = handlebars.compile(html);
  

const htmlToSend = template(data);

 const info = await transporter.sendMail({
    from: '"myname" <mymail@gmail.com>',
    to: sender.toString(),
    subject: "hello",
    html: htmlToSend,
 });
  console.log("message sent: %s", info.messageId);

//email  f
  
}

const data={
    name: "send name",
    p_name: "google",
    link: "https://accounts.google.com/signin/v2/recoveryidentifier?flowName=GlifWebSignIn&flowEntry=AccountRecovery",
    hi: "hello welcome",

};

const htmlFile = "template.html"
const sender = ["wwwgsender.com","sender@gmail.com"];
main(sender, data,htmlFile).catch(console.error);

