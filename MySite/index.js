
  window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        $("#sidenav_button").css("opacity","0.2");
    } else {
        $("#sidenav_button").css("opacity","1");
    }
}

// On click Change button (3 line to X)

function closeNav() {
  $('#ham-menu').prop("checked",false)

  changeImage();
  
}

function changeImage() {
  var image = document.getElementById('sidenav_button');
  if (image.src.match("close")) {
      image.src = "./images/line.png";
  }
  else {
      image.src = "./images/close.png";
  }
}




function ressubmit(e)
{

  console.log("HELLO");

  let name = document.forms[0].name.value;
            let email = document.forms[0].email.value;
            let message = document.forms[0].message.value;
            let phone = document.forms[0].phone.value;

  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: 'login.php',
    data: {
        message:message,
        name: name,
        email: email,
        phone: phone

    },
    
    error: function (data) {

      $("#res-fail").removeClass("d-none");
      console.log("FAIL");
      alert('Error!');
      },

    success: function (data) {

      $("#res-success").removeClass("d-none");

      alert('Your Message has been sent successfully!');
        

    }

});
}