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

/**
 * 
 * Alert dismiss
 * 
 */

 const alertDismissDiv = document.querySelector("#alert-dimiss");
 const alertDismissBtn = document.querySelector("#alert-dimiss-btn");
 
 alertDismissBtn.addEventListener("click", () => {
     alertDismissDiv.classList.add("d-none");
 })