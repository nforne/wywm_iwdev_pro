export const navHeader = `

<div class="signAndLogo container-fluid">
  <img id="logo" class="q2Logo" src="./pics/Q2.png" alt="q2Logo" srcset="./pics/Q2.png">
  <img class="homeRose" src="./pics/headerImg.png" alt="headerImg" srcset="./pics/headerImg.png">
  <div class="signBtns">
    <button><i class="fa fa-sign-in fa-1x" aria-hidden="true"></i> | LogIn</button>
    <button><i class="fa fa-address-book-o fa-1x" aria-hidden="true"></i> | SignUp</button>
    <button id="productsBtn"><i class="fa fa-check-square-o fa-1x" aria-hidden="true"></i> | Products</button>
    <button id="aboutUs"><i class="fa fa-id-badge fa-1x" aria-hidden="true"></i> | About Us</button>
    <button id="contactUs"><i class="fa fa-address-card fa-1x" aria-hidden="true"></i> | Contact Us</button>
    <button id="admin"><i class="fa fa-user-o fa-1x" aria-hidden="true"></i> | Admin </button>
  </div>
</div>

<hr id="line1" class="line1">

<div class="nav">
  <nav class="navbar  navbar-dark">
    <div class="container-fluid ">
        
        <ul class="navbar-nav navBtns">
            
            <button id="home">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><i class="fa fa-home fa-1x" aria-hidden="true"></i> | HOME </a>
              </li>
            </button>
            <button id="shop">
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa fa-shopping-cart fa-1x" aria-hidden="true"></i> | SHOP</a>
              </li>
            </button>
            
            <li class="nav-item">             
              <div id=cartCount> 0 </div>        
              <a class="nav-link" href="#"><img id="shoppingCartBtn" src="./pics/shoppingCart.jpg" alt="shoppingCart" srcset="./pics/shoppingCart.jpg"></a>
            </li>                  
          
        </ul>
        
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      
    </div>
  </nav>
    
</div>
<hr id="line1" class="line1"></hr> 

`