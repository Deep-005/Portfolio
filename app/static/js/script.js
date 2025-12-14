'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// download cv button
    document.addEventListener('DOMContentLoaded', function() {
      const downloadBtn = document.getElementById('downloadBtn');
      const successMessage = document.getElementById('successMessage');
      const btnIcon = downloadBtn.querySelector('.btn-icon');
      const btnText = downloadBtn.querySelector('.btn-text');
      
      downloadBtn.addEventListener('click', function() {
        // Button click effect
        btnIcon.style.animation = 'downloadAnimation 0.8s ease';
        downloadBtn.style.pointerEvents = 'none';
        downloadBtn.style.background = 'linear-gradient(135deg, #ffd363ff, #FF6B35)';
        
        // Change text and icon during download
        setTimeout(() => {
          btnText.textContent = 'Preparing Document...';
          btnIcon.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z">
                <animateTransform 
                  attributeName="transform" 
                  attributeType="XML" 
                  type="rotate"
                  dur="1s" 
                  from="0 12 12"
                  to="360 12 12" 
                  repeatCount="indefinite" />
              </path>
            </svg>
          `;
        }, 300);
        
        // Simulate download complete
        setTimeout(() => {
          btnText.textContent = 'Download Complete!';
          btnIcon.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
            </svg>
          `;
          
          downloadBtn.style.background = 'linear-gradient(135deg, #17BEBB, #4ECECA)';
          downloadBtn.style.boxShadow = '0 10px 20px rgba(23, 190, 187, 0.3)';
          
          // Show success message
          successMessage.classList.add('show');
          
          // Reset button after delay
          setTimeout(() => {
            btnText.textContent = 'Download CV';
            btnIcon.innerHTML = `
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
              </svg>
            `;
            btnIcon.style.animation = '';
            downloadBtn.style.pointerEvents = 'auto';
            downloadBtn.style.background = 'linear-gradient(135deg, var(--primary), #ecbf36)';
            downloadBtn.style.boxShadow = '0 10px 20px rgb(243, 214, 82)';
            
            // Hide success message
            setTimeout(() => {
              successMessage.classList.remove('show');
            }, 1000);
          }, 2500);
        }, 2000);
      });
    });



// Image Modal Functionality
const profileImage = document.getElementById('profileImage');
const modal = document.getElementById('profileModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.getElementById('modalClose');
const body = document.body;

function openModal() {
  modal.style.display = 'block';
  modalImg.src = profileImage.src;
  modalCaption.innerHTML = profileImage.alt;
  body.classList.add('modal-open');
  
  // Prevent scrolling
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  body.classList.remove('modal-open');
  
  // Restore scrolling
  document.documentElement.style.overflow = 'auto';
  document.body.style.overflow = 'auto';
}

// Event Listeners
if (profileImage) {
  profileImage.addEventListener('click', openModal);
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

// Close modal when clicking outside the image
modal.addEventListener('click', function(event) {
  if (event.target === modal || event.target.classList.contains('image-modal')) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});

// Testimonials
const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const slides = document.querySelectorAll(".slide");

let index = 0;
display(index);

function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);