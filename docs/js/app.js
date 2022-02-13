/**
 * 
 * Sidebar toggle
 * 
 */

const nav = document.querySelector("#components-navigation");
const navToggle = document.querySelector(".sidebar-toggle");

navToggle.addEventListener("click", () => {

    const navVisibility = nav.getAttribute("data-visible");

    if(navVisibility === "true") {
        nav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
    else {
        nav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    }

})