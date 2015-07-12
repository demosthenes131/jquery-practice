//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

// Create a select and append to #menu

var $select = $("<select></select>");
$("#menu").append($select);

// Cycle over menu links

$("#menu a").each(function(){
  var $anchor = $(this);
  
  // Create an option
  
  var $option = $("<option></option>");
  
  // deal with selected options depending on current page
  
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  
  // Options value is the href
  
  $option.val($anchor.attr("href"));
  
  // options text is the text of link
  
  $option.text($anchor.text());
  
  // append option to select
  
  $select.append($option);
});  

// Go to the page selected

$select.change(function(){

  // go to select's location

window.location = $select.val();
});

