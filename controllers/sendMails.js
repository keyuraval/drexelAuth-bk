const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    res.send("I'm sending mail.");

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'melisa.farrell7@ethereal.email',
            pass: 'pG7PYNabCQq6ZBWx2P'
        }
    });

    let info = await transporter.sendMail({
        from: '"Drexel Bot 👻" <raval@gmail.comm>', // sender address
        to: "keyurper@gmail.com", // list of receivers
        subject: "test email✔", // Subject line
        text: "Drexel Check ", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    res.json(info);

}

module.exports = sendMail;