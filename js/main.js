$(".slider").click(function () {
    $(this).siblings().removeClass("w-full");
    $(this).addClass("w-full");
    $(this).siblings().children("#content").addClass("hidden");
    $(this).children("#content").removeClass("hidden");
})