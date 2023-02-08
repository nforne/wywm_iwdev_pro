import { msTime } from "./msTime.js";

const dbWrite = (data, msg=(e)=>{}, cartOrHistory=true /*true=cart, false=history*/) => {
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    cartOrHistory ? localStorage.setItem('q2Shop', JSON.stringify(data)) : localStorage.setItem('q2ShopHistory', JSON.stringify(data));
  } else {
    msg(['Sorry! No Web Storage support ...']);
  }
}

const dbRead = (msg=(e)=>{}, cartOrHistory=true /*true=cart, false=history*/) => {
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    let outPut = '';
    if (cartOrHistory) {
      outPut = localStorage.q2Shop ? JSON.parse(localStorage.q2Shop) : {};
    } else {
      outPut = localStorage.q2ShopHistory ? JSON.parse(localStorage.q2ShopHistory) : {};
    }
    return outPut;
  } else {
    msg(['Sorry! No Web Storage support ...']);
  }
}

// to clear db
const dbDelete = (cartOrHistory=true /*true=cart, false=history*/) => {
  cartOrHistory ? localStorage.removeItem('q2Shop') : localStorage.removeItem('q2ShopHistory');
}

class dbItemClass {
  constructor (item, price, quantity, img) {
    this.item = item;
    this.price = price;
    this.quantity = quantity;
    this.img = img;
  };
}

const emailRate = (number='') => {
  
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    const time = new Date();
    const outPut = localStorage.emailRate ? Number(JSON.parse(localStorage.emailRate).count) : -1;
    const lastTime = localStorage.emailRate ? Number(JSON.parse(localStorage.emailRate).moment) : time.getTime();
    const diff =  msTime(time.getTime() -  lastTime, 'd') ;    
    if (outPut !== -1 && outPut >= 10 && diff > 7) {
      localStorage.removeItem('emailRate'); // rate reset logic. One can only get 10 email receipt chances in seven days
      print('done')   ;
    } 
    const tracker = localStorage.emailRate; 
    
    if (number) {
      localStorage.setItem('emailRate', JSON.stringify({
        count : tracker ? Number(JSON.parse(tracker).count) + number :  number, 
        moment: tracker ? Number(JSON.parse(tracker).moment) : time.getTime(),
      }));      
    } else {
      const count = tracker ? Number(JSON.parse(tracker).count) : 0;
      const moment = tracker ? Number(JSON.parse(tracker).moment) : time.getTime();
      return  (count >= 10 && msTime(time.getTime() - moment, 'd') <= 7) ? false : true;
    }
  } else {
    msg(['Sorry! No Web Storage support ...']);
  }
}

export const dbRW = {dbWrite, dbRead, dbDelete, dbItemClass, emailRate };