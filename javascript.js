//Activates navbar burger when viewing on mobile
$('.navbar-burger').click(() => {
    $('#navbarBasicExample, .navbar-burger').toggleClass('is-active');
  });
  
//JS for modal
  $('.modal').click(() => {
      $('.modal').toggleClass('is-active');
  });

  document.querySelectorAll('.modal-button').forEach(el => {
    el.addEventListener('click',() => {
      var target = document.querySelector(el.getAttribute('data-target'));
      
      target.classList.add('is-active');
      
      target.querySelector('.modal-close').addEventListener('click',() => {
          target.classList.remove('is-active');
       });
    });
  });

  $( '.sidebar' ).fixedsticky();