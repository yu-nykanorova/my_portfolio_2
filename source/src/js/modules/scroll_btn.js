document.addEventListener('DOMContentLoaded', function() {
    let scrollButton = document.querySelector('.scroll_btn');

    window.addEventListener('scroll', function() {
        if (this.window.scrollY > 100) {
            scrollButton.classList.add('show_scroll_btn');
        } else {
            scrollButton.classList.remove('show_scroll_btn');
        }
    });

    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});