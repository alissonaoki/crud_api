import { EmailOptions } from '../../usecases/ports/email-service'

const attachments = [{
  filename: 'clean-architecture.pdf',
  path: 'https://alissonaoki.github.io/clean-architecture.pdf'
}]

export function getEmailOptions (): EmailOptions {
  const from = "noreply@aoki.com.br"
  const to = ''
  const mailOptions: EmailOptions = {
    host: "smtp.mailtrap.io",//process.env.EMAIL_HOST
    port: 2525,//Number.parseInt(process.env.EMAIL_PORT),
    username: "d5722056372797",//process.env.EMAIL_USERNAME,
    password: "5ef29df6a16d6e",//process.env.EMAIL_PASSWORD,
    from: from,
    to: to,
    subject: 'RECEBAAAAA!',
    text: 
      'RECEBA esse pequeno presente que preparamos para você com muito carinho: um pôster da Clean Architecture! \n \n' +
      'Espero que você curte... \n \n' +
      'Um abraço e até a próxima, \n' +
      'Alisson Aoki | CRUD',
    html:
      'RECEBA esse pequeno presente que preparamos para você com muito carinho: um pôster da <b>Clean Architecture</b>! <br> <br>' +
      'Tenho certeza que você vai curtir! <br> <br>' +
      'Um abraço e até a próxima, <br>' +
      '<b>Alisson Aoki | CRUD</b> <br> <br> ',
      attachments: attachments
  }
  return mailOptions
}
