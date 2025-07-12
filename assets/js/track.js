

function trackFunction() {
    $(".track-title").css("display", "block")
}
function trackClose() {
    $(".track-section").css("display", "none")
}
function trackFunctionOpen() {
    $(".track-section").css("display", "flex")
}
function awbNumber() {
    $(".awb").toggleClass("active")
    $(".awbinput").addClass("newshow")
    $(".mobile, .orderid, .lrn").removeClass("active")
    $(".mobileinput, .orderinput, .lrninput").removeClass("newshow")
}
function orderid() {
    $(".orderid").toggleClass("active")
    $(".orderinput").addClass("newshow")
    $(".mobile, .awb, .lrn").removeClass("active")
    $(".mobileinput, .awbinput, .lrninput").removeClass("newshow")
}
function lrnNumber() {
    $(".lrn").toggleClass("active")
    $(".lrninput").addClass("newshow")
    $(".mobile, .orderid, .awb").removeClass("active")
    $(".mobileinput, .awbinput, .orderinput").removeClass("newshow")
}
function mobile() {
    $(".mobile").toggleClass("active")
    $(".mobileinput").addClass("newshow")
    $(".awb, .orderid, .lrn").removeClass("active")
    $(".awbinput, .orderinput, .lrninput").removeClass("newshow")
}
