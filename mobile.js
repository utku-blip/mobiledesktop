
document.addEventListener("DOMContentLoaded",()=>{
    const btn=document.querySelector(".mobile-menu-button");
    const sidebar=document.querySelector(".mobile-sidebar");
    const overlay=document.querySelector(".mobile-overlay");
    const closeBtn=document.querySelector(".close-btn");

    if(btn){
        btn.onclick=()=>{
            sidebar.classList.add("active");
            overlay.classList.add("active");
        };
    }
    if(closeBtn){
        closeBtn.onclick=()=>{
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        };
    }
    if(overlay){
        overlay.onclick=()=>{
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        };
    }
});
