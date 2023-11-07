/* ========== Typing Animation ========*/
var typed = new Typed(".typing", {
  strings: [
    "",
    "FullStack Developer",
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
/* ========== Aside Animation ========*/
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSelection = document.querySelectorAll(".section"),
  totalSelection = allSelection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSelection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSelection; i++) {
    allSelection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSelection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSelection; i++) {
    allSelection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSelection; i++) {
    allSelection[i].classList.toggle("open");
  }
}

/* ========== CV download script starts ========== */

$(document).ready(function () {
  $("#btnDownload").click(function (e) {
    e.preventDefault();
    window.location.href = "Joshua-Okwor.pdf";
  });
});

/* ========== Send Mail script starts ========== */

function SendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email_id").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_2k15vc2", "template_mv4fwhd", params)
    .then(function (res) {
      alert("Thank you for contacting me! " + res.status);
    });
}

/* ========== Pop up start ========== */
const showPopupButton = document.getElementById("showPopup");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("closePopup");

for (let i = 0; i < showPopupButton.length; i++) {
  showPopupButton[i].addEventListener("click", () => {
    popup.style.display = "block";
  });
}

closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
/* ========== Pop up end ========== */
/* ========== Pop up2 start ========== */
const showPopupButton2 = document.getElementById("showPopup2");
const popup2 = document.getElementById("popup2");
const closePopupButton2 = document.getElementById("closePopup2");

for (let i = 0; i < showPopupButton2.length; i++) {
  showPopupButton2[i].addEventListener("click", () => {
    popup2.style.display = "block";
  });
}

closePopupButton2.addEventListener("click", () => {
  popup2.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popup2) {
    popup2.style.display = "none";
  }
});
/* ========== Pop up2 end ========== */
/* ========== Pop up3 start ========== */
const showPopupButton3 = document.getElementById("showPopup3");
const popup3 = document.getElementById("popup3");
const closePopupButton3 = document.getElementById("closePopup3");

for (let i = 0; i < showPopupButton3.length; i++) {
  showPopupButton3[i].addEventListener("click", () => {
    popup3.style.display = "block";
  });
}

closePopupButton3.addEventListener("click", () => {
  popup3.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popup3) {
    popup3.style.display = "none";
  }
});
/* ========== Pop up3 end ========== */
/* ========== Pop up4 start ========== */
const showPopupButton4 = document.getElementById("showPopup4");
const popup4 = document.getElementById("popup4");
const closePopupButton4 = document.getElementById("closePopup4");

for (let i = 0; i < showPopupButton4.length; i++) {
  showPopupButton4[i].addEventListener("click", () => {
    popup4.style.display = "block";
  });
}

closePopupButton4.addEventListener("click", () => {
  popup4.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popup4) {
    popup4.style.display = "none";
  }
});
/* ========== Pop up4 end ========== */
/* ========== Pop up5 start ========== */
const showPopupButton5 = document.getElementById("showPopup5");
const popup5 = document.getElementById("popup5");
const closePopupButton5 = document.getElementById("closePopup5");

for (let i = 0; i < showPopupButton5.length; i++) {
  showPopupButton5[i].addEventListener("click", () => {
    popup5.style.display = "block";
  });
}

closePopupButton5.addEventListener("click", () => {
  popup5.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popup5) {
    popup5.style.display = "none";
  }
});
/* ========== Pop up5 end ========== */
/* ========== Pop up6 start ========== */
const showPopupButton6 = document.getElementById("showPopup6");
const popup6 = document.getElementById("popup6");
const closePopupButton6 = document.getElementById("closePopup6");

for (let i = 0; i < showPopupButton6.length; i++) {
  showPopupButton6[i].addEventListener("click", () => {
    popup6.style.display = "block";
  });
}

closePopupButton6.addEventListener("click", () => {
  popup6.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popup6) {
    popup6.style.display = "none";
  }
});
/* ========== Pop up6 end ========== */

// For future me: I'm sorry for the mess I've made here. I'm still learning. Hopefully, I'll get better at this. I promise. :) start from here check down

/* ========== Project Read More start ========== */
const readMore = document.querySelectorAll("#showPopup");
const readMoreDiv = document.querySelectorAll("#project-read-more-div");
const popup1 = document.querySelector("#popup"); // Define the 'popup' element

