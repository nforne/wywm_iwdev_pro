export const pages = {

  home : {...await import('./home.js')}.home,
  shop: {...await import('./shop.js')}.shop,
  dbRW : {...await import('./cart/dbQ2Shop.js')}.dbRW,
  aboutUs: {...await import('./aboutUs.js')}.aboutUs,
  contactUs: {...await import('./contactUs.js')}.contactUs,
  navHeader : {...await import('./navHeader.js')}.navHeader,
  navFooter : {...await import('./navFooter.js')}.navFooter,
  itemCard : {...await import('./itemCard.js')}.itemCard,
  shoppingCart : {...await import('./cart/cart.js')}.shoppingCart,
  cartDialog : {...await import('./cart/cartDialog.js')}.cartDialog, 
  dialogsFns : {...await import('./dialogsFns.js')}.dialogsFns, 
  checkout : {...await import('./cart/checkout.js')}.checkout, 
  paymentFns : {...await import('./cart/payment.js')}.paymentFns, 
  emailsjs : {...await import('./emailsjs/emails.js')}.emailsjs, 
  imgToDataURLjs : {...await import('../pics/imgToDataURL.js')}.imgToDataURLjs, 
  dbRWFirebase : {...await import('./fireBasejs/gFirebase.js')}.dbRWFirebase,
  getProducts : {...await import('./productsjs/products.js')}.getProducts,
  
};