const cstSel = customSelect("select")[0];

//------------------

const openBtnRef = document.querySelector("button[js-menu-open-btn]");
const closeBtnRef = document.querySelector("button[js-menu-close-btn]");

const menuEl = document.querySelector("div[js-mobile-menu]");

openBtnRef.addEventListener("click", (e) => {
  menuEl.classList.remove("is-hidden");
  //   document.body.style.overflow = "hidden";
});

closeBtnRef.addEventListener("click", (e) => {
  menuEl.classList.add("is-hidden");
  //   document.body.style.overflow = "auto";
});

//  -----------------------------------------

const openModalnRef = document.querySelectorAll("button[js-modal-open]");
const closeModal = document.querySelector("button[js-close-modal]");

const overlayEl = document.querySelector("[js-modal-backdrop]");

const modalEl = document.querySelector(".modal");

openModalnRef.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    modalEl.classList.remove("is-hidden");
    //   document.body.style.overflow = "hidden";

    overlayEl.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        modalEl.classList.add("is-hidden");
      }
    });
  })
);

// --------------------------------------------

const formRef = document.querySelector(".modal-form");

formRef.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name, number, mySelect } = e.currentTarget.elements;
  const userData = {
    name: name.value,
    number: number.value,
    barber: mySelect.value,
  };

  console.log(userData);

  e.currentTarget.reset();

  modalEl.classList.add("is-hidden");
});

//  -----------------------------------------

const backBtnRef = document.querySelector("[js-hero-btn-back]");
const forwardBtnRef = document.querySelector("[js-hero-btn-forward]");
const heroWrapEl = document.querySelector(".hero-wrap-background");

const navBtnClassToggle = (activeBtn, otherBtn) => {
  if (heroWrapEl.classList.contains(otherBtn)) {
    heroWrapEl.classList.remove(otherBtn);
    return;
  }

  if (heroWrapEl.classList.contains(activeBtn)) {
    heroWrapEl.classList.remove(activeBtn);
    heroWrapEl.classList.add(otherBtn);
    return;
  }

  heroWrapEl.classList.add(activeBtn);
};

backBtnRef.addEventListener("click", (e) =>
  navBtnClassToggle("is-back", "is-forw")
);

forwardBtnRef.addEventListener("click", (e) =>
  navBtnClassToggle("is-forw", "is-back")
);
