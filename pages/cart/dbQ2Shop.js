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
  constructor (item, price, quantity) {
    this.item = item;
    this.price = price;
    this.quantity = quantity;
  };
}

export const dbRW = {dbWrite, dbRead, dbDelete, dbItemClass };