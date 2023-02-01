const dbWrite = (data, msg=(e)=>{}) => {
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem('q2Shop', JSON.stringify(data))
  } else {
    msg(['Sorry! No Web Storage support..']);
  }
}

const dbRead = (msg=(e)=>{}) => {
  if (typeof(Storage) !== "undefined" && localStorage.q2Shop) {
    // Code for localStorage/sessionStorage.
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

const addSubCart = (a) => {

}

const delFromCart = (item) => {

}

const closeCart = () => {

}

export const dbRW = {dbWrite, dbRead, dbDelete, dbItemClass };