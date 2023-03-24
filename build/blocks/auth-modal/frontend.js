/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./src/blocks/auth-modal/frontend.js ***!
  \*******************************************/
document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelectorAll(".open-modal");
  const modalEl = document.querySelector(".wp-block-udemy-plus-auth-modal");
  const modalCloseEl = document.querySelectorAll(".modal-overlay, .modal-btn-close");
  openModalBtn.forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault();
      modalEl.classList.add("modal-show");
    });
  });
  modalCloseEl.forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault();
      modalEl.classList.remove("modal-show");
    });
  });
  const tabs = document.querySelectorAll(".tabs a");
  const signinForm = document.querySelector("#signin-tab");
  const signupForm = document.querySelector("#signup-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", event => {
      event.preventDefault();
      tabs.forEach(currentTab => {
        currentTab.classList.remove("active-tab");
      });
      event.currentTarget.classList.add("active-tab");
      const activeTab = event.currentTarget.getAttribute("href");
      if (activeTab === "#signin-tab") {
        signinForm.style.display = "block";
        signupForm.style.display = "none";
      } else {
        signinForm.style.display = "none";
        signupForm.style.display = "block";
      }
    });
  });
  signupForm.addEventListener("submit", event => {
    event.preventDefault();
    const signupFieldset = signupForm.querySelector("fieldset");
    signupFieldset.setAttribute("disabled", true);
    const signupStatus = signupForm.querySelector("#signup-status");
    signupStatus.innerHTML = `<div class = "modal-status modal-status-info">Please Wait. We're creating your account</div>`;
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map