// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
	function word_count(){
		//words_input = document.getElementById('article_text').value;
		words_input= $('#article_text').val();
		words_output = words_input.split(/\b\S+\b/g).length-1;
		//document.getElementById('wordCount').innerHTML = words_output;	
		$('#wordCount').html(words_output); 	
		one_thousand_words();
	}
	function one_thousand_words(){
		if($('#wordCount').html() >= 11){
			//$("body").css("background-image","url('fire_works.gif')");
			//$("body").css("background-color", "blue");	
			//$('#wordCount').css({"color": "#DAA520"})
				$("body").addClass("gold");
		}
		else{
			$("body").removeClass("gold");
		}
	}
     $( function() {
       $( "#sortable1, #sortable2, sortable3" ).sortable({
         revert: true
       });
	   $("#sortable1, #sortable2, #sortable3").sortable(
	      { connectWith: "#sortable1, #sortable2, #sortable3" }
	   );
       $( "#draggable1, #draggable2, #draggable3" ).draggable({
         connectToSortable: "#sortable1, #sortable2, #sortable3",
       /*  helper: "clone",*/
         revert: "invalid"
       });
       $( "ul, li" ).disableSelection();
	   
	   $('#sortable1').sortable({
	       axis: 'y',
	       update: function (event, ui) {
	           var sorted = $(this).sortable('toArray');

	           // POST to server using $.post or $.ajax
	      //     console.log(data);
			   $.ajax({
			              data: sorted,
			              type: 'POST',
			             url: 'articles'
			                   });
	       }
	   });
	   
	   
	   
     } );
	 
	 
		