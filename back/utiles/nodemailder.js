import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import { dirname } from 'path';

const __dirname = dirname(__filename);

const { EMAIL_USER, EMAIL_PASS, EMAIL_HOST, EMAIL_PORT, EMAIL_FROM, URL_FRONTEND } = process.env;
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

const options = {
  viewEngine: {
    layoutsDir: (__dirname, "./views/layouts"),
    extname: '.hbs'
  },
  extName: '.hbs',
  viewPath: 'views'
};

transporter.use('compile', hbs(options));

const sendPasswordRecoveryMail = (name, email, token) => {
  let emailConfiguration = setEmailContent(email, 'Correo de recuperación', 'password_recovery', { name, URL_FRONTEND, token });
  return sendEmail(emailConfiguration);
}

const setEmailContent = (destinyEmail, subject, template, context) => {
  let emailConfiguration = {
    from: EMAIL_FROM,
    to: destinyEmail,
    subject: subject,
    template: template,
    context: context
  }
  return emailConfiguration;
};

const sendEmail = async (emailConfiguration) => {
  try {
    return await transporter.sendMail(emailConfiguration);
  }
  catch (error) {
    //console.log(error);
    return error;
  }
}
export {
  sendPasswordRecoveryMail
}