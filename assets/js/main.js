
/*=============== SHOW MENU ===============*/
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("nav__menu");
const navclose = document.getElementById("nav__close");

// toggle.onclick = function(){
//     menu.style.right = "0"
// }

if (toggle) {
  toggle.addEventListener("click", function () {
    menu.classList.add("show__menu");
  });
}

if (navclose) {
  navclose.addEventListener("click", function () {
    menu.classList.remove("show__menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const nav_links = document.querySelectorAll(".nav__link");

const link_action = () => {
  const menu = document.getElementById("nav__menu");
  menu.classList.remove("show__menu");
};

nav_links.forEach((a) => {
  a.addEventListener("click", link_action);
});
/*=============== ADD BLUR HEADER ===============*/
const blur_header = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("blur__header")
    : header.classList.remove("blur__header");
};
window.addEventListener("scroll", blur_header);
/*=============== EMAIL JS ===============*/
const email = document.getElementById("contact__form");
const contactmessage = document.getElementById("contact__message");

const sendemail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_qo8hd18",
      "template_rfd654s",
      "#contact__form",
      "EIH0d3Vp-kx_gmCke"
    )
    .then(
      () => {
        contactmessage.textContent = "Message Send Successfully ✅";
        setTimeout(() => {
          contactmessage.textContent = "";
        }, 5000);
        email.reset();
      },
      () => {
        contactmessage.textContent = "(Error Happended) Message Not Send ❌";
      }
    );
};

email.addEventListener("submit", sendemail);
/*=============== SHOW SCROLL UP ===============*/

const scroll_up = function () {
  const scroll__up = document.getElementById("scrollup");
  this.scrollY > 600
    ? scroll__up.classList.add("show_button")
    : scroll__up.classList.remove("show_button");
};

window.addEventListener("scroll", scroll_up);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scroll_Active = () => {
  const scrollDown = window.scrollY;
  sections.forEach((el) => {
    const sectionHeight = el.offsetHeight;
    const sectiontop = el.offsetTop - 58;
    const sectionid = el.getAttribute("id");
    const sectionclass = document.querySelector(
      ".nav__menu a[href*=" + sectionid + "]"
    );
    if (scrollDown > sectiontop && scrollDown <= sectiontop + sectionHeight) {
      sectionclass.classList.add("active_link");
    } else {
      sectionclass.classList.remove("active_link");
    }
  });
};

window.addEventListener('scroll' , scroll_Active)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  duration:2500,
  distance:'60px',
  delay:400,
})

sr.reveal(`.home__data , .experience , .skills , .contact__container`);
sr.reveal(`.home__img` , {delay:600});
sr.reveal(`.home__scroll`, { delay: 700 });
sr.reveal(`.work__card , .services__card`, { interval: 100 });
sr.reveal(`.about__content`, { origin:'right' });
sr.reveal(`.about__img`, { origin: "left" });