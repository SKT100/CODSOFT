// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2, // Adjust scrolling speed (seconds)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  direction: 'vertical', // Can be 'vertical' or 'horizontal'
  smooth: true, // Enable smooth scrolling
});

// Scroll event handler for Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Custom handler for anchor link clicks
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute('href').slice(1); // Get target ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      lenis.scrollTo(targetElement); // Use Lenis to scroll to the element
    }
  });
});



const sidebar=document.getElementById('sidemenu');
function openMenu()
{
  sidebar.style.right="0";
}

function closeMenu(){
  sidebar.style.right="-300px"
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbzcqpNqCJAHW-GLg8rlbjVSdz5-on_EwIyaErEKwxp-gc2Te__7DP6lg2sPGX4T172K4w/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
      {
        msg.innerHTML="Form submitted successfully!"
        setTimeout(function() {
          msg.innerHTML=""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  