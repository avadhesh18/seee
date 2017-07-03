$(function() {
	FastClick.attach(document.body);
});



$(document).on('click', 'a[tagert^="_notinapp"]', function (e) {
var url = $(this).attr('href');
navigator.app.loadUrl(url, { openExternal: true });
e.preventDefault();
});

$("#searchbtn").click(function(){
	
$("#thesearch").fadeIn();
$(".nav-wrapper").hide();
setTimeout(function() { $('input[type="search"]').focus() }, 100);

});

$("#cls").click(function(){

$("#thesearch").fadeOut("100",function ()
{
	
		$(".nav-wrapper").fadeIn("100");
}
);
});

$("#menuop").click(function(){
		$("body").toggleClass("noscroll");
$("#slide-out").animate({width:'toggle'},70);


$(".lessindex").fadeIn(50);

});
$(".lessindex").click(function(){
	$("body").toggleClass("noscroll");
	$("#slide-out").animate({width:'toggle'},70);
	$(".lessindex").fadeOut(50);
});

$(".close").click(function(){

$(".searchform").fadeOut();
});

function getParameterByName(name) {
name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
results = regex.exec(location.search);
return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var titlepage =  getParameterByName("title");

var length = 20;
var trimmedString = titlepage.length > length ? 
                    titlepage.substring(0, length - 3) + "..." : 
                    titlepage;
$("#titlepage").html(trimmedString);

var menu = '<li><div class="user-view"><div class=""><img src="xhd.png" width="96"></div>  <span class="name"><h5>LyricsNext</h5></span>  </div></li> <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li> <li><a href="#!">Second Link</a></li> <li><div class="divider"></div></li> <li><a class="subheader">Subheader</a></li> <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>';

$("#slide-out").html(menu);

var loading = '<div class="loadit"><img src="loader.gif" alt="loading"></div>';

$("#loading").html(loading);


function init() {
var imgDefer = document.getElementsByTagName('img');
for (var i=0; i<imgDefer.length; i++) {
if(imgDefer[i].getAttribute('data-src')) {
imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
} } }
window.onload = init;




