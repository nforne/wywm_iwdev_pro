import { itemCard } from "../itemCard.js";
import { dialogsFns } from "../dialogsFns.js";

export const cartDialog = (id) => {
  // to setup modal view for cartItems
 $('#dialog').html(itemCard(id));
 dialogsFns.dialogFn(id)
}