// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
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
		
		//$('#wordCount').css({"color": "#DAA520"})
			$("body").addClass("gold");
	}
	else{
		$("body").removeClass("gold");
	}
}

// $(function() {
  // $( "#sortable1, #sortable2, sortable3" ).sortable({
    // revert: true
   //});
   //$("#sortable1, #sortable2, #sortable3").sortable(
     // { connectWith: "#sortable1, #sortable2, #sortable3" }
   //);
   //$( "#draggable1, #draggable2, #draggable3" ).draggable({
     //connectToSortable: "#sortable1, #sortable2, #sortable3",
   /*  helper: "clone",*/
     //revert: "invalid"
	   //});
  
   
  //$( "ul, li" ).disableSelection();
  //});

  $(document).ready(function(){		//when document is ready aka when the page has loaded
    $('#jean').click(function(e){	//Then perform this function
      e.preventDefault();
      $.ajax({
        url: "/articles/1",
        success: function(article){
            $("#result").html(article);
          },
        error: function(response){
          console.log("BOO");
        }
      });
    });
});
$(function () {	
     $("#sortable1").sortable({
         connectWith: ".connectedSortable",
         update: function () {
             order1 = $('#sortable1').sortable('toArray').toString();
          //   alert("Order 1:" + order1); //Just showing update
             $.ajax({
                 type: "POST",
                 url: "/articles",
                 data: order1,
                 //dataType: "json",
                 success: function () {
					 $("#1").html(order1[0]);
					 $("#2").html(order1[0]);
					 console.log(order1)
                 }
             });

         }
     }).disableSelection();
 });
  
  

  /* 
   $('#sortable1').sortable({
       axis: 'y',
	   
       update: function (event, ui) {
           var sorted = $(this).sortable('toArray');
           // POST to server using $.post or $.ajax
         console.log(sorted);
		 $.ajax({
		              data: sorted,
		              type: 'POST',
		            	url: "/welcome",
					 dataType: "json",
		            });
       }
	  
   });
  
   */
   
 