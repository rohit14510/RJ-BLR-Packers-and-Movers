const popupElements = document.querySelector(".popup-section");
function closeFunction(){
    $(".t-modle").css("display","none");
  }

  function booknow() {
    $(".t-modle").css("display", "flex");
}

popupElements.innerHTML = `
    
<div class="t-modle" >
 <div class="m-box">
      <div class="login-form">
                      <div class="login-content">
                             <h3><span>Request a Free Quote!</span><i class="fa-solid fa-xmark " onClick="closeFunction()"></i></h3>
                             <form action="enquery.php" method="post" name="form">
                                 <div class="input-login">
                                     <div class="input-text">
                                         <i class="fa-solid fa-user-shield"></i>
                                         <input type="text" placeholder="Enter Your Full Name" name="name" required>
                                     </div>
                                 </div>
                                 <div class="input-login">
                                     <div class="input-text">
                                         <i class="fa-solid fa-square-phone"></i>
                                         <input type="number" placeholder="Enter Mobile No." name="phone" required>
                                     </div>
                                 </div>
                                 <div class="input-login">
                                     <div class="input-text">
                                         <i class="fa-solid fa-envelope"></i>
                                         <input type="email" placeholder="Enter Email Address" name="email" required>
                                     </div>
                                 </div>
                                 <div class="input-login">
                                     <div class="input-text">
                                         <i class="fa-solid fa-location-dot"></i>
                                         <input type="text" placeholder="Move From" name="movefrom" required>
                                     </div>
                                 </div>
                                 <div class="input-login">
                                     <div class="input-text">
                                         <i class="fa-solid fa-location-dot"></i>
                                         <input type="text" placeholder="Move To" name="moveto" required>
                                     </div>
                                 </div>
                                 <div class="login-btn">
                                 <button class="sec-btn" type="submit" name="submit"><span>Send Message</span></button>
                                 </div>
                             </form>
                 </div>
            </div>
     </div>
</div>


`;