const getStarted = () => {
  const faqSection = document.getElementById("faq-section");
  const learnSection = document.getElementById("learn-section");
  const banner = document.getElementById("banner");

  const inputName = document.getElementById("inputName").value;
  const inputPassword = parseFloat(
    document.getElementById("inputPassword").value
  );

  console.log(typeof inputName, typeof inputPassword);

  if (inputName && inputPassword == 123456) {
    alert("congratulations you have entered");
    faqSection.classList.remove("hidden");
    learnSection.classList.remove("hidden");
    banner.classList.add("hidden");
  } else if (inputName && inputPassword.length !== 123456) {
    alert("please input number 123456");
  } else {
    alert("wntered false information");
  }
};

const handleLogOut = () => {
  alert("sure to log out ? ");
  const faqSection = document.getElementById("faq-section");
  const learnSection = document.getElementById("learn-section");
  const banner = document.getElementById("banner");
  faqSection.classList.add("hidden");
  learnSection.classList.add("hidden");
  banner.classList.remove("hidden");
};