for (let i = 0; i < readMore.length; i++) {
  readMore[i].addEventListener("mouseenter", () => {
    readMoreDiv[i].style.display = "flex";

    readMoreDiv[i].addEventListener("click", () => {
      popup1.style.display = "block";
    });
  });

  // Add a mouseleave event listener for hover-out
  readMore[i].addEventListener("mouseleave", () => {
    setTimeout(() => {
      readMoreDiv[i].style.display = "none";
    }, 4000);
  });
}
/* ========== Project Read More end ========== */
/* ========== Project Read More 2 start ========== */
const readMore2 = document.querySelectorAll("#showPopup2");
const readMoreDiv2 = document.querySelectorAll("#project-read-more-div2");
const popup12 = document.querySelector("#popup2"); // Define the 'popup' element

for (let i = 0; i < readMore2.length; i++) {
  readMore2[i].addEventListener("mouseenter", () => {
    readMoreDiv2[i].style.display = "flex";

    readMoreDiv2[i].addEventListener("click", () => {
      popup12.style.display = "block";
    });
  });

  // Add a mouseleave event listener for hover-out
  readMore2[i].addEventListener("mouseleave", () => {
    setTimeout(() => {
      readMoreDiv2[i].style.display = "none";
    }, 4000);
  });
}
/* ========== Project Read More 2 end ========== */
/* ========== Project Read More 3 start ========== */
const readMore3 = document.querySelectorAll("#showPopup3");
const readMoreDiv3 = document.querySelectorAll("#project-read-more-div3");
const popup13 = document.querySelector("#popup3"); // Define the 'popup' element

for (let i = 0; i < readMore3.length; i++) {
  readMore3[i].addEventListener("mouseenter", () => {
    readMoreDiv3[i].style.display = "flex";

    readMoreDiv3[i].addEventListener("click", () => {
      popup13.style.display = "block";
    });
  });

  // Add a mouseleave event listener for hover-out
  readMore3[i].addEventListener("mouseleave", () => {
    setTimeout(() => {
      readMoreDiv3[i].style.display = "none";
    }, 4000);
  });
}
/* ========== Project Read More 3 end ========== */
/* ========== Project Read More 4 start ========== */
const readMore4 = document.querySelectorAll("#showPopup4");
const readMoreDiv4 = document.querySelectorAll("#project-read-more-div4");
const popup14 = document.querySelector("#popup4"); // Define the 'popup' element

for (let i = 0; i < readMore4.length; i++) {
  readMore4[i].addEventListener("mouseenter", () => {
    readMoreDiv4[i].style.display = "flex";

    readMoreDiv4[i].addEventListener("click", () => {
      popup14.style.display = "block";
    });
  });

  // Add a mouseleave event listener for hover-out
  readMore4[i].addEventListener("mouseleave", () => {
    setTimeout(() => {
      readMoreDiv4[i].style.display = "none";
    }, 4000);
  });
}
/* ========== Project Read More 4 end ========== */
/* ========== Project Read More 5 start ========== */
const readMore5 = document.querySelectorAll("#showPopup5");
const readMoreDiv5 = document.querySelectorAll("#project-read-more-div5");
const popup15 = document.querySelector("#popup5"); // Define the 'popup' element

for (let i = 0; i < readMore5.length; i++) {
  readMore5[i].addEventListener("mouseenter", () => {
    readMoreDiv5[i].style.display = "flex";

    readMoreDiv5[i].addEventListener("click", () => {
      popup15.style.display = "block";
    });
  });

  // Add a mouseleave event listener for hover-out
  readMore5[i].addEventListener("mouseleave", () => {
    setTimeout(() => {
      readMoreDiv5[i].style.display = "none";
    }, 4000);
  });
}
/* ========== Project Read More 5 end ========== */
/* ========== Project Read More 6 start ========== */
const readMore6 = document.querySelectorAll("#showPopup6");
const readMoreDiv6 = document.querySelectorAll("#project-read-more-div6");
const popup16 = document.querySelector("#popup6"); // Define the 'popup' element

for (let i = 0; i < readMore6.length; i++) {
  readMore6[i].addEventListener("mouseenter", () => {
    readMoreDiv6[i].style.display = "flex";

    readMoreDiv6[i].addEventListener("click", () => {
      popup16.style.display = "block";
    });
  });

  // Add a mouseleave event listener for hover-out
  readMore6[i].addEventListener("mouseleave", () => {
    setTimeout(() => {
      readMoreDiv6[i].style.display = "none";
    }, 4000);
  });
}
/* ========== Project Read More 6 end ========== */

// For future me: I'm sorry for the mess I've made here. I'm still learning. Hopefully, I'll get better at this. I promise. :) start from here
