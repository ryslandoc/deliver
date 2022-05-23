$(function () {
    $(document).on('click', '.menu-btn', function () {
        let wrapper = $('.wrapper-menu')
        let body = $('.body')
        if (wrapper.hasClass('open')) {
            body.addClass('active-body');
        } else {
            body.removeClass('active-body');
        }
        $(wrapper).toggleClass('open');
    });

    const navMenu = document.querySelector("#navMenu");
    navMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});

