jQuery(document).ready(function($) {

	$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

});

$(function() {
    $('.list a').each(function(){
	 var a = this.href;   
	 
	 if (a.indexOf("about.html") == -1){
	    
     b = a.replace("#", "about.html#");
     
     this.href = b;
     
     }
})
});