const cstSel = customSelect("select")[0];

//------------------

const openBtnRef = document.querySelector("button[js-menu-open-btn]");
const closeBtnRef = document.querySelector("button[js-menu-close-btn]");

const menuEl = document.querySelector("div[js-mobile-menu]");

openBtnRef.addEventListener("click", (e) => {
  menuEl.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
});

closeBtnRef.addEventListener("click", (e) => {
  menuEl.classList.add("is-hidden");
  document.body.style.overflow = "auto";
});

//  -----------------------------------------

const openModalnRef = document.querySelectorAll("button[js-modal-open]");
const closeModal = document.querySelector("button[js-close-modal]");

const overlayEl = document.querySelector("[js-modal-backdrop]");

const modalEl = document.querySelector(".modal");

openModalnRef.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    modalEl.classList.remove("is-hidden");
    document.body.style.overflow = "hidden";

    overlayEl.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        modalEl.classList.add("is-hidden");
        document.body.style.overflow = "auto";
      }
    });
  })
);

// --------------------------------------------

const modalFormRef = document.querySelector(".modal-form");

modalFormRef.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name, number, mySelectBarber, mySelectService } =
    e.currentTarget.elements;
  const userData = {
    name: name.value,
    number: number.value,
    barber: mySelectBarber.value,
    service: mySelectService.value,
  };

  console.log(userData);

  e.currentTarget.reset();

  modalEl.classList.add("is-hidden");
  thanksModal.classList.remove("is-hidden");
});

//  -----------------------------------------

const backBtnRef = document.querySelector("[js-hero-btn-back]");
const forwardBtnRef = document.querySelector("[js-hero-btn-forward]");
const heroWrapEl = document.querySelector(".hero-wrap-background");

const lineOne = document.querySelector(".hero-back-one");
const lineTwo = document.querySelector(".hero-back-two");
const lineThree = document.querySelector(".hero-back-three");

const navBtnClassToggle = (activeBtn, otherBtn) => {
  console.log(heroWrapEl.classList.contains("is-back"));
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

const navLinesActiveClassToggle = () => {
  lineOne.classList.remove("is-active");
  lineTwo.classList.remove("is-active");
  lineThree.classList.remove("is-active");
  if (heroWrapEl.classList.contains("is-back")) {
    lineOne.classList.add("is-active");
  } else if (heroWrapEl.classList.contains("is-forw")) {
    lineThree.classList.add("is-active");
  } else {
    lineTwo.classList.add("is-active");
  }
};

backBtnRef.addEventListener("click", (e) => {
  navBtnClassToggle("is-back", "is-forw");
  navLinesActiveClassToggle();
});

forwardBtnRef.addEventListener("click", (e) => {
  navBtnClassToggle("is-forw", "is-back");
  navLinesActiveClassToggle();
});

// -----------------------------------------

const contactFormRef = document.querySelector(".contact-form");

contactFormRef.addEventListener("submit", (e) => {
  e.preventDefault();

  const { userName, phone, comment } = e.currentTarget.elements;

  const userData = {
    name: userName.value,
    number: phone.value,
    comment: comment.value,
  };

  console.log(userData);

  e.currentTarget.reset();
  thanksModal.classList.remove("is-hidden");
});

// -----------------------------------------

const thanksModal = document.querySelector(".modal-gratitude");

const overlayThanksEl = document.querySelector("[js-modal-gratitude-backdrop]");

overlayThanksEl.addEventListener("click", (e) => {
  console.log(e);
  if (e.target === e.currentTarget) {
    thanksModal.classList.add("is-hidden");
    document.body.style.overflow = "auto";
  }
});
