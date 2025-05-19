let btnClick = document.querySelectorAll(".rating-btn");
let previouslyClickedButton = null;
btnClick.forEach(function(button) {
    button.addEventListener("click", function() {
        if (previouslyClickedButton && previouslyClickedButton !== this) {
          previouslyClickedButton.classList.remove("clicked");
          };
      this.classList.add("clicked")
      previouslyClickedButton = this;

      localStorage.setItem("selectedRating", this.textContent);// Store the selected rating in local storage
    });
  });
  
  document.querySelector(".sub-btn").addEventListener("click", function(e) {
      const rating = localStorage.getItem("selectedRating");
  if (!rating) {
    alert("Please select a rating before submitting.");
    return;
  }
    window.location.href = "thanks-page.html";
  });
  //window.open("url", "_blank") to open in a new tab

  