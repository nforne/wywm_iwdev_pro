const payment = (total) => {
  return `
  
  <img class="gothicLine" src="./pics/gothicLine.png" alt="gothicLine" srcset="./pics/gothicLine.png">
  <div class="paymentContainer bg-dark">
 
    <div class="cartTop">
      <img class="q2Logo" src="./pics/Q2.png" alt="q2Logo" srcset="./pics/Q2.png">
      <div class="cartTopR">
        <span>Q2-Shop! &nbsp;  | &nbsp; PAYMENT </span>
        <!-- <i class="fa fa-times fa-2x" aria-hidden="true"></i> -->
      </div>
    </div>

    <hr class="lineA">

    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-center align-items-center mb-3">
          <span class="text-secondary"> Q2-Shop! | CART </span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between bg-light">
            <div class="text-success">
              <h6 class="my-0">Promo code</h6>
              <small>EXAMPLECODE: &nbsp  DISCOUNT0123</small>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span> CART TOTAL </span>
            <strong>${total}</strong>
          </li>
        </ul>

        <form class="card p-2">
          <div class="input-group">
            <input id='promoCode' type="text" class="form-control" placeholder="Promo code">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </form>
      </div>

      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Billing address</h4>
        <hr class="lineB">
        <form id='paymentForm' class="needs-validation paymentForm" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="Username" required>
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">State</label>
              <select class="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="my-4">

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address">
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info">
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr class="my-4">
          <br>
          <h4 class="mb-3">Payment</h4>
          <hr class="lineB">
          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="e.g : 4242 4242 4242 4242"  required>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder=" e.g : 10/22" required>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="e.g : 003" required>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4">
          <div class='pay'>
            <button id='paymentBack2Cart' class="back2Cart"><i class="fa fa-shopping-cart fa-1x" aria-hidden="true"></i> <i class="fa fa-chevron-circle-left fa-1x" aria-hidden="true"></i></button>
            <button id='pay' class="w-100 btn btn-primary btn-lg" type="submit"><i class="fa fa-credit-card-alt fa-1x" aria-hidden="true"></i> &nbsp | &nbsp Proceed with Payment! </button>
          </div>
        </form>
      </div>
    </div>
  </div>  `;

};

const paymentInputListeners = (purchaseObj) => {
  $('.paymentContainer input, .paymentContainer select').each((index, item) => {
    $(`#${item.id}`).on('change', () => {
      purchaseObj[item.id] = $(`#${item.id}`).val();
    })
  })
  
}

const payFormValidationListeners = () => {
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated')
        }, false)
      })
  })();

}

const payFormValidationRegex = (formData) => {
  const outPut = {};
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
  if (!formData.email.match(emailRegex) ) outPut['email'] = 'Please enter a velid email. e.g. janedoe@exmaple.com'

  const ValidateCreditCardNumber = (ccNum) => {

    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    const amexpRegEx = /^(?:3[47][0-9]{13})$/;
    const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    let isValid = false;
  
    if (visaRegEx.test(ccNum)) {
      isValid = true;
    } else if(mastercardRegEx.test(ccNum)) {
      isValid = true;
    } else if(amexpRegEx.test(ccNum)) {
      isValid = true;
    } else if(discovRegEx.test(ccNum)) {
      isValid = true;
    }
  
    if(isValid) {
       return
    } else {
      outPut['cc\-number'] = 'Please enter a velid card number. e.g. 4242 4242 4242 4242. It must be 16-digits'
    }
  }

  ValidateCreditCardNumber(Number(formData['cc\-number'].replaceAll(' ','')));
  
  // const mCard = /^(?:5[1-5][0-9]{14})$/;
  // const vCard = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  // if (!formData['cc\-number'].match(mCard) && !formData['cc\-number'].match(vCard)) outPut['cc\-number'] = 'Please enter a velid card number. e.g. 4242 4242 4242 4242. It must be 16-digits'
  
  return outPut;
}

export const paymentFns = {payment, paymentInputListeners, payFormValidationListeners, payFormValidationRegex };