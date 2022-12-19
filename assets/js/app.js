console.log("🦆 Linkin' duck");

const share = document.querySelector("#share");
const shareSection = document.querySelector("#shareSection");

share.addEventListener("click", () => {
  shareSection.classList.toggle("d-none");
  share.classList.toggle("active");
  share.querySelector("#shareIcon").classList.toggle("opened");
});
