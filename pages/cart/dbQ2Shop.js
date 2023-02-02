const dbWrite = (data, msg=(e)=>{}) => {
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem('q2Shop', JSON.stringify(data))
  } else {
    msg(['Sorry! No Web Storage support ...']);
  }
}

const dbRead = (msg=(e)=>{}) => {
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    return localStorage.q2Shop ? JSON.parse(localStorage.q2Shop) : {};
  } else {
    msg(['Sorry! No Web Storage support ...']);
  }
}

const dbDelete = () => {
  localStorage.removeItem('q2Shop');
}

class dbItemClass {
  constructor (item, price, quantity) {
    this.item = item;
    this.price = price;
    this.quantity = quantity;
  };
}

export const dbRW = {dbWrite, dbRead, dbDelete, dbItemClass };