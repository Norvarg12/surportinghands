var yourName = prompt("Enter your Name ")
alert("Welcome " +yourName);

var myResult = confirm("This is a charity website do you wish to continue")
alert("clicked " +myResult+ " Find it in your heart to help the needy, Thanks")

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.getElementById('navbarToggler');

  if (navbarToggler) {
      navbarToggler.addEventListener('click', function () {
          const icon = this.querySelector('i');

          if (icon) {
              icon.classList.toggle('fa-bars');
              icon.classList.toggle('fa-times');
          }
      });
  }
});
// //////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  const finalCount1 = 2009;
  let currentCount1 = 1900;

  const finalCount2 = 150;
  let currentCount2 = 0;

  function updateCounter1() {
      const counterElement1 = document.getElementById('count1');

      if (currentCount1 <= finalCount1) {
          counterElement1.innerText = currentCount1++;
          counterElement1.classList.add('additional-class'); // Add another class (change 'additional-class' to your desired class)
          setTimeout(updateCounter1, 1);
      }
  }

  function updateCounter2() {
      const counterElement2 = document.getElementById('count2');

      if (currentCount2 <= finalCount2) {
          counterElement2.innerText = currentCount2++;
          setTimeout(updateCounter2, 1);
      }
  }

  // Call the updateCounter functions when the page loads
  window.onload = function () {
      updateCounter1();
      updateCounter2();
  };
});


// //////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function updateActiveSection() {
      const fromTop = window.scrollY + 50;

      navLinks.forEach((link) => {
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              const sectionTop = targetSection.offsetTop - 50;
              const sectionBottom = sectionTop + targetSection.offsetHeight;

              if (fromTop >= sectionTop && fromTop <= sectionBottom) {
                  navLinks.forEach((navLink) => navLink.classList.remove('active'));
                  link.classList.add('active');
              }
          }
      });
  }

  // Initial update on page load
  updateActiveSection();

  // Update on scroll
  window.addEventListener('scroll', updateActiveSection);

  // Attach click event listener to each navigation link
  navLinks.forEach((link) => {
      link.addEventListener('click', function (event) {
          event.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 50,
                  behavior: 'smooth'
              });

              // Remove active class from all links
              navLinks.forEach((navLink) => navLink.classList.remove('active'));

              // Add active class to the clicked link
              link.classList.add('active');
          }
      });
  });
});



