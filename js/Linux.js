/* Source: https://stackoverflow.com/questions/31932556/simple-toggle-able-js-dropdown-menu */
$(document).ready(function(){
    $("[data-toggle='dropdown']").click(function(e) {   
        $(this).parents(".dropdown").toggleClass("active");  /*when you click on an element with attr data-toggle='dropdown' it toggle the class "open" on its parent with class "dropdown"*/
        e.stopPropagation();
    });

    $("html").click(function() {
        $(".active").removeClass("active");  /*when you click out of the dropdown-menu it remove the class "open"*/
    });
});
