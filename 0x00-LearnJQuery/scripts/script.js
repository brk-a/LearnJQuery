$(document).ready(function(){
    alert('jquery loaded');
});

$("h3").css({border: "3px solid blue"});

$(".wrapper").css({border: "3px solid red"});

$("#clients").css({border: "3px solid yellow"});

$("header nav li:first").css({border: "3px solid green"});
$("header nav li:last").css({border: "3px solid pink"});

// first and last vs first-child and last-child
$("#contact ul:first").css({border: "3px solid green"});
$("#contact ul:last").css({border: "3px solid pink"});

$("#contact :first-child").css({border: "3px solid red"});
$("#contact :last-child").css({border: "3px solid blue"});

//even and odd
//re-call: JS is zero-based and 0, in Js, is even
$("header nav li:even").css({border: "3px solid grey"});
$("header nav li:odd").css({border: "3px solid purple"});

// traverse the DOM
$("#contact-methods").next().css({border: "5px solid purple"});
$("#social-nav").prev().css({border: "5px solid grey"});
$(".banner-title").parent().css({border: "5px solid purple"});
$(".banner-title").parents().css({border: "5px solid blue"});
$("#social-nav").children().css({border: "5px solid green"});
$("#contact").find(".facebook").css({border: "3px solid pink"});
$("#social-nav").closest("wrapper").css({border: "5px solid red"});

//chaining proper
$("#contact-methods").css({border: "7px solid red"})
    .next().css({border: "7px solid green"})
    .closest("section").css({border: "7px solid blue"});