import "./style.css";
import "./utils/spotlight.js";
import "./utils/slider.js";

window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const hero = document.querySelector(".hero");
  if (hero) hero.classList.add("visible");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting) en.target.classList.add("visible");
    });
  },{threshold:0.18});
  sections.forEach(s=>observer.observe(s));

  // mockup tilt
  const device = document.querySelector(".hero-mockup .device");
  if(device){
    const wrap = device.parentElement;
    wrap.addEventListener("pointermove",(e)=>{
      const rX = (e.clientY - window.innerHeight/2)/40;
      const rY = (e.clientX - window.innerWidth/2)/40;
      device.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    });
    wrap.addEventListener("pointerleave",()=>{
      device.style.transform = "perspective(1000px) rotateX(6deg) rotateY(-6deg)";
    });
  }
});


// Mobile navigation
window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const overlay = document.querySelector(".mobile-nav-overlay");
  const panel = document.querySelector(".mobile-nav-panel");
  const closeBtn = document.querySelector(".mobile-nav-close");
  const links = document.querySelectorAll(".mobile-nav-links a");

  
  

  if (toggle) toggle.addEventListener("click", openMobileNav);
  if (overlay) overlay.addEventListener("click", closeMobileNav);
  if (closeBtn) closeBtn.addEventListener("click", closeMobileNav);
  links.forEach(l => l.addEventListener("click", closeMobileNav));
});
