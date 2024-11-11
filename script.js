document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".projectItem");

    projectItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            const popup = item.querySelector(".popup");
            if (popup) {
                popup.style.display = "block";
            }

            const video = popup.querySelector("video");
            if (video) {
                video.play();
            }
        });
        
        item.addEventListener("mouseleave", () => {
            const popup = item.querySelector(".popup");
            if (popup) {
                popup.style.display = "none";
            }

            const video = popup.querySelector("video");
            if (video) {
                video.pause();
            }
        });
    });


});