
// for modal views
const dialogFn = (id) => {
  $( "#dialogBox" ).dialog({  
    autoOpen: false,
    closeonescape: true,
    // height: 700,
    with: 700,
    modal : true,
    position: { my: "center", at: "center", of: window },
    hide: { effect: "blind", duration: 100 },  
    show : { effect: "blind", duration: 100 },
    title : id.toUpperCase(),
    dialogClass: "dialogBoxBR",
    buttons: [{
        text: `[ ✖ ] | Close! 💬`,
        click: function () {                  
          $( this ).dialog( "destroy" );
        }}],
  });

  $( "#dialogBox" ).dialog( "open" );

  /* since the jq-ui dialog widget is blocking, we handle it 
  assynchronously to enable dialog close on click anywhere else on the screen. */
  setTimeout(() => {
    const dialogCntrl = "div:not(.ui-dialog, .ui-dialog div, .shop div, .V6 button, .cartIem, .itemValuesAndCRUDs, .cartCRUDBtns, .addSubBtns)";
    $(dialogCntrl).on('click', () => {
      if ($("#dialogBox").data("ui-dialog")) {
        setTimeout(() => {
          $("#dialogBox").dialog("destroy");
          $(dialogCntrl).off('click');
        }, 0);
      }
    });
  }, 0);

}

// for notifications/alerts
const message = (textsList, color='wheat', time=10000) => {
  const msg = document.getElementById('messages');
  let msgs = '';
  for (let text of textsList) { 
    msgs += `<p>${text}</p>`;
  } 
  msg.innerHTML = `<div style="color:${color};">${msgs}</div>`;
  setTimeout(() => {
    msg.innerHTML = '';
  }, time)
}

// random directive message
const randomDMessage = (item, msgs=[], chances) => {
  $(item).on('click', () => {
    const index = Math.floor(Math.random() * chances) + 1;
    index === 3 ? message(msgs) : "";
  })
}

// bootstrap modal: toast notification
const bsToast = (title, timeStarted, msg, ttl=5000) => {
  const time = new Date();
  $('#toastBox').append(
    `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="./pics/Q2.ico" class="rounded mr-2" alt="...">
        <strong class="mr-auto">${title}</strong>
        <small class="text-muted">${((time.getTime() - timeStarted)/60000).toFixed(2)} mins ago</small>
      </div>
      <div class="toast-body">
        ${msg}
      </div>
    </div>`);
    
  $('#messages').empty();
  $(".toast").toast("show");
  
  if (toastTTL) clearTimeout(toastTTL);
  var toastTTL = setTimeout(() => {
    $('#toastBox').empty();
  }, ttl)

};

export const dialogsFns = {dialogFn, message, randomDMessage, bsToast};