
// start sidebar
document.addEventListener("DOMContentLoaded", function (event) {

  const showsidebarbar = (toggleId, sidebarId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId),
          sidebar = document.getElementById(sidebarId),
          bodypd = document.getElementById(bodyId),
          headerpd = document.getElementById(headerId)

      // Validate that all variables exist
      if (toggle && sidebar && bodypd && headerpd) {
          toggle.addEventListener('click', () => {
              // show sidebarbar
              sidebar.classList.toggle('show1')

              // change icon
              toggle.classList.toggle('fa-xmark')

              // // add padding to body
              // bodypd.classList.toggle('body-pd')
              
              // add padding to header
              headerpd.classList.toggle('body-pd')
          })
      }
  }

  showsidebarbar('header-toggle', 'sidebar-bar', 'body-pd', 'header')

});


//----------------------------------------------------------------------------------------------------

// start validation
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Function to validate email format
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
});
