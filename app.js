$(document).ready(function () {


    $(window).scroll(scrollFunction);

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $("#scroll_top_button").css('display', 'block');
        } else {
            $("#scroll_top_button").css('display', 'none');
        }
    }

    $("#scroll_top_button").click(function () {
       $("html, body").animate({scrollTop: 0}, 500);
    });

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

    for (let i = 1; i <= 3; ++i){
        let progress_bar = $("#progress-bar" + i);
        progress_bar.css({"width": "0%", "transition": "none"});
    }
    for (let i = 1; i <= 3; ++i){
        let progress_bar = $("#progress-bar" + i);
        progress_bar.css({"width": progress_bar.attr("aria-valuenow") + "%", "transition": "1.2s"});
    }

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});