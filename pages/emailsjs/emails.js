import { pk } from './env.js';

export const emailsjs = (info) => {
  
  const emailjsBody = {
    To: info.email,
    Subject: info.subject,
    Body: info.body
  }

  // https://dashboard.emailjs.com/admin/account
  emailjs.init(pk);   
  emailjs.send("q2ShopGmailjs-svc","q2ShopGmailjs-tmp", emailjsBody);

}
