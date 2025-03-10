// adjusting curly brackets and array fol labels

const curlyBracketsSoftware = document.querySelector(
  ".software-label .curly-brackets"
);
const arrowHeartLeft = document.querySelector(".arrow-left");
const curlyBracketsHardware = document.querySelector(
  ".hardware-label .curly-brackets"
);

const parentSoftware = document.querySelector(".software-label");
const parentHeart = document.querySelector(".heart-label");
const parentHardware = document.querySelector(".hardware-label");

function adjustFontSize() {
  const parentHeightSoftware = parentSoftware.clientHeight;
  const parentHeightHeart = parentHeart.clientHeight;
  const parentHeightHardware = parentHardware.clientHeight;
  console.log(parentHeightSoftware);

  curlyBracketsSoftware.style.fontSize = `${parentHeightSoftware * 0.9}px`;
  arrowHeartLeft.style.fontSize = `${parentHeightHeart}px`;
  curlyBracketsHardware.style.fontSize = `${parentHeightHardware * 0.9}px`;
}

// add button functionality to add more info about layers

document.querySelectorAll(".layer button").forEach((button) => {
  button.addEventListener("click", () => {
    const layer = button.closest(".layer");

    const descriptionId = layer.getAttribute("aria-describedby");
    const description = document.getElementById(descriptionId);
    const upIcon = button.querySelector(".icon-nav.up");
    const downIcon = button.querySelector(".icon-nav.down");

    description.classList.toggle("active");

    if (description.classList.contains("active")) {
      upIcon.style.display = "inline";
      downIcon.style.display = "none";
    } else {
      upIcon.style.display = "none";
      downIcon.style.display = "inline";
    }

    setTimeout(adjustFontSize, 12); // give time for resizing
  });
});

window.addEventListener("resize", adjustFontSize);
window.addEventListener("load", adjustFontSize);
