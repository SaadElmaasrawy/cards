

var i = true;

$('.buttons .left').click(function (e) { 
    if (i == true) {
        $('body').fadeOut(1000).fadeIn(1000);
        setTimeout('$(".avatar").attr("src","images/image-john.jpg")',1000); 
        setTimeout('$(".content-left p").html("“ If you want to lay the best foundation<br>possible I’d recommend taking this<br>course. The depth the instructors go into<br>is incredible. I now feel so confident about<br>starting up as a professional developer. ”");',1000);
        setTimeout('$(".content-left h3").html("John Tarkpor<span>Junior Front-end Developer</span>");', 1000);
        i = false;
    } else {
        $('body').fadeOut(1000).fadeIn(1000);
        setTimeout('$(".avatar").attr("src","images/image-tanya.jpg")',1000); 
        setTimeout('$(".content-left p").html("“ I’ve been interested in coding for a while<br>but never taken the jump, until now. I<br>couldn’t recommend this course enough.<br>I’m now in the job of my dreams and so<br>excited about the future. ”");',1000);
        setTimeout('$(".content-left h3").html("<h3>Tanya Sinclair<span>UX Engineer</span></h3>");', 1000);
        i = true;
    }
    
});

$('.buttons .right').click(function (e) { 
    if (i == true) {
        $('body').fadeOut(1000).fadeIn(1000);
        setTimeout('$(".avatar").attr("src","images/image-john.jpg")',1000); 
        setTimeout('$(".content-left p").html("“ If you want to lay the best foundation<br>possible I’d recommend taking this<br>course. The depth the instructors go into<br>is incredible. I now feel so confident about<br>starting up as a professional developer. ”");',1000);
        setTimeout('$(".content-left h3").html("John Tarkpor<span>Junior Front-end Developer</span>");', 1000);
        i = false;
    } else {
        $('body').fadeOut(1000).fadeIn(1000);
        setTimeout('$(".avatar").attr("src","images/image-tanya.jpg")',1000); 
        setTimeout('$(".content-left p").html("“ I’ve been interested in coding for a while<br>but never taken the jump, until now. I<br>couldn’t recommend this course enough.<br>I’m now in the job of my dreams and so<br>excited about the future. ”");',1000);
        setTimeout('$(".content-left h3").html("<h3>Tanya Sinclair<span>UX Engineer</span></h3>");', 1000);
        i = true;
    }
    
});
