// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){
  if ($("#items").length>0){
    window.setInterval('ajaxCall()', 15000);
    //put setInterval call here to keep it on the div in the page where you want it to refresh
  }
  $(document).foundation();
}); //foundation is the styling

function ajaxCall() {
  var id = $("#bid_item_id").val();
  response = $.ajax({
    url: "/refresh?id="+id,
  });
}
