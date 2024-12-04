// Initialize Lenis-for-smooth-scrolling
const lenis = new Lenis({
  duration: 1.2, // Adjust scrolling speed (seconds)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  direction: "vertical", // Can be 'vertical' or 'horizontal'
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
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute("href").slice(1); // Get target ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      lenis.scrollTo(targetElement); // Use Lenis to scroll to the element
    }
  });
});





// side-bar functionality
const sidebar = document.getElementById("sidemenu");
function openMenu() {
  sidebar.style.right = "0";
}

function closeMenu() {
  sidebar.style.right = "-300px";
}





// form-backend-handling
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzcqpNqCJAHW-GLg8rlbjVSdz5-on_EwIyaErEKwxp-gc2Te__7DP6lg2sPGX4T172K4w/exec";
const form = document.forms["submit-to-google-sheet"];
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Change the button text and style
      submitButton.value = "Sent!!";
      submitButton.classList.add("sent");

      // Reset form and revert button after a short delay
      setTimeout(() => {
        submitButton.value = "Submit"; // Revert to original text
        submitButton.classList.remove("sent"); // Revert to original style
        form.reset(); // Clear the form
      }, 2000);
    })
    .catch((error) => console.error("Error!", error.message));
});





// star-background-moving-effect
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY; // Get the scroll position
  const starSpeed = 0.2; // Adjust this value to control the star movement speed

  // Move the stars in the opposite direction of the scroll
  document.body.style.backgroundPosition = `center ${
    -scrollPosition * starSpeed
  }px`;
});







//resume-preview-functionality
document.addEventListener("DOMContentLoaded", function() {
  const previewContainer = document.getElementById("pdf-preview-container");
  const pdfIframe = document.getElementById("pdf-preview"); // Targeting the iframe
  const resumeContent = document.querySelector('.resume-content');
  const closeButton = document.querySelector('button');
  const resumeUrl = 'assets/Saikat Dutta(RESUME OCT UPDATE).pdf'; // Store the PDF URL

  // Ensure the preview container is hidden on page load
  previewContainer.style.visibility = "hidden"; // Start with hidden
  previewContainer.style.opacity = "0"; // Make it invisible initially

  // Function to show the PDF preview
  function showPDFPreview() {
    pdfIframe.src = resumeUrl;  // Dynamically set the PDF source when the preview is shown
    previewContainer.style.visibility = "visible";  // Make it visible
    previewContainer.style.opacity = "1";  // Make it fully opaque
    previewContainer.style.pointerEvents = "auto"; // Enable interaction
  }

  // Function to close the preview
  function closePreview() {
    previewContainer.style.visibility = "hidden";  // Hide the preview
    previewContainer.style.opacity = "0";  // Make it invisible
    previewContainer.style.pointerEvents = "none"; // Disable interaction
    pdfIframe.src = ""; // Clear the PDF source when hidden (stop loading)
  }

  // Attach event listeners
  resumeContent.addEventListener('click', showPDFPreview);

  // Attach the close button functionality
  closeButton.addEventListener('click', closePreview);
});


