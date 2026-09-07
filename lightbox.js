document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxDisplay = document.getElementById("lightbox-display");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const triggers = document.querySelectorAll(".lightbox-trigger");
    const closeBtn = document.querySelector(".lightbox-close");

    if (!lightbox) return;

    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const title = trigger.getAttribute("data-title");
            
            lightboxDisplay.innerHTML = "";

            if (trigger.tagName.toLowerCase() === "img") {
                const zoomedImg = document.createElement("img");
                zoomedImg.src = trigger.src;
                zoomedImg.alt = trigger.alt;
                zoomedImg.style.width = "100%";
                zoomedImg.style.height = "auto";
                zoomedImg.style.maxHeight = "70vh";
                zoomedImg.style.objectFit = "contain";
                zoomedImg.style.borderRadius = "4px";
                lightboxDisplay.appendChild(zoomedImg);
            } else {
                lightboxDisplay.innerHTML = trigger.innerHTML;
            }
            
            lightboxCaption.textContent = title;
            lightbox.classList.add("active");
        });
    });

    function closeLightbox() {
        lightbox.classList.remove("active");
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeLightbox);
    }
    
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeLightbox();
        }
    });
});