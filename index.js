const cstSel = customSelect("select")[0];

//------------------

const openBtnRef = document.querySelector(".js-menu-open-btn");
const closeBtnRef = document.querySelector(".js-menu-close-btn");

const menuEl = document.querySelector(".js-mobile-menu");

openBtnRef.addEventListener("click", (e) => {
  menuEl.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
});

closeBtnRef.addEventListener("click", (e) => {
  menuEl.classList.add("is-hidden");
  document.body.style.overflow = "auto";
});

//  -----------------------------------------

const handleCloseModal = (el) => {
  el.classList.add("is-hidden");
  document.body.style.overflow = "auto";

  if (el === modalEl) {
    window.removeEventListener("keydown", handleModalEsc);
  } else if (el === thanksModal) {
    window.removeEventListener("keydown", handleThanksModalEsc);
  }
};
const openModalnRef = document.querySelectorAll(".js-modal-open");
const closeModal = document.querySelector(".js-close-modal");

const overlayEl = document.querySelector(".js-modal-backdrop");

const modalEl = document.querySelector(".modal");

const handleModalEsc = (e) => {
  if (e.code === "Escape") {
    handleCloseModal(modalEl);
  }
};

openModalnRef.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    modalEl.classList.remove("is-hidden");
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleModalEsc);

    overlayEl.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        handleCloseModal(modalEl);
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

  handleCloseModal(modalEl);
  thanksModal.classList.remove("is-hidden");
  window.addEventListener("keydown", handleThanksModalEsc);
});

//  -----------------------------------------

const backBtnRef = document.querySelector(".js-hero-btn-back");
const forwardBtnRef = document.querySelector(".js-hero-btn-forward");
const heroWrapEl = document.querySelector(".hero-wrap-background");

const lineOne = document.querySelector(".hero-back-one");
const lineTwo = document.querySelector(".hero-back-two");
const lineThree = document.querySelector(".hero-back-three");

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

  e.currentTarget.reset();

  window.addEventListener("keydown", handleThanksModalEsc);
  thanksModal.classList.remove("is-hidden");
});

// -----------------------------------------

const thanksModal = document.querySelector(".modal-gratitude");

const overlayThanksEl = document.querySelector(".js-modal-gratitude-backdrop");

const handleThanksModalEsc = (e) => {
  if (e.code === "Escape") {
    handleCloseModal(thanksModal);
  }
};

overlayThanksEl.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    handleCloseModal(thanksModal);
  }
});
