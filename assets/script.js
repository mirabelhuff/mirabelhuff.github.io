$(document).ready(function(){

	//BUTTON SORTS
	$("#traditional.button").click(function(){
		$( "#all" ).removeClass( "buttonSelect" );
                $( "code" ).removeClass( "buttonSelect" );
                $( "#traditional" ).addClass( "buttonSelect" );
                $( "#digital" ).removeClass( "buttonSelect" );
                $( "#threeD" ).removeClass( "buttonSelect" );

                $(".galleryItem").each(function() {
                	$(".galleryItem").hide()
                })

                $(".traditional").each(function() {
                	$(".traditional").show().fadeIn(500);
                })
	})

	$("#all.button").click(function(){
		$( "#all" ).addClass( "buttonSelect" );
                $( "code" ).removeClass( "buttonSelect" );
                $( "#traditional" ).removeClass( "buttonSelect" );
                $( "#digital" ).removeClass( "buttonSelect" );
                $( "#threeD" ).removeClass( "buttonSelect" );

                $(".galleryItem").each(function() {
                	$(".galleryItem").hide()
                })

                $(".galleryItem").each(function() {
                	$(".galleryItem").show().fadeIn(500);
                })
	})

	$("#digital.button").click(function(){
		$( "#all" ).removeClass( "buttonSelect" );
                $( "code" ).removeClass( "buttonSelect" );
                $( "#traditional" ).removeClass( "buttonSelect" );
                $( "#digital" ).addClass( "buttonSelect" );
                $( "#threeD" ).removeClass( "buttonSelect" );

                $(".galleryItem").each(function() {
                	$(".galleryItem").hide();
                })

                $(".digital").each(function() {
                	$(".digital").show().fadeIn(500);
                })
	})

	$("#threeD.button").click(function(){
		$( "#all" ).removeClass( "buttonSelect" );
                $( "code" ).removeClass( "buttonSelect" );
                $( "#traditional" ).removeClass( "buttonSelect" );
                $( "#digital" ).removeClass( "buttonSelect" );
                $( "#threeD" ).addClass( "buttonSelect" );

                $(".galleryItem").each(function() {
                	$(".galleryItem").hide();
                })

                $(".threeD").each(function() {
                	$(".threeD").show().fadeIn(500);
                })
	})

        $("#code.button").click(function(){
                $( "#all" ).removeClass( "buttonSelect" );
                $( "code" ).addClass( "buttonSelect" );
                $( "#traditional" ).removeClass( "buttonSelect" );
                $( "#digital" ).removeClass( "buttonSelect" );
                $( "#threeD" ).removeClass( "buttonSelect" );

                $(".galleryItem").each(function() {
                        $(".galleryItem").hide();
                })

                $(".code").each(function() {
                        $(".code").show().fadeIn(500);
                })
        })

	//OVERLAY
	//show overlay when clicking on gallery item
	$(".galleryItem").not(".code").click(function(){
		var num = this.id;
		var sel = ".content#" + num
		$("#overlay-container").show();
		$(sel).show()
	})

	//hide overlay when clicking it
	$("#overlay-container").not(".code").click(function(){
		$("#overlay-container").hide();
		$(".content").hide()
	})
});