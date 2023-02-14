// import { pk } from './env.js'; // -----------------uncomment as needed

export const emailsjs = (info) => {
  
  const emailjsBody = {
    user: info.user,
    To: info.email,
    Subject: info.subject,
    Body: info.body,
  }

  // // https://dashboard.emailjs.com/admin/account  // -----------------uncomment as needed
  // emailjs.init(pk);                       
  // emailjs.send("q2ShopGmailjs-svc","q2ShopGmailjs-tmp", emailjsBody);

}

