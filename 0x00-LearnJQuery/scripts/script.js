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

//adding content
//method 1
var tweet = '<div style="margin: 20px 0; padding: 10px; background: None">\
    <p>This is sample text for the sample tweet</p>\
    </div>'

//append...to the bottom of the element seleted
$('#tweets div').append(tweet);

//prepend...to the beginning of the element selected
$('#tweets div').prepend(tweet);

//before...the element selected
$('#tweets div p').before(tweet);

//after...the element selected
$('#tweets div p').after(tweet);

//html...add a html tag in the element selected
$('#tweets div').html(tweet);

//text... add text to the element selected
$('#tweets div p').text(tweet);

//wrap and unwrap
$("section").wrap('<div class="section">')
    .css({border: "5px solid grey"});

$("section").unwrap()
    .css({border: '5px solid pink'});

$("section").wrapAll('<div class="section-all">')
    .css({border: "5px solid purple"}); //css is applied to sections, not div

var wrapper = "<div class='wrapper-all'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = () => {
    if (wrapped){
        $("section").unwrap();
        wrapped = false;
        button.text('wrap');
    } else{
        $("section").wrapAll(wrapper);
        wrapped = true;
        button.text('unwrap');

    }
};

//removing content
//empty... the inner HTML of element selected
$('.button').empty();
$('#points-of-sale').empty();
//remove ... the element selected completely
$('.buttton').remove();
$('#contact img').remove();

//
