const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "meesam@compunneldigital.com",
      pass: "abcd@1234567",
    },
  });

let options = {
    from: 'meesam@compunneldigital.com',
    subject: "Ticket master password", 
  }

  export const sendEail = async(to:string, html:string)=>{
    let info = await transporter.sendMail({...options,to,html});
    console.log('info ', info);
  }
  