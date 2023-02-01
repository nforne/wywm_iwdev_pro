const dbWrite = (data, msg=(e)=>{}) => {
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem('q2Shop', JSON.stringify(data))
  } else {
    msg(['Sorry! No Web Storage support..']);
  }
}

const dbRead = (msg=(e)=>{}) => {
  // console.log(localStorage.q2Shop) // ------------------------
  if (typeof(Storage) !== "undefined" && localStorage.q2Shop) {
    return JSON.parse(localStorage.q2Shop);
  } else {
    msg(['Sorry! Empty cart or no Web Storage support..']);
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