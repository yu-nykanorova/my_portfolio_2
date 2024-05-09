$(document).ready(function(){
    $(".projects-item").each(function(){
        $(this).hover(function(){
            $(this).find(".projects-item__info").toggleClass("show");
        });
    });
});

document.getElementById("showButton").addEventListener("click", function() {
    const hiddenItems = document.querySelectorAll(".hide-project");
    const buttonText = this.textContent;

    if (hiddenItems.length > 0) {
        hiddenItems.forEach(function(item) {
            item.classList.remove("hide-project");
        });
        this.textContent = "Hide some";
    } else {
        const allItems = document.querySelectorAll(".projects-item.hidden-project");
        allItems.forEach(function(item) {
            item.classList.add("hide-project");
        });
        this.textContent = "Show more";
    }
 });
  
